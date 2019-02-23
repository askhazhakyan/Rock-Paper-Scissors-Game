var userScore = 0;
var compScore = 0;
var userScore_span = document.getElementById('user-score');
var compScore_span = document.getElementById('comp-score');
var scoreBoard_div = document.querySelector('.score-board');
var result_div = document.querySelector('.result > p');
var rock_div = document.getElementById('r');
var paper_div = document.getElementById('p');
var scissors_div = document.getElementById('s');

function getComputerChoice(){
  const choices = ['r','p','s'];
  const randomNum = Math.floor(Math.random()*3);
  return choices[randomNum];
}
function win(user, computer){
  userScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". You Win!!";
}

function lose(user, computer){
  compScore++;
  userScore_span.innerHTML = userScore;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = convertToWord(user) + " loses to " + convertToWord(computer) + ". You Lose!!";;
}

function draw(user, computer){
  result_div.innerHTML = "It's a Draw!";
}

function convertToWord(letter){
  if (letter === 'r') return "Rock";
  if (letter === 'p') return "Paper";
  if (letter === 's') return "Scissors";
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch(userChoice + computerChoice){
    case "pr":
    case "rs":
    case "sp":
      win(userChoice, computerChoice);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
game();

function main(){
  rock_div.addEventListener('click', function(){
    game('r');
  })

  paper_div.addEventListener('click', function(){
    game('p');
  })

  scissors_div.addEventListener('click', function(){
    game('s');
  })
}

main();
