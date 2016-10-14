var apiKey = require('./../.env').apiKey;
var Repos = require("./../js/lookup.js").reposModule;

$(document).ready(function(){
  var currentReposObject = new Repos();
  $("#githubSubmit").click(function(event){
    event.preventDefault();
    username = $("#githubName").val();
    $("#githubName").val("");
    currentReposObject.getRepos(username);
  });
});
