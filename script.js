const array = ["ROCK", "PAPER", "SCISSOR"];

let user = 0;
let computer =0;

getComputerChoice = ()=> {
    randomChoice = array[(Math.floor(Math.random() * array.length))];
    return randomChoice;
}
play = (userChoice,computerChoice) => {
        if(userChoice == computerChoice){
            return "Its a tie!";
        }
        if(userChoice == "ROCK"){
            if(computerChoice == "PAPER") {
                computer++;
                return "Computer Won"
            }
            if(computerChoice == "SCISSOR"){
                user++;
                return "You Won";
            }
        }
        if(userChoice == "PAPER"){
            if(computerChoice == "ROCK") {
                user++;
                return "You Won"
            }
            if(computerChoice == "SCISSOR"){
                computer++;
                return "Computer Won";
            } 
        }
        if(userChoice == "SCISSOR"){
            if(computerChoice == "ROCK"){
                computer++;
                return "Computer Won";
            } 
            if(computerChoice == "PAPER") {
                user++;
                return "You Won";
            }
        }
}

for(let i=0 ; i<5 ; i++){
    let userChoice = prompt("Enter your move");
    userChoice = userChoice.toUpperCase();
    let computerChoice = getComputerChoice();
    let message = play(userChoice,computerChoice);
    alert(message);
}
console.log("GAME OVER")
console.log("Your score : " + user);
console.log("Computer score : " + computer);
if(user > computer){
    console.log("Congratulations you won");
}
else if(user == computer){
    console.log("The match is a tie");
}
else{
    console.log("uhooh! YOU LOST!!")
}