var apiKey = require('./../.env').apiKey;

function Repos(){
}

Repos.prototype.getRepos = function(){
    console.log("hi, i'm a repo object!")
  }
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   }).fail(function(error){
//     console.log(error.responseJSON.message);
//   });
// };

exports.reposModule = Repos;
