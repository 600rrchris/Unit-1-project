// state

//cached elements

//event listeners
document.getElementById('board').addEventListener('click', playerGuess);
document.querySelector('button').addEventListener('click',  nextRound);
document.getElementById('reset').addEventListener('click', resetGame);


//functions
function nextRound() {
new Array(36).fill(null);
console.log(nextRound);
};

function playerGuess() {
console.log(playerGuess);
};

function resetGame() {
console.log(resetGame);
};
//