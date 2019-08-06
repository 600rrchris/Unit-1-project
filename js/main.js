// state
var order = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    console.log(array);
 }
 const winRound = [1, 2, 3, 4, 5, 6];
 var guessRound =[];
 
//cached elements
var board, guess, win

//event listeners
document.getElementById('round').addEventListener('click', nextRound);
document.getElementById('reset').addEventListener('click', resetGame);
var boxes = document.querySelectorAll('.squares');
boxes.forEach(el =>{
    el.addEventListener('click', playerGuess);
  })

//functions
init ();

function init(){
   
};
function render() {
if (guessRound === winRound){
    alert('winner!');
}
};

function nextRound() {
    shuffle(order);
    boxes.forEach((el, idx) => {
    el.innerText = `${order[idx]}`
    });
    boxes.forEach((el, idx) => {
    el.style.transition = '10s';
    el.style.opacity = 0;
    });
};

function playerGuess(evt) {
    guessRound.push(evt.target.innerText);
    if (guessRound.length > 6) {
        boxes.forEach((el, idx) => {
            el.style.opacity = 1;
        });
        return;
    }
    console.log(guessRound);
};

function resetGame() {
   
console.log(resetGame);
};