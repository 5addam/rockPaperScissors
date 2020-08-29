const objects = ['rock','paper','scissors'];
let btn = document.getElementById('rock');
let message = document.getElementById('message');
let player = document.getElementById('score-player');
let computer = document.getElementById('score-computer');
let pScore = 0;
let cScore = 0; 


function computerPlay(){ 
  return objects[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    return `You choose ${playerSelection} \& Computer choose ${computerSelection} 
    \nIt was a Tie!! \n You both choose ${playerSelection}`;
  }
  else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    pScore++;
    return `You choose ${playerSelection} \& Computer choose ${computerSelection} \n You WON!! \n Rock beats Scissors`;
  }
  else if(playerSelection === 'paper' && computerSelection === 'rock'){
    pScore++;
    return `You choose ${playerSelection} \& Computer choose ${computerSelection}\nYou WON!! \n Paper beats Rock`;
  }
  else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    pScore++;
    return `You choose ${playerSelection} \& Computer choose ${computerSelection} \n You WON!! \n Scissors beats Paper`;
}
else{
  cScore++;
  return `You choose ${playerSelection} \& Computer choose ${computerSelection} \n You LOSE!! \n ${computerSelection} beats ${playerSelection}`;
}
}

function game(userInput){
  let output = playRound(userInput, computerPlay());
  message.innerHTML = output;
  player.textContent = pScore.toString();
  computer.textContent = cScore.toString();
}