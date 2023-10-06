/* 1. write function that will randomly
the choice of the computer.

2. write function that plays one round
of the game. function should take two
parameters playerSelection, and computerSelection.
Returns a string that declares the winner
of the round. 

*/


function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
    console.log("You chose rock");
    } else if (choice === 1) {
        console.log("You chose paper");
    } else if (choice === 2) {
        console.log("You chose scissors");
    } else {
        console.log("error");
    }
}
getComputerChoice();


function playRound (playerSelection, computerSelection) {

}
