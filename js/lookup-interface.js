var apiKey = require('./../.env').apiKey;
var Repos = require("./../js/lookup.js").reposModule;
var username;

$(document).ready(function(){
  var currentReposObject = new Repos();
  $("#githubSubmit").click(function(event){
    event.preventDefault();
    username = $("#githubName").val();
    $("#githubName").val("");
    var repository = currentReposObject.getRepos(username)
    // currentReposObject.getRepos(username);
    $("#showRepo").text(username)
  });
});
