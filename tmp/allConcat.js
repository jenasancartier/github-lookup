var apiKey = require('./../.env').apiKey;
var Repos = require("./../js/lookup.js").reposModule;
var username;

var showRepo = function(repoName, details){
  $("#showRepo").append("<li>" + repoName + " is an app about " + details + ".</li>");
};

$(document).ready(function(){
  var currentReposObject = new Repos();
  $("#githubSubmit").click(function(event){
    event.preventDefault();
    username = $("#githubName").val();
    $("#githubName").val("");
    currentReposObject.getRepos(username, showRepo);
  });
});
