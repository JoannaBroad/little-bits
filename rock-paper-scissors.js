// colects the users input and returns a valid input.
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb" ||
    userInput === "nuke"
  ) {
    return userInput;
  } else {
    return "please enter a valid input";
  }
};
// console.log(getUserChoice("Rock"));
//  makes the computers input.
const getComputersChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
};
// console.log(getComputersChoice());
// determining the winner.
const determineWinner = (userChoice, computersChoice) => {
  if (userChoice === computersChoice) {
    return "It's a tie";
  } else if (
    (userChoice === "rock" && computersChoice === "scissors") ||
    (userChoice === "paper" && computersChoice === "rock") ||
    (userChoice === "scissors" && computersChoice === "paper")
  ) {
    return "You win";
  } else if (userChoice === "bomb") {
    return "Boom!! There is now a crater!";
  } else if (userChoice === "nuke") {
    return "Bye Bye! Everybody loses";
  } else {
    return "You lose";
  }
};
// console.log(determineWinner("rock", "rock"));
// time to play
const playGame = () => {
  let userChoice = getUserChoice("nuke");
  let computersChoice = getComputersChoice();
  console.log("You chose " + userChoice);
  console.log("The computer chose " + computersChoice);
  console.log(determineWinner(userChoice, computersChoice));
};

playGame();
