var apiKey = require('./../.env').apiKey;
var username;

function Repos(){
}

Repos.prototype.getRepos = function(username, showRepo){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    $("#showRepo").text(username + 's Repositories:');
    console.log(response);
    for(var i = 0; i < response.length; i++){
    showRepo(response[i].name, response[i].description);
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = Repos;
