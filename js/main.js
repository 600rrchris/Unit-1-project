// state
var order = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
const winRound = ["1", "2", "3", "4", "5", "6"];
var guessRound =[];
var finalArr = [];

//cached elements
var board, guess, win

//event listeners
document.getElementById('round').addEventListener('click', nextRound);
document.getElementById('reset').addEventListener('click', resetGame);
document.getElementById('check').addEventListener('click', match);
var boxes = document.querySelectorAll('.squares');

//functions
init ();

function init(){
    
};
function render() {
    
};

function nextRound() {
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
    console.log(array);
 }

function playerGuess(evt) {
    guessRound.push(evt.target.innerText);
    if (guessRound.length > 6) {
        boxes.forEach((el, idx) => {
            el.style.transition = '1s';
            el.style.opacity = 1;   
            el.removeEventListener('click', playerGuess);
        });
        return;
    }
    console.log(guessRound);
};


    function match() { 
        if (guessRound.length === winRound.length) {
            for(i = 0; i < winRound.length; i++){
                if(guessRound[i] === winRound[i]) {
                    finalArr.push(true);
              } else {
                  finalArr.push(false);
              }
            }
        };
        winner();
    }

    function winner() {
        if (finalArr.every(el => el === true)) {
            alert ('about fucking time')
    } else 
    // if (finalArr.every(el => el === false))
    {
        alert ('sucks')
    }
    }
function resetGame() {
   order = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
   guessRound = [];
   boxes.forEach((el, idx) => {
       el.innerHTML = [];
   })
};

