 /*----- constants -----*/
const categories = {
  seventies: ['blondie', 'david bowie', 'roxy music', 'led zepplin', 'the who', 'the beatles', 'the rolling stones', 'pink floyd', 'patti smith','the runaways', 'the ramones', 'the police', 'lou reed', 'jackson browne'],
  eighties: ['duran duran', 'the police', 'madonna', 'dexys midnight runners', 'inxs', 'modern english', 'prince',  
   , 'the ramones', 'eurythmics', 'van halen', 'bon jovi', 'joan jett',  'pat benatar', 'the bangles', 'the buggles', 'elvis costello', 'pixies'],
  nineties: ['red hot chili peppers', 'pearl jam', 'nirvana', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixies', 'radiohead', 'garbage', 'smash mouth', 'paul van dyk', 'beastie boys', 'alanis morrisette', 'the rembrandts'],
  aughts: ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'],
  tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers', 'gunship', 'odesza'],
}

const hints = {
  seventies: ['Their song, Call Me, was on the film soundtrack of American Giglo(1980)', 'His alter ego in 1972 was Ziggy Stardust', 'Glam rock band who influenced the Sex Pistols and Duran Duran', 'Band members include: Robert Plant, Jimmy Page, John Bonham, John Paul Jones', 'First rock opera was Tommy mostly written by Pete Townsend of this band.', 'This fab four was formed in Liverpool.', 'Named after a song by Muddy Water.', 'A prism is featured on their 1973 album.', 'A poet and influential component of the NYC punk rock movement. One of her songs was written by Bruce Springsteen and later covered by 10,000 maniacs in the 90s. ','Members of this LA band include: Joan Jett, Cherie Currie, Lita Ford, and Sandy West. ', 'Named for the fake hotel check in name, Paul Ramon, used by Paul McCartney', 'The lead singer accidentally sat on an open piano and laughed during the intro of Roxanne. The group liked it so much that not only did they leave it in, but they also gave him an additional credit for playing, butt piano. on the song.', 'Guitarist, singer, and principal songwriter for the rock band the Velvet Underground'],
  eighties: ['Their name was inspired by a character in Barbarella named Durand Durand', 'Sting, Andy, and Stewart are the band members.', 'Her first major film role was Desperately Seeking Susan.', 'Eddie Cochran, 1950s singer, is named in the lyrics of the opening verse of their hit single, Come on Eileen', 'Their album Kick yielded four top 10 US singles: Need you Tonight, Devil Inside, New Sensation, and Never Tear us Apart.', 'New Wave band formed by Robbie Grey, Gary McDowell, and Michael Conroy.', 'He changed his name to a symbol.',  
   'Their logo showcased how "all-American" they were. A staple at CBGBs.', 'A duo, inducted into the Rock and Roll Hall of Fame in 2022, have been together since 1980. Sweet dreams are made of this.', 'The only number one hit for this band was Jump.', 'Their breakthrough album in 1986 was Slippery When Wet.', 'Her stage name came from a Muddy Waters song, Bad Reputation. She loves rock and roll.',  'In the late 70s, she recorded jingles for Pepsi. You better run because love is a battlefield.', 'One of their biggest hits, Manic Monday, was written by Prince. ', 'This band had the first ever video played on MTV. Video killed the Radio Star', 'David Bowie and William Burroughs had a hand in inspiring their name, It was just like heaven.', 'Where is my Mind?'],
  nineties: ['The 1991 album, Blood Sugar Sex Magik, became the first huge success for this band. Check under the bridge.', 'They were originally called Mookie Baylock.', 'Their debut single, Love Buzz, Was a cover song. All apologies.', 'John Paul Jones of Led Zepplin arranged the strings on Automatic for the People. The sidewinder sleeps tonight with man on the moon.', 'This group was originally named 2nd Nature.', 'This band, originally from Orange County, were inspired by the Magic Kingdom at Disney when naming their 1995 album. Watch those spiderwebs.', 'He has two turntables and a microphone.', 'Original name was Sweet Children. Good Rid', 'The became famous with their album Everybody Else is Doing it.', 'Got their name from a true detective magazine. Iris', 'They recorded Siamese Dream in Georgia. Today or 1979', 'Bon Jovi inspired an element of Man in the Box', 'This LA band was formed by Love in 1989. Miss World', 'Remember the Jerky Boys, the album Pablo Honey by this band was inspired by them. OK Computer', 'Their name was inspired by a friend stating that their music sounds like garbage.', 'They performed the remake of Im a Believer from the movie Shrek. You are an all star and I am walking on the sun.', 'Famous for pioneering the dance music sub-genre Trance in the early 90s. He has collaborated with David Byrne among others. Parallel dimension', 'They had to fight for their right to party but were sabotaged.', 'One of her songs took her 10 minutes to write. You oughta know—ironic.', 'At the coffee shop with some friends. Ill be there for you.'],
  aughts: ['Their first public performance was at the Gold Dollar in Detroit on August 14, 1997.', 'Is This Its sleevenotes feature a credit for a mysterious guru, JP Bowersock,guitar teacher of Julian and Albert', 'Their drummer has a degree in classical percussion from the UNLV (University of Nevada, Las Vegas). Mr. Brightside.', 'The band teamed up with Google to create the first ever HTML5 powered music video for the single We Used to Wait.', 'They were originally called Pectoralz, however, in 1997, they renamed themselves Starfish.y', 'All of their album titles have five syllables. They could use somebody.', 'Their name came from a Virginia Woolf book that described the poor as “modest, mouse-like people.”', 'Their name came from the title of a short film lead singer Koenig had created for one of his classes.', 'The band was formed in 1994 in Seattle, Washington as a one-man project by ex Nirvana drummer Dave Grohl.', 'She was an army cadet in a sub-military program in Barbados, her home country.'],
  tens: ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers', 'A British synthwave band formed by Dan Haigh and Alex Westaway', 'From Seatle, their name was taken from the sunken vessel owned by an uncle of one of the founders. Awaken when I get there.'],
  twenties: ['coming soon'],
  mixTape: ['coming soon'],
};

const songs = {
  seventies: ['https://embed.music.apple.com/us/album/heart-of-glass/1440929735?i=1440930363', 'https://embed.music.apple.com/us/album/changes/697650603?i=697651127', 'https://embed.music.apple.com/us/album/virginia-plain/1440836569?i=1440836588fluenced', 'https://embed.music.apple.com/us/album/stairway-to-heaven/580708175?i=580708180', 'https://embed.music.apple.com/us/album/my-generation-stereo-version/1443123252?i=1443123602', 'https://embed.music.apple.com/us/album/come-together/1441164426?i=1441164430', 'https://embed.music.apple.com/us/album/paint-it-black/1440764786?i=1440765582', 'https://embed.music.apple.com/us/album/wish-you-were-here/1065973975?i=1065973980', 'https://embed.music.apple.com/us/album/because-the-night/456458596?i=456458658','https://embed.music.apple.com/us/album/cherry-bomb/1440747926?i=1440747928', 'https://embed.music.apple.com/us/album/i-wanna-be-sedated/77817363?i=77817249', 'https://embed.music.apple.com/us/album/roxanne/1440882817?i=1440883524', 'https://embed.music.apple.com/us/album/perfect-day/976826793?i=976827222','https://embed.music.apple.com/us/album/the-load-out/842470967?i=842470998'],
  eighties: ['https://embed.music.apple.com/us/album/the-reflex/696450569?i=696450584', 'https://embed.music.apple.com/us/album/every-breath-you-take/1440673959?i=1440674160', 'https://embed.music.apple.com/us/album/express-yourself/83448003?i=83446230', 'https://embed.music.apple.com/us/album/come-on-eileen-single-edit/1445280543?i=1445280544', 'https://embed.music.apple.com/us/album/need-you-tonight-2017-remaster/1614037635?i=1614037653', 'https://embed.music.apple.com/us/album/i-melt-with-you/1452734901?i=1452735552', 'https://embed.music.apple.com/us/album/when-doves-cry/1545704089?i=1545704094',  
  ,'https://embed.music.apple.com/us/album/blitzkrieg-bop/1127410202?i=1127410268', 'https://embed.music.apple.com/us/album/sweet-dreams-are-made-of-this/303097824?i=303097827', 'https://embed.music.apple.com/us/album/jump/976831013?i=976832495', 'https://embed.music.apple.com/us/album/wanted-dead-or-alive/1422954626?i=1422955215', 'https://embed.music.apple.com/us/album/i-love-rock-n-roll-with-steve-jones-paul-cook/1436362781?i=1436362806',  'https://embed.music.apple.com/us/album/love-is-a-battlefield/724157242?i=724157493', 'https://embed.music.apple.com/us/album/walk-like-an-egyptian/185868471?i=185868578', 'https://embed.music.apple.com/us/album/video-killed-the-radio-star/1444090125?i=1444090128','https://embed.music.apple.com/us/album/where-is-my-mind/1027465077?i=1027465608'],
  nineties: ['https://embed.music.apple.com/us/album/under-the-bridge/947701030?i=947701032', 'https://embed.music.apple.com/us/album/black/425465247?i=425465351"', '<https://embed.music.apple.com/us/album/come-as-you-are/1440783617?i=1440783636', 'https://embed.music.apple.com/us/album/losing-my-religion/1442996327?i=1442996689', 'https://embed.music.apple.com/us/album/waterfalls/270246704?i=270246724', 'https://embed.music.apple.com/us/album/spiderwebs/1440845400?i=1440845406', 'https://embed.music.apple.com/us/album/loser/1440636547?i=1440636710', 'https://embed.music.apple.com/us/album/basket-case/1160081985?i=1160082180', 'https://embed.music.apple.com/us/album/linger/1440735255?i=1440735263', 'https://embed.music.apple.com/us/album/iris/267536485?i=267537169', 'https://embed.music.apple.com/us/album/1979/721224313?i=721224621', 'https://embed.music.apple.com/us/album/would-2022-remaster/157316517?i=157317248', 'https://embed.music.apple.com/us/album/miss-world/1445732603?i=1445732609', 'https://embed.music.apple.com/us/album/creep/1097862062?i=1097862231', 'https://embed.music.apple.com/us/album/only-happy-when-it-rains/1440827138?i=1440827326','https://embed.music.apple.com/us/album/all-star/1440915299?i=1440915693', 'https://embed.music.apple.com/us/album/for-an-angel/1463197954?i=1463197973', 'https://embed.music.apple.com/us/album/sabotage/724771323?i=724771987', 'https://embed.music.apple.com/us/album/ill-be-there-for-you-theme-from-friends/373220996?i=373221221'],
  aughts: ['https://embed.music.apple.com/us/album/seven-nation-army/1533513536?i=1533513537', 'https://embed.music.apple.com/us/album/last-nite/266376953?i=266377010', 'https://embed.music.apple.com/us/album/mr-brightside/1440891166?i=1440891171', 'https://embed.music.apple.com/us/album/wake-up/1249417623?i=1249418625', 'https://embed.music.apple.com/us/album/yellow/1122782080?i=1122782283', 'https://embed.music.apple.com/us/album/sex-on-fire/290302885?i=290303003', 'https://embed.music.apple.com/us/album/float-on/201257412?i=201257515', 'https://embed.music.apple.com/us/album/oxford-comma/270425072?i=270425147', 'https://embed.music.apple.com/us/album/learn-to-fly/334811953?i=334812018', 'https://embed.music.apple.com/us/album/only-girl-in-the-world/1440808164?i=1440808179'],
  tens: ['https://embed.music.apple.com/us/album/stressed-out/974485462?i=974485474', 'https://embed.music.apple.com/us/album/dog-days-are-over/1440729743?i=1440729744', 'https://embed.music.apple.com/us/album/cigarette-daydreams/683346293?i=683346502', 'https://embed.music.apple.com/us/album/pursuit-of-happiness-nightmare-feat-mgmt-ratatat/1472484829?i=1472484938', 'https://embed.music.apple.com/us/album/aint-it-fun/593146366?i=593148438', 'https://embed.music.apple.com/us/album/ophelia/1072936167?i=1072936172', 'https://embed.music.apple.com/us/album/pumped-up-kicks/435761204?i=435761212', 'https://embed.music.apple.com/us/album/closer-feat-halsey/1170699510?i=1170699703', 'https://embed.music.apple.com/us/album/fly-for-your-life-instrumental/1512317611?i=1512317986', 'https://embed.music.apple.com/us/album/say-my-name-feat-zyra/897564246?i=897564278'],
};
  /*----- state variables -----*/
let chosenCategory; 
let hint;
let wrongLetters; 
let lives;
let guesses;
let win; 
let answer = '';
let renderLetters;
let word = null; 
let music;



  /*----- cached elements  -----*/
const hintEl = document.getElementById('hntsbutton');
const btnEls = document.getElementById('letters');
const catEls = document.getElementById('categories');
// const playAgainBtn = document.getElementById('play-again');
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
// playAgainBtn.addEventListener('click', init);
categorySelect.addEventListener('change', init);
document.querySelector('#play-again').addEventListener('click', init);

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
  hint = hints[category][categoryIdx];
  music = songs[category][categoryIdx];
  word = randomWord.map(letter => letter === ' ' ? ' ' : ' _ ');
  resetBtns();
  render();
};
  
function render() {
  musicEl.style.visibility = win ? "visible": 'hidden';
  renderScores();
  renderComments();
  renderBtns();
  spaceImg.src = `imgs/spaceman${lives}.jpg`;
  guessWord.textContent = word.join(''); 
};

function handleGuess(evt) {
  const guess = evt.target.innerHTML.toLowerCase();
  if (win || evt.target.tagName !== 'BUTTON' || guesses.includes(guess) || word.includes(guess)) return; 
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
    if (guesses.includes(letter.textContent.toLowerCase())) {
      letter.classList.add('wrongLetter')
    } else if (word.includes(letter.textContent.toLowerCase())) {
      letter.classList.add('rightLetter')
    } else {
    };
  });
}

function resetBtns() {
  parentEl.forEach(function(letter) {
      letter.classList.remove('wrongLetter')
      letter.classList.remove('rightLetter')
    }
  )}; 



