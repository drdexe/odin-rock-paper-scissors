function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
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
  let choice = prompt("rock, paper, or scissors?");
  return choice.trim().toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Tie!")
    } else if (
      humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper"
    ) {
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  if (humanScore > computerScore) {
    console.log("You win!")
  } else if (computerScore > humanScore) {
    console.log("Computer wins!")
  } else {
    console.log("Tie!")
  }
}

playGame();