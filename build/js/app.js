(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "da6aec80c18887ef30bf6562816bc5839505a1c7";

},{}],2:[function(require,module,exports){
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

},{"./../.env":1}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;
var Repos = require("./../js/lookup.js").reposModule;
var username;

$(document).ready(function(){
  var currentReposObject = new Repos();
  $("#githubSubmit").click(function(event){
    event.preventDefault();
    username = $("#githubName").val();
    $("#githubName").val("");
    currentReposObject.getRepos(username);
  });
});

},{"./../.env":1,"./../js/lookup.js":2}]},{},[3]);
