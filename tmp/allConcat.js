var apiKey = require('./../.env').apiKey;
var Repos = require("./../js/lookup.js").reposModule;
var username;

// var showUserName = function(userName){
//   $("#showName").text(username + "'s repos:");
// };

var showRepo = function(repoName, details){
  $("#showRepo").append("<li>" + repoName + " is an app about " + details + ".</li>");
};

$(document).ready(function(){
  var currentReposObject = new Repos();
  $("#githubSubmit").click(function(event){
    event.preventDefault();
    $("#showRepo").empty();
    username = $("#githubName").val();
    $("#githubName").val("");
    $("#showName").text(username + "'s repositories:")
    currentReposObject.getRepos(username, showRepo);
  });
});
