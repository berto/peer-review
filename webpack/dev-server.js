var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var port = 2992;
var config = require("./make-webpack-config")({
  development: true,
  // Set to true to enable redux dev panel.
  devPanel: false,
  devtool: "source-map",
  debug: true
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  colors: true,
  progress: true,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
