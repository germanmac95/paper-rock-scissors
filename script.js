
const choices = ["rock", "paper", "scissors"];         //created array for the choices the computer can randomly choose
function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];                            //
}


function playerChoice() {
    let validatedInput = false;             //set to false
    while (validatedInput == false) {        //while validateinput is false it will keep looping
        const choice = prompt("rock, paper, scissors");
        if (choice == null) {        //checks to see if input was empty. If empty continues.
            continue;
        }
        const choiceInLower = choice.toLowerCase(); //converts text to lowercase
        if (choices.includes(choiceInLower)) { //checks to see if array includes choices that will then be converted to lowercase.
            validatedInput = true;
            return choiceInLower;
        }
    }
}


function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if ((playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock")
    ) {
        return "player";
    } else {
        return "computer";
    }
}


function playRound(playerSelection, computerSelection) {
    const result = checkWinner(playerSelection, computerSelection);
    if (result == "Tie") {
        return "I'ts a tie";
    } else if (result == "player") {
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}


function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const computerSelection = getComputerChoice();
        const playerSelection = playerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("--------------");
        if (checkWinner(playerSelection, computerSelection) == "player") {
            playerScore++;
        } else if (checkWinner(playerSelection, computerSelection) == "computer") {
            computerScore++;
        }
    }
    console.log("game over");
    if (playerScore > computerScore) {
        console.log(" you win the game!");
    } else if (playerScore < computerScore) {
        console.log("computer wins the game");
    } else {
        console.log("We have a tie!");
    }
}
game();


