(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "da6aec80c18887ef30bf6562816bc5839505a1c7";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var username;

function Repos(){
}

Repos.prototype.getRepos = function(username, showRepo){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    $("#showRepo").text;
    console.log(response);
    for(var i = 0; i < response.length; i++){
    showRepo(response[i].name, response[i].description);
  }
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.reposModule = Repos;

},{"./../.env":1}],3:[function(require,module,exports){
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

},{"./../.env":1,"./../js/lookup.js":2}]},{},[3]);
