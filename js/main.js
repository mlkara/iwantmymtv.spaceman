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
  eighties: ['Their name was inspired by a character in Barbarella named Durand Durand', 'Sting, Andy, and Stewart are the band members.', 'Her first major film role was Desperately Seeking Susan.', 'The band was originally called the Angel and the Snake.', 'Eddie Cochran, 1950s singer, is named in the lyrics of the opening verse of their hit single, Come on Eileen', 'Their album Kick yielded four top  10 US singles: Need you Tonight, Devil Inside, New Sensation, and Never Tear us Apart.', 'New Wave band formed by Robbie Grey, Gary McDowell, and Michael Conroy.', 'He changed his name to a symbol.',  
   'Formed in LA, the founding members were classmates from Fairfaxe High School—Anthony, Flea, Hillel, and Jack.', 'Their debut album, Murmur, was named album of the year by Rolling Stones.', 'They opened for Madonna during the Virgin Tour. They had to fight for their right to party but were sabotaged.', 'Their logo showcased how "all-American" they were. A staple at CBGBs.', 'Changed his name so he would not be confused with Davy Jones of the Monkees.', 'A duo, inducted into the Rock and Roll Hall of Fame in 2022, have been together since 1980. Sweet dreams are made of this.', 'The only number one hit for this band was Jump.', 'Their breakthrough album in 1986 was Slippery When Wet.', 'Her stage name came from a Muddy Waters song, Bad Reputation. She loves rock and roll.',  'In the late 70s, she recorded jingles for Pepsi. You better run because love is a battlefield.', 'One of their biggest hits, Manic Monday, was written by Prince. ', 'This band had the first ever video played on MTV. Video killed the Radio Star', 'David Bowie and William Burroughs had a hand in inspiring their name, It was just like heaven.'],
  nineties: ['red hot chili peppers', 'pearl jam', 'nirvana', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixie', 'raidiohead', 'garbage', 'alanis morrisette',],
  aughts: ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'],
  tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers',],
  twenties: ['coming soon'],
  mixTape: ['coming soon'],
};

// const songs = {
//   seventies: ['https://embed.music.apple.com/us/album/heart-of-glass/1440929735?i=1440930363', 'https://embed.music.apple.com/us/album/changes/1039798000?i=1039798010', 'Glam rock band who influenced the Sex Pistols and Duran Duran', 'Band members include: Robert Plant, Jimmy Page, John Bonham, John Paul Jones', 'First rock opera was Tommy mostly written by Pete Townsend of this band.', 'This fab four was formed in Liverpool.', 'Named after a song by Muddy Water.', 'A prism is featured on their 1973 album.', 'A poet and influential component of the NYC punk rock movement. One of her songs was written by Bruce Springsteen and later covered by 10,000 maniacs in the 90s. ','Members of this LA band include: Joan Jett, Cherie Currie, Lita Ford, and Sandy West. ', 'Named for the fake hotel check in name, Paul Ramon, used by Paul McCartney', 'The lead singer accidentally sat on an open piano and laughed during the intro of Roxanne. The group liked it so much that not only did they leave it in, but they also gave him an additional credit for playing, butt piano. on the song.', 'Guitarist, singer, and principal songwriter for the rock band the Velvet Underground'],
//   eighties: ['duran duran', 'the police', 'madonna', 'blondie', 'dexys midnight runners', 'inxs', 'modern english', 'prince',  
//    'red hot chili peppers', 'rem', 'beastie boys', 'alanis morrisette', 'the ramones', 'david bowie', 'lou reed', 'patti smith', 'eurythmics', 'van halen', 'bon jovi', 'joan jett',  'pat benatar', 'the bangles', 'the buggles', 'elvis costello'],
//   nineties: ['red hot chili peppers', 'pearl jam', 'nirvana', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixie', 'raidiohead', 'garbage'],
//   aughts: ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'],
//   tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers',],
//   twenties: ['coming soon'],
//   mixTape: ['coming soon'],
//};
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
const hintMessage = document.getElementById('hints');
const winner = document.getElementById('win');
const scores = document.getElementById('loss');






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
    loss = null; 
    hintEl.textContent = 'HINT';
    category = categorySelect.value || 'seventies';
    categoryIdx =  Math.floor(Math.random() * categories[category].length);
    randomWord = categories[category][categoryIdx].split('');
    hint = hints[category][categoryIdx]
    console.log(hint)
    word = randomWord.map(letter => letter === ' ' ? ' ' : ' _ ')
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
    if (randomWord.join('') === word.join('')) win = 'w'
  } else {
    guesses.push(guess);
    lives = lives - 1; 
    if (lives === 0) win = 'l'
  }
  
  render();
}

                                     
function giveHint() { 
 hintEl.textContent = hint;
};

function renderScores() {
   if (guesses.indexOf('-') == -1) {
   } else if (guess <= 0);
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

