let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  const choice = prompt("rock, paper, or scissors?");
  return choice.trim().toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  result = document.querySelector("#result");

  if (humanChoice === computerChoice) {
    result.textContent = "It's a tie!";
  } else if (
    humanChoice === "rock" && computerChoice === "scissors" ||
    humanChoice === "paper" && computerChoice === "rock" ||
    humanChoice === "scissors" && computerChoice === "paper"
  ) {
    result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  } else {
    result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});