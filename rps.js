const objects = ['rock','paper','scissors'];
let btn = document.getElementById('rock');
// let message = document.getElementById('message');
let player = document.getElementById('score-player');
let computer = document.getElementById('score-computer');
let buttons = document.querySelectorAll('button');
const leftHand = document.getElementById('hand-img-user');
const rightHand = document.getElementById('hand-img-computer');
const result = document.getElementById('result');
let pScore = 0;
let cScore = 0; 


function computerPlay(){ 
  return objects[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection){
  if (playerSelection === computerSelection){
    return `It's a Tie!!`;
  }
  else if(playerSelection === 'rock' && computerSelection === 'scissors'){
    pScore++;
    return `You WON!!`;
  }
  else if(playerSelection === 'paper' && computerSelection === 'rock'){
    pScore++;
    return `You WON!!`;
  }
  else if(playerSelection === 'scissors' && computerSelection === 'paper'){
    pScore++;
    return `You WON!!`;
}
else{
  cScore++;
  return `You LOSE!!`;
}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function game(userInput){
  await sleep(3000);
  let computerInput = computerPlay();
  let output = playRound(userInput, computerInput);
  changeImage(userInput, computerInput);
  await sleep(300);
  result.textContent = output;
  // result.style.opacity = 0;
  result.setAttribute('style','opacity:1;');
  player.textContent = pScore.toString();
  computer.textContent = cScore.toString();
  
  leftHand.classList.remove('left-anim');
  rightHand.classList.remove('right-anim');
}

function changeImage(userInput, computerInput){
  rightHand.setAttribute('src', `right${computerInput}.png`);
  leftHand.setAttribute('src', `left${userInput}.png`);

}

buttons.forEach((button) => {
  button.addEventListener('click', () =>{
    result.setAttribute('style','opacity:0;');
    leftHand.classList.toggle('left-anim');
    rightHand.classList.toggle('right-anim');
    changeImage('rock', 'rock');
    game(button.value);
  });

});
