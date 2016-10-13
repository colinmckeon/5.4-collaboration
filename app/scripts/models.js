var $ =  require('jquery');
var _ = require('underscore');

function Character(config){
  config = config || {};
  $.extend(this, config);


}

var neo = new Character();
neo.hair = "brown";
neo.height = 'tall';

var chase = new Character({hair: 'brown'});

console.log(neo);
console.log(chase);
