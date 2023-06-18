

const getComputerChoice = function() {
  const index = Math.floor(Math.random() * 3);
  const computerChoices = [ 'Rock', 'Paper', 'Scissors'];
  return computerChoices[index];
};

let playerWins = 0;
let computerwins = 0;

console.log(getComputerChoice());