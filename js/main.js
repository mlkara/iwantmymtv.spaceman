 /*----- constants -----*/
const categories = {
  seventies: ['blondie', 'david bowie', 'roxy music', 'led zepplin', 'the who', 'the beatles', 'the rolling stones', 'pink floyd', 'patti smith','the runaways', 'the ramones', 'the police', 'lou reed'],
  eighties: ['duran duran', 'the police', 'madonna', 'blondie', 'dexys midnight runners', 'inxs', 'modern english', 'prince',  
   'red hot chili peppers', 'rem', 'beastie boys', 'alanis morrisette', 'the ramones', 'david bowie', 'lou reed', 'patti smith', 'eurythmics', 'van halen', 'bon jovi', 'joan jett',  'pat benatar', 'the bangles', 'the buggles', 'elvis costello'],
  nineties: ['red hot chili peppers', 'pearl jam', 'nirvana', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixie', 'raidiohead', 'garbage', 'smash mouth', 'paul van dyk'],
  aughts: ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'],
  tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers', 'gunship', 'odesza'],
}

const hints = {
  seventies: ['Their song, Call Me, was on the film soundtrack of American Giglo(1980)', 'His alter ego in 1972 was Ziggy Stardust', 'Glam rock band who influenced the Sex Pistols and Duran Duran', 'Band members include: Robert Plant, Jimmy Page, John Bonham, John Paul Jones', 'First rock opera was Tommy mostly written by Pete Townsend of this band.', 'This fab four was formed in Liverpool.', 'Named after a song by Muddy Water.', 'A prism is featured on their 1973 album.', 'A poet and influential component of the NYC punk rock movement. One of her songs was written by Bruce Springsteen and later covered by 10,000 maniacs in the 90s. ','Members of this LA band include: Joan Jett, Cherie Currie, Lita Ford, and Sandy West. ', 'Named for the fake hotel check in name, Paul Ramon, used by Paul McCartney', 'The lead singer accidentally sat on an open piano and laughed during the intro of Roxanne. The group liked it so much that not only did they leave it in, but they also gave him an additional credit for playing, butt piano. on the song.', 'Guitarist, singer, and principal songwriter for the rock band the Velvet Underground'],
  eighties: ['Their name was inspired by a character in Barbarella named Durand Durand', 'Sting, Andy, and Stewart are the band members.', 'Her first major film role was Desperately Seeking Susan.', 'The band was originally called the Angel and the Snake.', 'Eddie Cochran, 1950s singer, is named in the lyrics of the opening verse of their hit single, Come on Eileen', 'Their album Kick yielded four top  10 US singles: Need you Tonight, Devil Inside, New Sensation, and Never Tear us Apart.', 'New Wave band formed by Robbie Grey, Gary McDowell, and Michael Conroy.', 'He changed his name to a symbol.',  
   'Formed in LA, the founding members were classmates from Fairfaxe High School—Anthony, Flea, Hillel, and Jack.', 'Their debut album, Murmur, was named album of the year by Rolling Stones.', 'They opened for Madonna during the Virgin Tour. They had to fight for their right to party but were sabotaged.', 'Their logo showcased how "all-American" they were. A staple at CBGBs.', 'Changed his name so he would not be confused with Davy Jones of the Monkees.', 'A duo, inducted into the Rock and Roll Hall of Fame in 2022, have been together since 1980. Sweet dreams are made of this.', 'The only number one hit for this band was Jump.', 'Their breakthrough album in 1986 was Slippery When Wet.', 'Her stage name came from a Muddy Waters song, Bad Reputation. She loves rock and roll.',  'In the late 70s, she recorded jingles for Pepsi. You better run because love is a battlefield.', 'One of their biggest hits, Manic Monday, was written by Prince. ', 'This band had the first ever video played on MTV. Video killed the Radio Star', 'David Bowie and William Burroughs had a hand in inspiring their name, It was just like heaven.'],
  nineties: ['The 1991 album, Blood Sugar Sex Magik, became the first huge success for this band. Check under the bridge.', 'They were originally called Mookie Baylock.', 'Their debut single, Love Buzz, Was a cover song. All apologies.', 'John Paul Jones of Led Zepplin arranged the strings on Automatic for the People. The sidewinder sleeps tonight with man on the moon.', 'This group was originally named 2nd Nature.', 'This band, originally from Orange County, were inspired by the Magic Kingdom at Disney when naming their 1995 album. Watch those spiderwebs.', 'He has two turntables and a microphone.', 'Original name was Sweet Children. Good Rid', 'The became famous with their album Everybody Else is Doing it.', 'Got their name from a true detective magazine. Iris', 'They recorded Siamese Dream in Georgia. Today or 1979', 'Bon Jovi inspired an element of Man in the Box', 'This LA band was formed by Love in 1989. Miss World', 'Where is my Mind?', 'Remember the Jerky Boys, the album Pablo Honey by this band was inspired by them. OK Computer', 'Their name was inspired by a friend stating that their music sounds like garbage.', 'One of her songs took her 10 minutes to write. You oughta know—ironic', 'They performed the remake of Im a Believer from the movie Shrek. You are an all star and I am walking on the sun.', 'Famous for pioneering the dance music sub-genre Trance in the early 90s. He has collaborated with David Byrne among others. Parallel dimension'],
  aughts: ['Their first public performance was at the Gold Dollar in Detroit on August 14, 1997.', 'Is This Its sleevenotes feature a credit for a mysterious guru, JP Bowersock,guitar teacher of Julian and Albert', 'Their drummer has a degree in classical percussion from the UNLV (University of Nevada, Las Vegas). Mr. Brightside.', 'The band teamed up with Google to create the first ever HTML5 powered music video for the single We Used to Wait.', 'They were originally called Pectoralz, however, in 1997, they renamed themselves Starfish.y', 'All of their album titles have five syllables. They could use somebody.', 'Their name came from a Virginia Woolf book that described the poor as “modest, mouse-like people.”', 'Their name came from the title of a short film lead singer Koenig had created for one of his classes.', 'The band was formed in 1994 in Seattle, Washington as a one-man project by ex Nirvana drummer Dave Grohl.', 'She was an army cadet in a sub-military program in Barbados, her home country.'],
  tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers', 'A British synthwave band formed by Dan Haigh and Alex Westaway', 'From Seatle, their name was taken from the sunken vessel owned by an uncle of one of the founders. Awaken when I get there.'],
  twenties: ['coming soon'],
  mixTape: ['coming soon'],
};

    const songs = {
    seventies: ['https://embed.music.apple.com/us/album/heart-of-glass/1440929735?i=1440930363', 'https://embed.music.apple.com/us/album/changes/1039798000?i=1039798010', 'Glam rock band who influenced the Sex Pistols and Duran Duran', 'Band members include: Robert Plant, Jimmy Page, John Bonham, John Paul Jones', 'First rock opera was Tommy mostly written by Pete Townsend of this band.', 'This fab four was formed in Liverpool.', 'Named after a song by Muddy Water.', 'A prism is featured on their 1973 album.', 'A poet and influential component of the NYC punk rock movement. One of her songs was written by Bruce Springsteen and later covered by 10,000 maniacs in the 90s. ','Members of this LA band include: Joan Jett, Cherie Currie, Lita Ford, and Sandy West. ', 'Named for the fake hotel check in name, Paul Ramon, used by Paul McCartney', 'The lead singer accidentally sat on an open piano and laughed during the intro of Roxanne. The group liked it so much that not only did they leave it in, but they also gave him an additional credit for playing, butt piano. on the song.', 'Guitarist, singer, and principal songwriter for the rock band the Velvet Underground'],
  //  eighties: ['duran duran', 'the police', 'madonna', 'blondie', 'dexys midnight runners', 'inxs', 'modern english', 'prince',  
//    'red hot chili peppers', 'rem', 'beastie boys', 'alanis morrisette', 'the ramones', 'david bowie', 'lou reed', 'patti smith', 'eurythmics', 'van halen', 'bon jovi', 'joan jett',  'pat benatar', 'the bangles', 'the buggles', 'elvis costello'],
//   nineties: ['red hot chili peppers', 'https://embed.music.apple.com/us/album/black/425465247?i=425465351"', '<https://embed.music.apple.com/us/album/come-as-you-are/1440783617?i=1440783636', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixie', 'raidiohead', 'garbage','smash mouth', 'paul van dyk],
//   aughts: ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'],
//   tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers', 'gunship', 'odesza'],
//   twenties: ['coming soon'],
//   mixTape: ['coming soon'],
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
let music;



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
const musicEl = document.querySelector('iframe');
const parentEl = document.querySelectorAll('#letters > button');






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
    music = songs[category][categoryIdx]
    console.log(hint)
    word = randomWord.map(letter => letter === ' ' ? ' ' : ' _ ')
    console.log(randomWord);
    
    console.log(music);

    render()
};
  
function render() {
  musicEl.style.visibility = win ? "visible": 'hidden'
  renderScores();
  renderComments();
  renderBtns();
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
    musicEl.src = music; 
  } else if (win === 'l') {
    commentEl.innerHTML = "Game Over";
    musicEl.src = music; 
  } else {
    commentEl.innerHTML = "You have " + lives + " lives";
  }
}

function renderBtns() {
  
  parentEl.forEach(function(letter) {
    console.log(letter)
    if (guesses.includes(letter.textContent.toLowerCase())) {
      letter.classList.add('wrongLetter')
      console.log(letter)
    } else if (word.includes(letter.textContent.toLowerCase())) {
      letter.classList.add('rightLetter')
      console.log(letter)
    } else {
      // letter.classList.add(' ')
    }
  })
  // render;
}


