var path = require('path');
var express = require('express');
var http = require('http');
var config = require('./config');
var bodyParser = require('body-parser');
var teams = require('./api/teams');

module.exports = function(options) {
  var Renderer = require("../config/SimpleRenderer.js");

  // load bundle information from stats
  var stats = options.devServer ? require("../build/stats-dev.json") : require("../build/stats.json");

  var publicPath = stats.publicPath;

  var renderer = new Renderer({
    styleUrl: options.separateStylesheet && (publicPath + "resources.css?" + stats.hash),
    scriptUrl: publicPath + [].concat(stats.assetsByChunkName.resources)[0]
  });

  var app = express();

  // serve the static assets
  app.use("/_assets", express.static(path.join(__dirname, "..", "build", "public"), {
    maxAge: "200d" // We can cache them as they include hashes
  }));
  app.use("/", express.static(path.join(__dirname, "..", "public"), {}));

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use('/api/teams', teams);

  app.get("/*", function(req, res) {
    renderer.render(
      req.path,
      function(err, html) {
        if(err) {
          res.statusCode = 500;
          res.contentType = "text; charset=utf8";
          res.end(err.message);
          return;
        }
        res.contentType = "text/html; charset=utf8";
        res.end(html);
      }
    );
  });

  var server = http.createServer(app);

  server.listen(config.port, function () {
    console.log('listening on http://localhost:' + config.port);
  });
};
