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
  result.style.margin = "1em";

  if (humanChoice === computerChoice) {
    result.textContent = `Tie! ${humanChoice} ties with ${computerChoice}`;
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

function disableButtons() {
  for (const button of buttons) {
    button.style.backgroundColor = "";
    button.style.border = "";
    button.style.opacity = "1";
    button.disabled = true;
  }
}

function displayScores() {
  document.querySelector("#human-score").textContent = humanScore;
  document.querySelector("#computer-score").textContent = computerScore;
}

function displayWinner() {
  document.querySelector(".winner").style.display = "block";
  disableButtons();

  const winner = document.querySelector("h2");
  if (humanScore === 5) {
    winner.textContent = "YOU WIN!";
  } else if (computerScore === 5) {
    winner.textContent = "COMPUTER WINS!";
  }
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  displayScores();

  document.querySelector(".winner").style.display = "none";
  
  for (const button of buttons) {
    button.disabled = false;
  }

  document.querySelectorAll("li").forEach(result => {
    result.remove();
  });
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

const resetButton = document.querySelector("input");
resetButton.addEventListener("click", resetGame);