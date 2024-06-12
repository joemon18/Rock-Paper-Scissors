let humanScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".image");
const messageContainer = document.querySelector("#message");
const userScoreContainer = document.querySelector("#user-score");
const compScoreContainer = document.querySelector("#computer-score");
const infoContainer = document.querySelector("#info");
const resetbtn = document.querySelector("#reset-btn");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return (choices[Math.floor(Math.random() * 3)]);
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    userScoreContainer.innerText = "0";
    compScoreContainer.innerText = "0";
    infoContainer.innerText = 'Choices will be displayed here !';
}

function playRound(humanChoice) {
    let computerChoice = getComputerChoice();
    if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        computerScore++;
        compScoreContainer.innerText = computerScore;
        messageContainer.innerText = `You Lost ! ${computerChoice} beats ${humanChoice}`;
        messageContainer.style.backgroundColor = "red";
    }
    else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        userScoreContainer.innerText = humanScore;
        messageContainer.innerText = `You won ! ${humanChoice} beats ${computerChoice}`;
        messageContainer.style.backgroundColor = "green";
    }
    else {
        messageContainer.innerText = "Round was draw";
        messageContainer.style.backgroundColor = 'rgb(57, 57, 218)';
        messageContainer.style.color = 'white';
    }

    infoContainer.innerText = `You chose ${humanChoice} and Computer chose ${computerChoice}`;
}




function showWinner() {
    if (humanScore > 5 || computerScore > 5) {
        if (humanScore > 5) {
            messageContainer.innerText = "Congratulations! You won the Game";
            messageContainer.style.backgroundColor = "green";
            resetbtn.style.visibility = "visible";

        }
        else {
            messageContainer.innerText = "Sorry ! You Lost the game";
            messageContainer.style.backgroundColor = "red";
            resetbtn.style.visibility = "visible";

        }
        removeEventListeners();
    }
    else if (humanScore === 5 && computerScore === 5) {
        messageContainer.innerText = "The Match was Tied";
        messageContainer.style.backgroundColor = 'rgb(57, 57, 218)';
        resetbtn.style.visibility = "visible";
        removeEventListeners();
    }

}

function removeEventListeners() {
    const elements = ['rock', 'paper', 'scissors'];
    elements.forEach(id => {
        const element = document.getElementById(id);
        element.removeEventListener('click', handleHumanChoices);
        element.style.cursor = 'not-allowed';
    });
}

function handleHumanChoices(event) {
    const humanChoice = event.target.id
    playRound(humanChoice);
    showWinner();
}

document.getElementById("rock").addEventListener("click", handleHumanChoices);
document.getElementById("paper").addEventListener("click", handleHumanChoices);
document.getElementById("scissors").addEventListener("click", handleHumanChoices);


resetbtn.addEventListener("click", () => {
    resetGame();
    resetbtn.style.visibility = "hidden";
    messageContainer.innerText = "Play Your Move !";
    messageContainer.style.backgroundColor = 'rgb(57, 57, 218)';
    choices.forEach((image) => {
        image.addEventListener("click",handleHumanChoices);
        image.style.cursor = "pointer";
    })
})

