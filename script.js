/*This program simulates rock, paper scissors with the computer vs. the user 
From here on out I will use the abrevation r,p,s to mean rock, paper and scissors*/

//Randomly generates a number between 0 and 2 and assigns them to rock,paper, scissors
let computerNumber = Math.floor (Math.random() * 3);

//A variable to store the string equivalent to r,p,s
let computerChoice = null; 

console.log(computerNumber);

if (computerNumber == 0) {
    computerChoice = "rock"; 
}

else if (computerNumber == 1) {
    computerChoice = "paper"; 
}

else {
    computerChoice = "scissor"; 
}
//Prints the r,p,s choice after it is assigned
console.log("Computer choice " + computerChoice);


//Here the player types a string for their r,p,s choice 
let playerChoice = prompt ("Choose rock, paper or scissors")
console.log ("Player choice " + playerChoice)

//If else statements to compare the player choice with the computer's and prints the result
if (playerChoice == "rock") {

    if (computerChoice =="paper"){
        console.log("Paper covers rock, you LOSE!");
    }

    else if(computerChoice == "rock"){
        console.log("The computer also chose rock, tie");
    }

    else{
        console.log("Rock smashes scissors! YOU WIN!");
    }
}

else if (playerChoice == "paper") {

    if (computerChoice == "paper"){
        console.log("The computer also picked paper, tie.")
    }

    else if (computerChoice == "rock"){
        console.log("Paper covers rock! YOU WIN!");
    }

    else{
        console.log("Scissors cut paper. YOU LOSE!");
    }
}

else if (playerChoice == "scissors") {

    if (computerChoice == "paper"){
        console.log("Scissors cut paper. YOU WIN!");
    }

    if (computerChoice == "rock") {
        console.log("Rock smashes scissors. YOU LOSE!");
    }

    if (computerChoice == "scissors") {
        console.log("The computer also picked scissors. tie.");
    }
}