// alert('Colin & Chase Rule All');
var $ =  require('jquery');
var models = require('./models');
var stageTemplate = require('../templates/stage.hbs');
var template = require('../templates/template.hbs');
var dropdown = require('../templates/dropdown.hbs');
var _ = require('underscore');

//waits for DOM to be ready
$(function(){

var characterChoice;
var selectedCharacter;
var selectedBadGuy;

var goodGuys = [
  new models.GoodGuy({name: 'Neo', image:'http://vignette4.wikia.nocookie.net/matrix/images/b/bb/Neo_main_page.png/revision/latest?cb=20130502002158'}),
  new models.GoodGuy({name: 'Beatrix Kiddo', image: 'http://67.media.tumblr.com/d23cac7214553d3e6c40039ccce9cdc2/tumblr_mophleNmRo1s8a280o1_1280.png'}),
  new models.GoodGuy({name: 'Bubbles', image: 'https://lh3.ggpht.com/QikRYDuc28DXrAv9-9i-W_4RTMdrlfO6SlfuZFXjnLuCd4AhDdaaDZJ5SmUT_6ibuWcE=w300'}),
  new models.GoodGuy({name: 'Cloud Strife', image: 'http://vignette4.wikia.nocookie.net/finalfantasy/images/4/46/SSB4_-_Cloud_Strife.png/revision/latest?cb=20160228175125'}),
  new models.GoodGuy({name: 'Ellen Ripley', image: 'http://vignette1.wikia.nocookie.net/vsbattles/images/6/67/Ellen_Ripley_render.png/revision/latest?cb=20160213190344'})
];

var badGuys = [
  new models.BadGuy({name: 'Bill', image: 'https://s-media-cache-ak0.pinimg.com/originals/f4/da/6a/f4da6a305089e0c73a6f59b8070c5a53.jpg'}),
  new models.BadGuy({name: 'Agent Smith', image: 'http://vignette1.wikia.nocookie.net/the-adventures-of-the-gladiators-of-cybertron/images/4/49/Agent_Smith.png/revision/latest?cb=20150225191109'}),
  new models.BadGuy({name: 'Mr. Lahey', image: 'https://pbs.twimg.com/profile_images/577523790986477568/0HD6jqTQ.jpeg'}),
  new models.BadGuy({name: 'Sephiroth', image: 'https://upload.wikimedia.org/wikipedia/en/c/c4/Sephiroth.png'}),
  new models.BadGuy({name: 'Alien', image: 'http://www.refinfo.hu/szhely/mihalovits_nandor/Vila%C2%A6%C3%BCgegyetem/img/bg_alien.png'})
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

setTimeout(function(){
    $('.goodguy-holder .progress .progress-bar').css({
      width:  selectedCharacter.hp + '%'
      })
    }, 1000);

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

  setTimeout(function(){
    if(selectedCharacter.hp <= 0){
      alert('YOU LOSE, HAHA!');
    } else if(selectedBadGuy.hp <= 0){
      alert('YOU WIN!!!!');
    }}, 500);

})



$(document).on('click', '.reset-button', function(event){
  event.preventDefault();
  $('.ui').html(dropdown({'chars': goodGuys}));
  var $charDropdown = $('.char-dropdown');

  $charDropdown.on('click', function(){
    $(this).next().slideToggle();

  });
});

// $(document).on('click', '.attack-button', function(event){
//   event.preventDefault();
//     $('.avatar-goodguy').effect("shake", {times: 4}, 1000);
// });





});
