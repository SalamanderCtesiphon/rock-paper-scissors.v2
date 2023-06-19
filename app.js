const currentYear = document.querySelector('.year');
currentYear.textContent = new Date().getFullYear();

/* let playerSelction = prompt("Choose your item: rock, paper or scissors"); */

let playerSelction;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id == 1) {
      playerSelction = 'ROCK';
    } else if(button.id == 3) {
      playerSelction = 'SCISSORS';
    } else if (button.id == 2) {
      playerSelction = 'PAPER';
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














const playRound = function(playerSelction, computerSelection) {
  console.log(`player: ${playerSelction} computer: ${computerSelection}`)
  if(playerSelction === 'ROCK' && computerSelection === 'SCISSORS') {
    return playerWins += 1;
  } else if(playerSelction === 'PAPER' && computerSelection === 'ROCK') {
    return playerWins += 1;
  } else if(playerSelction === 'SCISSORS' && computerSelection === 'PAPER') {
    return playerWins += 1;
  } else if(playerSelction === 'PAPER' && computerSelection === 'SCISSORS') {
    return computerWins += 1;
  } else if(playerSelction === 'SCISSORS' && computerSelection === 'ROCK') {
    return computerWins += 1;
  } else if(playerSelction === 'ROCK' && computerSelection === 'PAPER') {
    return computerWins += 1;
  } else {
    return ties += 1;
  }

};

const play = document.getElementById('play');
play.addEventListener('click', () => {
  game();
});

let playerWins = 0;
let computerWins = 0;
let ties = 0;


const game = function() {
  const playerScore = document.getElementById('playerScore');
  const computerScore = document.getElementById('computerScore');
  const cardContent = document.querySelector('.card__content');
  

  for(let i = 0; i < 5; i++) {
    const round = document.createElement('div');
    const computerSelection = getComputerChoice();
    playRound(playerSelction, computerSelection);
    round.textContent = `Round ${i + 1} computer wins: ${computerWins} player wins: ${playerWins}`;
    cardContent.appendChild(round);
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
  playerScore.textContent = `${playerWins}`;
  computerScore.textContent = `${computerWins}`

};








