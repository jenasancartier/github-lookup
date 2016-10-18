var apiKey = require('./../.env').apiKey;
var Repos = require("./../js/lookup.js").reposModule;
var username;

var showRepo = function(repoName, details){
  $("#showRepo").append("<li>" + "<b>" + repoName + "</b>" + "<br>" + details + "</li>");
};

$(document).ready(function(){
  var currentReposObject = new Repos();
  $("#githubSubmit").click(function(event){
    event.preventDefault();
    $("#octocat").hide();
    $("#results").show();
    $("#showRepo").empty();
    username = $("#githubName").val();
    $("#githubName").val("");
    $("#showName").text(username + "'s repositories:");
    currentReposObject.getRepos(username, showRepo);
  });
});
