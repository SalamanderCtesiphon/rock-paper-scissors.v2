const currentYear = document.querySelector('.year');
currentYear.textContent = new Date().getFullYear();

/* let playerSelction = prompt("Choose your item: rock, paper or scissors"); */

let playerSelction;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id == 1) {
      playerSelction = 'rock';
    } else if(button.id == 3) {
      playerSelction = 'scissors';
    } else if (button.id == 2) {
      playerSelction = 'paper'
    } else {
      return null;
    }
    const player = document.querySelector('.player');
    player.textContent = `You have selected: ${playerSelction.toUpperCase()}`;
  });
});



const getComputerChoice = function() {
  const index = Math.floor(Math.random() * 3);
  const computerChoices = [ 'ROCK', 'PAPER', 'SCISSORS'];
  return computerChoices[index];
};

let computerSelection = getComputerChoice();







let playerWins = 0;
let computerWins = 0;
let ties = 0;

const playerScore = document.getElementById('playerScore');
playerScore.textContent = `${playerWins}`;

const computerScore = document.getElementById('computerScore');
computerScore.textContent = `${computerWins}`;


const playRound = function(playerSelction, computerSelection) {
  console.log(`player: ${playerSelction} computer: ${computerSelection}`)
  if(playerSelction === 'rock' && computerSelection === 'scissors') {
    return playerWins += 1;
  } else if(playerSelction === 'paper' && computerSelection === 'rock') {
    return playerWins += 1;
  } else if(playerSelction === 'scissors' && computerSelection === 'paper') {
    return playerWins += 1;
  } else if(playerSelction === 'paper' && computerSelection === 'scissors') {
    return computerWins += 1;
  } else if(playerSelction === 'scissors' && computerSelection === 'rock') {
    return computerWins += 1;
  } else if(playerSelction === 'rock' && computerSelection === 'paper') {
    return computerWins += 1;
  } else {
    return ties += 1;
  }

};


/* 

const game = function() {
  for(let i = 0; i < 5; i++) {
    const computerSelection = getComputerChoice();
    playRound(playerSelction, computerSelection);
    console.log(`Round ${i + 1}
computer wins: ${computerWins} 
player wins: ${playerWins}`)
  };
  console.log('Final Results:')
  console.log(`ties: ${ties}`);
  console.log(`computer wins: ${computerWins}`);
  console.log(`player wins: ${playerWins}`);
  if(computerWins > playerWins) {
    console.log(`computer wins`);
  } else if(playerWins > computerWins) {
    console.log('player wins');
  } else {
    console.log('tie');
  }
};

game(); */
