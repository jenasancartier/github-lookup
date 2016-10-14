var apiKey = require('./../.env').apiKey;
var username;

function Repos(){
}

Repos.prototype.getRepos = function(username){
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    console.log(response);
    console.log(JSON.stringify(response));
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = Repos;
