// alert('Colin & Chase Rule All');
var $ =  require('jquery');
var models = require('./models');
var template = require('../templates/template.hbs');

//wait for DOM to be ready
$(function(){

console.log(models);

var chars = [
  new models.GoodGuy({name: 'Neo', image:'http://static.comicvine.com/uploads/original/11119/111191852/5023934-4839031750-neo1.j.jpeg'}),
  new models.BadGuy({name: 'Agent Smith', image:'http://vignette1.wikia.nocookie.net/matrix/images/4/4d/Agent-smith-the-matrix-movie-hd-wallpaper-2880x1800-4710.png/revision/latest?cb=20140504013834'})
];

var context = {
  'chars': chars
}

$('.heroes').html(template(context));




});
