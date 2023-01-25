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
let hint;
let wrongLetters; 
let lives;
let guesses;
let win; 
let answer = '';
let renderLetters
let word = null; 



  /*----- cached elements  -----*/
const hintEl = document.getElementById('hntsbutton');
const btnEls = document.getElementById('letters');
const catEls = document.getElementById('categories');
const playAgainBtn = document.getElementById('play-again');
const commentEl = document.getElementById('comment');
const spaceImg = document.querySelector('img');
const rndWord = document.getElementById('word');
const categorySelect = document.querySelector('select');
const guessWord = document.getElementById('word');
const hintMessage = document.getElementById('hints')
//const checkWinner = document.getElementById('win')



  /*----- event listeners -----*/
  btnEls.addEventListener('click', handleGuess);
  hintEl.addEventListener('click', giveHint);
  catEls.addEventListener('click', setCategory);
  playAgainBtn.addEventListener('click', init);
  categorySelect.addEventListener('change', init);

  /*----- functions -----*/
  init();
    

function init(evt) {
    guesses = [ ];
    wrongLetters = [ ];
    lives = 6;
    win = null; 
    hintEl.textContent = 'HINT';
    category = categorySelect.value || 'seventies';
    categoryIdx =  Math.floor(Math.random() * categories[category].length);
    randomWord = categories[category][categoryIdx].split('');
    hint = hints[category][categoryIdx]
    console.log(hint)
    word = randomWord.map(letter => letter === ' ' ? `   ` : ' _ ')
    console.log(randomWord);
  
    render()
};
  
function render() {
  renderScores();
  renderComments();
  spaceImg.src = `imgs/spaceman${lives}.jpg`
  guessWord.textContent = word.join('');
}

function handleGuess(evt) {
  const guess = evt.target.innerHTML.toLowerCase();
  if (evt.target.tagName !== 'BUTTON' || guesses.includes(guess) || word.includes(guess)) return; 
  if (randomWord.includes(guess)) {
    randomWord.forEach(function(char, idx){
      if (char === guess) word[idx] = guess;
    })
    console.log('right guess')
  } else {
    guesses.push(guess);
    lives = lives - 1; 
    console.log('wrong guess')
  }
  win = checkWinner();

  render();
}

                                     
function giveHint() { 
 hintEl.textContent = hint;
};

function renderScores() {

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

