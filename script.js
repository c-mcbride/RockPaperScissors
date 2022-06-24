let computerNumber = Math.floor (Math.random() * 3);
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

console.log(computerChoice)