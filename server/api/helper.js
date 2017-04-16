var request = require('request')

function getUser(id, accessToken) {
  return new Promise(function (resolve, reject) {
    var options = {
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    };
    var url = process.env.MEMBERS_URL + "api/v2/users/" + id;
    request(url, options, function (error, response, body) {
      if (error) {
        reject(error);
      }
      var userInfo = JSON.parse(body).results[0];
      resolve(userInfo);
    });
  });
}

function getUsersById(feedbacks, accessToken) {
  var galvanize_ids = [];
  feedbacks.forEach(function(feedback) {
    if (feedback.galvanize_id) {
      galvanize_ids.push(getUser(feedback.galvanize_id, accessToken));
    }
  });
  return Promise.all(galvanize_ids);
}

function matchUserById(feedbacks, userList) {
  feedbacks.forEach(function(feedback) {
    userList.forEach(function(user) {
      if(feedback.galvanize_id == user.id) { 
        feedback.galvanize_user = user;
      }
    });
  });
}

module.exports = {
  getUser: getUser,
  getUsersById: getUsersById,
  matchUserById: matchUserById
}
