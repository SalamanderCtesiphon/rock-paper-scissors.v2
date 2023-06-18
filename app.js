let playerSelction = prompt("Choose your item: rock, paper or scissors");


const getComputerChoice = function() {
  const index = Math.floor(Math.random() * 3);
  const computerChoices = [ 'rock', 'paper', 'scissors'];
  return computerChoices[index];
};

let playerWins = 0;
let computerWins = 0;
let ties = 0;


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

game();
