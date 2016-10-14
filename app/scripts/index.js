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
  new models.GoodGuy({name: 'Bubbles', image: 'https://lh3.ggpht.com/QikRYDuc28DXrAv9-9i-W_4RTMdrlfO6SlfuZFXjnLuCd4AhDdaaDZJ5SmUT_6ibuWcE=w300'}),
  new models.BadGuy({name: 'Bill', image: 'https://s-media-cache-ak0.pinimg.com/originals/f4/da/6a/f4da6a305089e0c73a6f59b8070c5a53.jpg'}),
  new models.BadGuy({name: 'Agent Smith', image:'http://vignette1.wikia.nocookie.net/matrix/images/4/4d/Agent-smith-the-matrix-movie-hd-wallpaper-2880x1800-4710.png/revision/latest?cb=20140504013834'})
];

// Dropdown of goodguys ***************************
//*************************************************
var goodGuys = _.filter(chars, {'color': 'green'});
$('.ui').html(dropdown({'chars': goodGuys}));

var $characterName;

$(document).on('click', '.protagonist', function(event){
  event.preventDefault();

  $characterName = $(this).text();

  var selectedCharacter = goodGuys.filter(function(char){
    return char.name === $characterName;
  });

  console.log(selectedCharacter[0].color);

  $('.ui').html(template(selectedCharacter[0]));
});

// DISPLAYS BAD GUY *******************************
//*************************************************

// var badGuys = _.filter(char, {'color': 'red'});





// PUTS ARRAY INTO HTML OF CHARACTERS ******************
//******************************************************
// var context = {
//   'chars': chars
// }
//
// $('.input new div class').html(template(context));



// CHARACTER CHOICE DROPDOWN ***************************
//******************************************************
var $charDropdown = $('.char-dropdown');

$charDropdown.on('click', function(){
  $(this).next().slideToggle();

});

// HEALTH BAR SUBTRACTION ***************************
//***************************************************

// var healthBar = document.getElementById('health');
// health.value = health.value(subtract?);


});
