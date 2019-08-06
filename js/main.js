// state
var order = [1, 2, 3, 4, 5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,];
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    console.log(array);
 }
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

};

function nextRound() {
    shuffle(order);
    // let startingArray =  Array(36).fill().map(() =>  Math.floor(Math.random() * order.length + 1))
    // console.log(startingArray);
    boxes.forEach((el, idx) => {
    el.innerText = `${order[idx]}`
    });
};

function playerGuess(evt) {
console.log(evt.target);
};

function resetGame() {
console.log(resetGame);
}
