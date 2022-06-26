/*This program simulates rock, paper scissors with the computer vs. the user 
From here on out I will use the abrevation r,p,s to mean rock, paper and scissors*/

//Randomly generates a number between 0 and 2 and assigns them to rock,paper, scissors

//A variable to store the string equivalent to r,p,s 

//Here the player types a string for their r,p,s choice 
let playerSelectionRaw = prompt ("Choose rock, paper or scissors");
let playerSelection = playerSelectionRaw.toLowerCase(); 

//These variables hold a tally of each game's winner 
let playerScore = 0; 
let computerScore = 0; 

//Stores the outcome string for the match
let outcome = null; 

//Used to the print the string that declares winner or loser at the end game ()
let finalOutcomeString = null; 

function computerPlay(){
    let computerSelection = null; 
    let computerNumber = Math.floor (Math.random() * 3);

    console.log(computerNumber);

    if (computerNumber == 0) {
        computerSelection = "rock"; 
    }

    else if (computerNumber == 1) {
        computerSelection = "paper"; 
    }

    else {
        computerSelection = "scissor"; 
    }
    return computerSelection;
}

let computerSelection = computerPlay(); 


//If else statements to compare the player choice with the computer's and prints the result
function playRound (playerSelection, computerSelection){
    if (playerSelection == "rock") {

        if (computerSelection =="paper"){
            outcome = ("Paper covers rock, you LOSE!");
            computerScore = computerScore + 1; 
        }

        else if(computerSelection == "rock"){
            outcome = ("The computer also chose rock, tie");
        }

        else{
            outcome = ("Rock smashes scissors! YOU WIN!");
            playerScore = playerScore + 1; 
        }
    }

    else if (playerSelection == "paper") {

        if (computerSelection == "paper"){
            outcome = ("The computer also picked paper, tie.")
        }

        else if (computerSelection == "rock"){
            outcome = ("Paper covers rock! YOU WIN!");
            playerScore = playerScore + 1; 
        }

        else{
            outcome = ("Scissors cut paper. YOU LOSE!");
            computerScore = computerScore + 1; 
        }
    }

    else if (playerSelection == "scissors") {

        if (computerSelection == "paper"){
            outcome = ("Scissors cut paper. YOU WIN!");
            playerScore = playerScore + 1; 
        }

        if (computerSelection == "rock") {
            outcome = ("Rock smashes scissors. YOU LOSE!");
            computerScore = computerScore + 1; 
        }

        if (computerSelection == "scissors") {
            outcome = ("The computer also picked scissors. tie.");
        }
    }
    console.log(outcome);
    console.log("player score " + playerScore);
    console.log("computerScore " + computerScore);
    return computerScore;
    return playerScore;  
    return outcome; 
}

function game(){
    for (let i = 0; i < 5; i++) {
        playerSelectionRaw = prompt ("Choose rock, paper or scissors");
        playerSelection = playerSelectionRaw.toLowerCase();
        computerSelection = computerPlay(); 
        playRound(playerSelection, computerSelection);
    }

    if (playerScore > computerScore){
        finalOutcomeString = ("You beat the computer. Nice job");
    }

    else {
        finalOutcomeString = ("The computer wins. Please try again ");
    }

    console.log(finalOutcomeString);
}

