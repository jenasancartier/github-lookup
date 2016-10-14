var apiKey = require('./../.env').apiKey;
var Repos = require("./../js/lookup.js").reposModule;

$(document).ready(function(){
  var currentReposObject = new Repos();
  currentReposObject.getRepos();
});
