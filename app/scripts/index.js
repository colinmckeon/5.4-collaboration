// alert('Colin & Chase Rule All');
var $ =  require('jquery');
var models = require('./models');
var stageTemplate = require('../templates/stage.hbs');
var template = require('../templates/template.hbs');
var dropdown = require('../templates/dropdown.hbs');
var _ = require('underscore');

//wait for DOM to be ready
$(function(){

var characterChoice;
var selectedCharacter;
var selectedBadGuy;

var goodGuys = [
  new models.GoodGuy({name: 'Neo', image:'http://static.comicvine.com/uploads/original/11119/111191852/5023934-4839031750-neo1.j.jpeg'}),
  new models.GoodGuy({name: 'Beatrix Kiddo', image: 'http://static1.comicvine.com/uploads/original/11119/111194436/5168520-7476152247-9ad58.jpg'}),
  new models.GoodGuy({name: 'Bubbles', image: 'https://lh3.ggpht.com/QikRYDuc28DXrAv9-9i-W_4RTMdrlfO6SlfuZFXjnLuCd4AhDdaaDZJ5SmUT_6ibuWcE=w300'})
];

var badGuys = [
  new models.BadGuy({name: 'Bill', image: 'https://s-media-cache-ak0.pinimg.com/originals/f4/da/6a/f4da6a305089e0c73a6f59b8070c5a53.jpg'}),
  new models.BadGuy({name: 'Agent Smith', image: 'http://vignette1.wikia.nocookie.net/matrix/images/4/4d/Agent-smith-the-matrix-movie-hd-wallpaper-2880x1800-4710.png/revision/latest?cb=20140504013834'}),
  new models.BadGuy({name: 'Mr. Lahey', image: 'https://pbs.twimg.com/profile_images/577523790986477568/0HD6jqTQ.jpeg'})
];





// Dropdown of goodguys ***************************
//*************************************************
$('.ui').html(dropdown({'chars': goodGuys}));


$(document).on('click', '.protagonist', function(event){
  event.preventDefault();

  var characterName = $(this).text();

  selectedCharacter = goodGuys.filter(function(char){
    return char.name === characterName;
  })[0];
  var randomNum = _.random(0, badGuys.length-1);
  selectedBadGuy = badGuys[randomNum];



  console.log(selectedCharacter.color);

  $('.ui').html(stageTemplate());

  $('.goodguy-holder').html(template(selectedCharacter));
  $('.badguy-holder').html(template(selectedBadGuy));
});



// Sets the src
$('.attack-animation').find('img').show().attr('src', 'http://...');

// Removes the src
$('.attack-animation').find('img').hide().attr('src', '');


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


  function updateHealthStatus(){
    $('.goodguy-holder .progress .progress-bar').css({
      width:  selectedCharacter.hp + '%'
    });

    $('.badguy-holder .progress .progress-bar').css({
      width:  selectedBadGuy.hp + '%'
    })
  }

$(document).on('click', '.attack-button', function(){
  var badGuyDamage = _.random(1, selectedBadGuy.attackDamage);
  selectedCharacter.hp -= badGuyDamage;

  var goodGuyDamage = _.random(1, selectedCharacter.attackDamage);
  selectedBadGuy.hp -= goodGuyDamage;


  updateHealthStatus();
})
});
