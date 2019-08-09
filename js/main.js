// state
var order = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const winRound = ["1", "2", "3", "4", "5", "6"];
var guessRound =[];
var finalArr = [];
const laser = new Audio("sounds/laser-sound.mp3");
const loser = new Audio("sounds/loser-sound.mp3");
const timeSound = new Audio("sounds/countdown.mp3");
const gameStart = new Audio("sounds/game-start.mp3");
var boxes = document.querySelectorAll('.squares');
var cat = 'https://i.imgur.com/GFvYUSm.png'

//event listeners
document.getElementById('round').addEventListener('click', nextRound);
document.getElementById('reset').addEventListener('click', resetGame);
var title = document.getElementsByTagName('h1');
//functions

function nextRound() {
    timer(10);
    timeSound.play();
    var boxes = document.querySelectorAll('.squares');
    boxes.forEach(el =>{
    el.addEventListener('click', playerGuess);
});
    shuffle(order);
    boxes.forEach((el, idx) => {
        el.innerText = `${order[idx]}`

    });
    boxes.forEach((el, idx) => {
        el.style.transition = '10s';
        el.style.opacity = 0;
    });
};

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
 }

function playerGuess(evt) {
    guessRound.push(evt.target.innerText);
    evt.target.style.transition = '1s';
    evt.target.style.opacity = 1;
    evt.target.style = "color: white; border: 5px solid #F0ADF5; border-radius: 25%"
        if (evt.target.innerText == '1') {
            laser.play();
        };
        if (evt.target.innerText == "0") {
            loser.play();
        };
        if (guessRound.length === winRound.length) {
            for(i = 0; i < winRound.length; i++){
                winner();
                timeSound.pause();
            };    
    }
    
 };

    
    function winner() {
        if (finalArr.every(el => el === 1)) {
            alert ('meow')
    } else  {
        alert ('sucks')
        }
    }

function stop ( ) {
        for(i = 0; i < winRound.length; i++){
            if(guessRound[i] == "0"){
                gameStart.play();
            }
        }
    }
stop();

function resetGame() {
   order = [1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
   guessRound = [];
   boxes.forEach((el, idx) => {
       el.innerHTML = [];
       el.style.opacity = 1;
       el.style = "color: ; border:1px solid white"
       el.removeEventListener('click', playerGuess);
       timeSound.pause();
       timer(0);    
   })
};
let finalCountdown;
const timerDisplay = document.getElementById('timer');

function timer(seconds) {
    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);

    finalCountdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        if(secondsLeft <= 0) {
            clearInterval(finalCountdown);
            return;
        }
    displayTimeLeft(secondsLeft);
}, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;
    const display = `${minutes}:${remainderSeconds <10 ? '0' : ''}${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
}

