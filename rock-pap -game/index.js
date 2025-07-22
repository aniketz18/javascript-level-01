let choices = document.querySelectorAll(".choices");
let userScore = 0;
let compScore = 0;

let userScoreDisplay = document.querySelector("#user-score");
let compScoreDisplay = document.querySelector("#comp-score");
let resultDisplay = document.querySelector(".result");

let getComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

let playGame = (userChoice) => {
    let compChoice = getComputerChoice();

    if (userChoice === compChoice) {
        resultDisplay.innerHTML = `It's a Draw! You both chose ${userChoice}`;
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        userScore++;
        userScoreDisplay.innerText = userScore;
        resultDisplay.innerHTML = `You Win! ${userChoice} beats ${compChoice}`;
    } else {
        compScore++;
        compScoreDisplay.innerText = compScore;
        resultDisplay.innerHTML = `You Lose! ${compChoice} beats ${userChoice}`;
    }
};

choices.forEach(choice => {
    choice.addEventListener("click", () => {
        let userChoice = choice.id;
        playGame(userChoice);
    });
});
