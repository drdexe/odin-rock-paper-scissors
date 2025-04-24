let humanScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
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

function displayChoices(humanChoice, computerChoice) {
  const humanButton = document.querySelector(`button[value="${humanChoice}"]`);
  const computerButton = document.querySelector(`button[value="${computerChoice}"]`);
  humanButton.style.backgroundColor = "skyblue";
  computerButton.style.border = "3px solid orange";
}

function resetButtonStyles() {
  for (const button of buttons) {
    button.style.backgroundColor = "";
    button.style.border = "";
  }
}

function displayScores() {
  document.querySelector("#human-score").textContent = humanScore;
  document.querySelector("#computer-score").textContent = computerScore;
}

function displayWinner() {
  resetButtonStyles();
  for (const button of buttons) {
    button.disabled = true;
  }
  const winner = document.querySelector(".winner");
  if (humanScore === 5) {
    winner.textContent = "YOU WIN!";
    winner.style.backgroundColor = "lightgreen";
  } else if (computerScore === 5) {
    winner.textContent = "COMPUTER WINS!";
    winner.style.backgroundColor = "orangered";
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    resetButtonStyles();

    const humanSelection = button.value;
    const computerSelection = getComputerChoice();

    displayChoices(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);

    if (humanScore === 5 || computerScore === 5) {
      displayWinner();
    }
  });
});