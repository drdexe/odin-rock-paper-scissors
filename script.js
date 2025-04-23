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

function playRound(humanChoice, computerChoice) {
  const resultsList = document.querySelector(".results");
  const result = document.createElement("li");

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

  resultsList.appendChild(result);
  displayScores(humanScore, computerScore);
}

function displayScores() {
  document.querySelector("#human-score").textContent = humanScore;
  document.querySelector("#computer-score").textContent = computerScore;
}

function displayWinner() {
  document.querySelector(".button-container").remove();
  const winner = document.querySelector(".winner");
  if (humanScore === 5) {
    winner.textContent = "YOU WIN!";
  } else if (computerScore === 5) {
    winner.textContent = "COMPUTER WINS!";
  }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());

    if (humanScore === 5 || computerScore === 5) {
      displayWinner();
      humanScore = 0;
      computerScore = 0;
    }
  });
});