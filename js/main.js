import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

console.log('Good vs Evil');

import GoodGuy from './goodguy';
import BadGuy from './badguy';

let hpImg = 'http://cdn.playbuzz.com/cdn/05612ae3-0911-4e51-8ff5-0c5b1b580cbf/5c212545-2724-4231-9805-82e931028689.jpg';
let volImg = 'https://upload.wikimedia.org/wikipedia/en/a/a3/Lordvoldemort.jpg';

// Good guys
let charlieBrown = new GoodGuy('Charlie Brown', 0, 15, 'With a swift kick like Morten Andersen, good old Charlie Brown delivers one final blow to defeat ');
let smeagol = new GoodGuy('Smeagol', 5, 20, 'Cruel men hurts us. Master tricksed us. They tried to steal our precious, but she killed ');
let liamNeeson = new GoodGuy('Liam Neeson', 10, 25, 'Liam Neeson has a particular set of skills. Skills he has aquired over a very long career. Skills that make him a nightmare for people like you. He looked for you, he found you, and he killed you, ');
let harryPotter = new GoodGuy('Harry Potter', 15, 30, 'Harry Potter expecto patronumed ', hpImg);

// on click button to select myGoodGuy

// Bad guys
let lucy = new BadGuy('Lucy van Pelt', 3, 11, 'Lucy: Usually I charge 5 cents for this kind of therapy, ');
let gollum = new BadGuy('Gollum', 8, 16, 'Cruel men hurts us. Master tricksed us. They tried to steal our precious, but she killed ');
let kidnapper = new BadGuy('Kidnappers', 13, 21, 'Got ya, ');
let voldemort = new BadGuy('Voldemort', 20, 30, 'Voldemort avada kedavra-ed ', volImg);

// on click button to select myBadGuy


// DOM Nodes Selected
let ggHealth = $('.ggHealth'); //.ggHealth is class of health span
let bgHealth = $('.bgHealth'); //.bgHealth is class of health span

let ggAttack = $('.ggAttack'); //.ggAttack is class of button

// Show current (default health)
ggHealth.text(harryPotter.health);
bgHealth.text(voldemort.health);

// Setting up ON Event: attack
ggAttack.on('click', function(){

  // Generate a random amount of hit points
  // Then attack!!!
  let GGHP = _.random(harryPotter.minHP, harryPotter.maxHP);
  voldemort.hit(GGHP);
  let BGHP = _.random(voldemort.minHP, voldemort.maxHP);

  if (voldemort.health <= 0){
    bgHealth.text('Defeated');
    alert(harryPotter.defeatMsg + voldemort.name + '!!!');
  } else {
    bgHealth.text(voldemort.health);
    alert(voldemort.name + ' retaliates!');
    harryPotter.hit(BGHP);
    if(harryPotter.health <= 0) {
      ggHealth.text('Defeated');
      alert(voldemort.defeatMsg + harryPotter.name + '!!!');
    };
      ggHealth.text(harryPotter.health);
  };

  console.log(voldemort);

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







