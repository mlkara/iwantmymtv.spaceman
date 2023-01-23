 /*----- constants -----*/
const Audio = new Audio();
const SPRITE_WIDTH = 504;
const alphabet = ['a', 'b', 'c', 'd'. 'e'. 'f'. 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  /*----- state variables -----*/
let categories;
let chosenCategory;  
let getHint;
let wrongLetters; 
let lives;
let guesses;
let won; 
let curFrame;
let guessLetters;  
  /*----- cached elements  -----*/
const alphaEl = document.getElementById('alphabet');
const hintEl = document.getElementById('hint');
const imgEl = document.querySelector('img');
const filmstripEl = document.getElementById('spaceman-filmstrip');
const btnEls = [...document.querySelectorAll('#btns-container > button')];

  /*----- event listeners -----*/
  document.getElementById('btns-container').addEventListener('click', handleBtnClick);
  var livesLeft = document.getElementById('Lives:');
  var showCat = document.getElementById('categoryMus');
  var needHint = document.getElementById('hint');
  var showHint = document.getAnimations('clue');

  /*----- functions -----*/
  init();

  function init() {
    curFrame = 0;
    render()
  };
  results = {

  };
  winner = 't';
 render();

 function render() {
    imgEl.src = `imgs/spaceman-${curFrame}.jpg`;
    filmstripEl.style.backgroundPosition = `-${SPRITE_WIDTH * (6 - curFrame)}px`;
    btnEls.forEach(function(btn) {
      btn.disabled = false;
      btn.style.backgroundColor = 'white';
    });
    btnEls[curFrame].disabled = true;
    btnEls[curFrame].style.backgroundColor = 'palegreen';
  }

  function handleBtnClick(evt) {
    const btn = evt.target;
    // Ensure that a button was clicked
    if (!btnEls.includes(btn)) return;
    curFrame = parseInt(btn.textContent);
    render();
  }

  function selectM ()
  currentrandom = words[Math.floor(Math.random() * words.length)];
  for (var i = o; i < currentrandom.length; i++)
  answer[i] = '';
  document.getElementById('blands').innerHTML = answer; 

  function letterChoice(letter)
    playerGuess = letter; 
    console.log(playerGuess);

    function renderScores() {
        for (let key in scores) {
            const scoreEl = docuemnt.getElementById(`${key}-score`);
            scoreEl.innerText - scores[key];
        }
    }

    var buttons = function() {
        alphabtns = document.getElementById('buttons');
        letters = docuemnt.getElementById('ul');
            for (var i = 0; i < alphabet.length; i++) {
                letters.id = 'alphabet';
                list = document.createElement('li');
                list.id = 'letter';
                list.innerHTML = alphabet[i];
                check();
                alphabtns.appendChild(letters);
                    letters.appendChild(list);
            }
    }

    var selectCat = function () {
        if (chosenCategory === categories[0]) {
          catagoryName.innerHTML = "The Chosen Category is the 1970s!";
        } else if (chosenCategory === categories[1]) {
          catagoryName.innerHTML = "The Chosen Category is the 1980s!";
        } else if (chosenCategory === categories[2]) {
          catagoryName.innerHTML = "The Chosen Category is the 1990s!";
        } else if (chosenCategory === categories[2]) {
           catagoryName.innerHTML = "The Chosen Category is the 2000s!";
        } else if (chosenCategory === categories[2]) {
           catagoryName.innerHTML = "The Chosen Category is the 2010s!";
        } else if (chosenCategory === categories[2]) {
          catagoryName.innerHTML = "The Chosen Category is the 2020s!";
          } 
      }

      result = function () {
        wordHolder = document.getElementById('hold');
        correct = document.createElement('ul');
    
        for (var i = 0; i < word.length; i++) {
          correct.setAttribute('id', 'my-word');
          guess = document.createElement('li');
          guess.setAttribute('class', 'guess');
          if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;
          } else {
            guess.innerHTML = "_";
          }
    
          geusses.push(guess);
          wordHolder.appendChild(correct);
          correct.appendChild(guess);
        }
      }
      
       comments = function () {
        showLives.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
          showLives.innerHTML = "Game Over";
        }
        for (var i = 0; i < guesses.length; i++) {
          if (counter + space === guesses.length) {
            showLives.innerHTML = "You Win!";
          }
        }
      }

      check = function () {
        list.onclick = function () {
          var guess = (this.innerHTML);
          this.setAttribute("class", "active");
          this.onclick = null;
          for (var i = 0; i < word.length; i++) {
            if (word[i] === guess) {
              geusses[i].innerHTML = guess;
              counter += 1;
            } 
          }
          var j = (word.indexOf(guess));
          if (j === -1) {
            lives -= 1;
            comments();
          } else {
            comments();
          }
        }
      }
    
      play = function () {
        categories = [
            seventies = ['blondie', 'david bowie', 'roxy music', 'led zepplin', 'the who', 'the beatles', 'the rolling stones', 'pink floyd', 'patti smith','the runaways', 'the ramones', 'the police', 'lou reed'];
            eighties = ['duran duran', 'the police', 'madonna', 'blondie', 'dexys midnight runners', 'inxs', 'modern english', 'prince',  
             'red hot chili peppers', 'rem', 'beastie boys', 'alanis morrisette', 'the ramones', 'david bowie', 'lou reed', 'patti smith', 'eurythmics', 'van halen', 'bon jovi', 'joan jett',  'pat benatar', 'the bangles', 'the buggles', 'elvis costello']
            nineties = ['red hot chili peppers', 'pearl jam', 'nirvana', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixie', 'raidiohead', 'garbage'];
            aughts = ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'];
            tens = ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers',];
            twenties = ['coming soon'];
            mixTape = ['coming soon'];
        ];

        chosenCategory = categories[Math.floor(Math.random() * categories.length)];
        word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
        word = word.replace(/\s/g, "-");
        console.log(word);
        buttons();
    
        geusses = [ ];
        lives = 10;
        counter = 0;
        space = 0;
        result();
        comments();
        selectCat();
        canvas();
      }
    
      play();
      
      hintEl.oneclick = function() {
        
            seventies = ['Their son, Call Me, was on the film soundtrack of American Giglo(1980)', 'His alter ego in 1972 was Ziggy Stardust', 'Glam rock band who influenced the Sex Pistols and Duran Duran', 'Band members include: Robert Plant, Jimmy Page, John Bonham, John Paul Jones', 'First rock opera was Tommy mostly written by Pete Townsend of this band.', 'This fab four was formed in Liverpool.', 'Named after a song by Muddy Water.', 'A prism is featured on their 1973 album.', 'A poet and influential component of the NYC punk rock movement. One of her songs was written by Bruce Springsteen and later covered by 10,000 maniacs in the 90s. ','Members of this LA band include: Joan Jett, Cherie Currie, Lita Ford, and Sandy West. ', 'Named for the fake hotel check in name, Paul Ramon, used by Paul McCartney', 'The lead singer accidentally sat on an open piano and laughed during the intro of Roxanne. The group liked it so much that not only did they leave it in, but they also gave him an additional credit for playing, butt piano. on the song.', 'Guitarist, singer, and principal songwriter for the rock band the Velvet Underground'];
            eighties = ['duran duran', 'the police', 'madonna', 'blondie', 'dexys midnight runners', 'inxs', 'modern english', 'prince',  
             'red hot chili peppers', 'rem', 'beastie boys', 'alanis morrisette', 'the ramones', 'david bowie', 'lou reed', 'patti smith', 'eurythmics', 'van halen', 'bon jovi', 'joan jett',  'pat benatar', 'the bangles', 'the buggles', 'elvis costello']
            nineties = ['red hot chili peppers', 'pearl jam', 'nirvana', 'rem', 'tlc', 'no doubt', 'beck', 'green day', 'the cranberries', 'goo goo dolls', 'smashing pumpkins', 'alice in chains', 'hole', 'pixie', 'raidiohead', 'garbage'];
            aughts = ['the white stripes', 'the strokes', 'the killers', 'arcade fire', 'coldplay', 'kings of leon', 'modest mouse', 'vampire weekend', 'foo fighters', 'rihanna'];
            tens = ['twenty one pilots', 'florence and the machine', 'cage the elephant', 'mgmt', 'paramore', 'the lumineers', 'foster the people', 'the chainsmokers',];
            twenties = ['coming soon'];
            mixTape = ['coming soon'];
      };

      var catagoryIndex = categories.indexOf(chosenCategory);
      var hintIndex = chosenCategory.indexOf(word);
      showClue.innerHTML = "Clue: - " +  hints [catagoryIndex][hintIndex];
    };
    document.getElementById('reset').onclick = function() {
        correct.parentNode.removeChild(correct);
        letters.parentNode.removeChild(letters);
        showClue.innerHTML = "";
        context.clearRect(0, 0, 400, 400);
        play();
      }
    };
    
  