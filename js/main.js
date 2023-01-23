 /*----- constants -----*/
const categories = {
  seventies: ['blondie', 'david bowie', 'roxy music', 'led zepplin', 'the who', 'the beatles', 'the rolling stones', 'pink floyd', 'patti smith','the runaways', 'the ramones', 'the police', 'lou reed'],
  eighties: ['duran duran', 'the police', 'madonna', 'blondie', 'dexys midnight runners', 'inxs', 'modern english', 'prince',  
   'red hot chili peppers', 'rem', 'beastie boys', 'alanis morrisette', 'the ramones', 'david bowie', 'lou reed', 'patti smith', 'eurythmics', 'van halen', 'bon jovi', 'joan jett',  'pat benatar', 'the bangles', 'the buggles', 'elvis costello'],
  nineties: ['red hot chili peppers', 'pearl jam', 'nirvana', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixie', 'raidiohead', 'garbage'],
  aughts: ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'],
  tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers',],
}

const hints = {
  seventies: ['Their song, Call Me, was on the film soundtrack of American Giglo(1980)', 'His alter ego in 1972 was Ziggy Stardust', 'Glam rock band who influenced the Sex Pistols and Duran Duran', 'Band members include: Robert Plant, Jimmy Page, John Bonham, John Paul Jones', 'First rock opera was Tommy mostly written by Pete Townsend of this band.', 'This fab four was formed in Liverpool.', 'Named after a song by Muddy Water.', 'A prism is featured on their 1973 album.', 'A poet and influential component of the NYC punk rock movement. One of her songs was written by Bruce Springsteen and later covered by 10,000 maniacs in the 90s. ','Members of this LA band include: Joan Jett, Cherie Currie, Lita Ford, and Sandy West. ', 'Named for the fake hotel check in name, Paul Ramon, used by Paul McCartney', 'The lead singer accidentally sat on an open piano and laughed during the intro of Roxanne. The group liked it so much that not only did they leave it in, but they also gave him an additional credit for playing, butt piano. on the song.', 'Guitarist, singer, and principal songwriter for the rock band the Velvet Underground'],
  eighties: ['duran duran', 'the police', 'madonna', 'blondie', 'dexys midnight runners', 'inxs', 'modern english', 'prince',  
   'red hot chili peppers', 'rem', 'beastie boys', 'alanis morrisette', 'the ramones', 'david bowie', 'lou reed', 'patti smith', 'eurythmics', 'van halen', 'bon jovi', 'joan jett',  'pat benatar', 'the bangles', 'the buggles', 'elvis costello'],
  nineties: ['red hot chili peppers', 'pearl jam', 'nirvana', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixie', 'raidiohead', 'garbage'],
  aughts: ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'],
  tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers',],
  twenties: ['coming soon'],
  mixTape: ['coming soon'],
};
  /*----- state variables -----*/
let chosenCategory;  
let wrongLetters; 
let lives;
let guesses;
let win; 

  /*----- cached elements  -----*/
const hintEl = document.getElementById('hints');
const btnEls = document.getElementById('letters');
const catEls = document.getElementById('categories');
const playAgainBtn = document.getElementById('play-again');
const commentEl = document.getElementById('comment');
const spaceImg = document.getElementById('spaceman');


  /*----- event listeners -----*/
  btnEls.addEventListener('click', handleGuess);
  hintEl.addEventListener('click', giveHint);
  catEls.addEventListener('click', setCategory);
  playAgainBtn.addEventListener('click',init);

  /*----- functions -----*/
  init();
    

  function init() {
    guesses = [ ];
    wrongLetters = [ ];
    lives = 6;
    win = null; 
    render()
};
  
function render() {
  renderScores();
  renderComments();
  spaceImg.style.backgroundImage = `url('imgs/spaceman${lives}.jpg')`
}

function handleGuess(evt) {
  const guess = evt.target.innerHTML.toLowerCase();
  console.log(guess)
  if (guesses.includes(guess)) return;
  guesses.push(guess);
  lives = lives - 1; 
  win = checkWinner();

  render();
}

function giveHint() {

};

function renderScores() {
        // for (let key in scores) {
        //     const scoreEl = docuemnt.getElementById(`${key}-score`);
        //     scoreEl.innerText - scores[key];
        // }
    }

function setCategory(evt) {
 chosenCategory = evt.target.id 
}

function checkWinner() {
        
}
      
function renderComments() {
  if (win === 'w')  {
    commentEl.innerHTML = "You Win!";
  } else if (win === 'l') {
    commentEl.innerHTML = "Game Over";
  } else {
    commentEl.innerHTML = "You have " + lives + " lives";
  }
}


     
    
  