let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("You Win!");
    msg.style.backgroundColor = "green";
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won ${userChoice} beats ${compChoice}`;
  } else {
    console.log("you loose!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = "You Loose";
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
  console.log("game was draw");
  msg.style.backgroundColor = "blue";
  msg.innerText = "You Draw";
};
const playGame = (userChoice) => {
  const compChoice = genCompChoice();
  console.log("user", userChoice);
  console.log("computer", compChoice);
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("clicked", userChoice);
    playGame(userChoice);
  });
});
