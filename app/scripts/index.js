// alert('Colin & Chase Rule All');
var $ =  require('jquery');
var models = require('./models');
var template = require('../templates/template.hbs');
var dropdown = require('../templates/dropdown.hbs');
var _ = require('underscore');

//wait for DOM to be ready
$(function(){

var characterChoice;

var chars = [
  new models.GoodGuy({name: 'Neo', image:'http://static.comicvine.com/uploads/original/11119/111191852/5023934-4839031750-neo1.j.jpeg'}),
  new models.GoodGuy({name: 'Beatrix Kiddo', image: 'http://static1.comicvine.com/uploads/original/11119/111194436/5168520-7476152247-9ad58.jpg'}),
  new models.BadGuy({name: 'Agent Smith', image:'http://vignette1.wikia.nocookie.net/matrix/images/4/4d/Agent-smith-the-matrix-movie-hd-wallpaper-2880x1800-4710.png/revision/latest?cb=20140504013834'})
];

var goodGuys = _.filter(chars, {'color': 'green'});
$('.char-holder').html(dropdown({'chars': goodGuys}));


$('.protagonist').on('click', function(event){
  event.preventDefault();

  var $characterSelection = $(this);
  var characterName = $characterSelection.data('protag-name');
});





// PUTS ARRAY INTO HTML OF CHARACTERS ***************************
//******************************************************
// var context = {
//   'chars': chars
// }
//
// $('.heroes').html(template(context));



// CHARACTER CHOICE DROPDOWN ***************************
//******************************************************
var $charDropdown = $('.char-dropdown');

$charDropdown.on('click', function(){
  $(this).next().slideToggle();

});


});
