import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

console.log('Good vs Evil');

import GoodGuy from './goodguy';
import BadGuy from './badguy';

// Good guys
let charlieBrown = new GoodGuy('Charlie Brown', 0, 15, 'With a swift kick like Morten Andersen, good old Charlie Brown delivers one final kick to defeat ');
let smeagol = new GoodGuy('Smeagol', 5, 20, 'Cruel men hurts us. Master tricksed us. They tried to steal our precious, but she killed ');
let liamNeeson = new GoodGuy('Liam Neeson', 10, 25, 'Liam Neeson has a particular set of skills. Skills he has aquired over a very long career. Skills that make him a nightmare for people like you. He looked for you, he found you, and he killed you, ');
let harryPotter = new GoodGuy('Harry Potter', 15, 30, ' ');

// on click button to select myGoodGuy

// Bad guys
let lucy = new BadGuy('Lucy van Pelt', 3, 11, 'Lucy: Usually I charge 5 cents for this kind of therapy, ');
let gollum = new BadGuy('Gollum', 8, 16, 'Cruel men hurts us. Master tricksed us. They tried to steal our precious, but she killed ');
let kidnapper = new BadGuy('Kidnappers', 13, 21, 'Got ya, ');
let voldemort = new BadGuy('Voldemort', 18, 26, 'Voldemort avada kedavra-ed ');

// on click button to select myBadGuy


// DOM Nodes Selected
let ggHealth = $('.ggHealth'); //.ggHealth is class of health span
let bgHealth = $('.bgHealth'); //.bgHealth is class of health span

let ggAttack = $('.ggAttack'); //.ggAttack is class of button

// Show current (default health)
ggHealth.text(charlieBrown.health);
bgHealth.text(lucy.health);

// Setting up ON Event: attack
ggAttack.on('click', function(){

  // Generate a random amount of hit points
  // Then attack!!!
  let GGHP = _.random(charlieBrown.minHP, charlieBrown.maxHP);
  lucy.hit(GGHP);
  let BGHP = _.random(lucy.minHP, lucy.maxHP);

  if (lucy.health <= 0){
    bgHealth.text('Defeated');
    alert(charlieBrown.defeatMsg + lucy.name + '!!!');
  } else {
    bgHealth.text(lucy.health);
    alert(lucy.name + ' retaliates!');
    charlieBrown.hit(BGHP);
    if(charlieBrown.health <= 0) {
      ggHealth.text('Defeated');
      alert(lucy.defeatMsg + charlieBrown.name + '!!!');
    };
      ggHealth.text(charlieBrown.health);
  };

  console.log(lucy);

});


// Templates
let ggTemplate = function(goodGuyObj){
  selectTemplate = '';
  _.each(goodGuyObj, function(){
  selectTemplate  += `
    <div class='wholeSelection'>
      
      <div class = 'goodGuyBox'>
        <div class = name>
          ${ GoodGuy.name }
        </div>  
        // <div class='image'><img
        <button name='selectGG'>Select <%= GoodGuy.name %></button>
      </div>
      </div>
    </div>

  `});
};

let ggAppend = function(obj){
  $('.ggCont').append(ggTemplate(obj));
}







