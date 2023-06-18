

const getComputerChoice = function() {
  const index = Math.floor(Math.random() * 3);
  const computerChoices = [ 'rock', 'paper', 'scissors'];
  return computerChoices[index];
};

let playerWins = 0;
let computerwins = 0;


const playRound = function(playerSelction, computerSelection) {
  if(playerSelction === 'rock' && computerSelection === 'scissors') {
    return 'You win! Rock beats Scissors';
  } else if(playerSelction === 'paper' && computerSelection === 'rock') {
    return 'You win! Paper beats Rock';
  } else if(playerSelction === 'scissors' && computerSelection === 'paper') {
    return 'You win! Scissors beat Paper';
  } else if(playerSelction === 'paper' && computerSelection === 'scissors') {
    return 'You lose! Scissors beat paper';
  } else if(playerSelction === 'scissors' && computerSelection === 'rock') {
    return 'You lose! Rock beats scissors';
  } else if(playerSelction === 'rock' && computerSelection === 'paper') {
    return 'You lose! Paper beats Rock';
  } else {
    return "Tie!";
  }

};

const playerSelction = getComputerChoice();


const game = function() {
  for(let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();

    console.log(`player selection: ${playerSelction}`);
    console.log(`computer selection: ${computerSelection}`);
    console.log(playRound(playerSelction, computerSelection));
  }
}

game();