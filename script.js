const array = ["ROCK", "PAPER", "SCISSOR"];

let user = 0;
let computer =0;
let gameCount= 0;
const btn = document.querySelectorAll('button');
const currWin = document.querySelector('.current-winner');
const GameOver = document.querySelector('.Game-Over');
const UserScore = document.querySelector('.User-Score');
const CompScore= document.querySelector('.Comp-Score');
const FinalMsg= document.querySelector('.Final-Message');
const text = document.querySelector('.text');

const reset = document.querySelector('.Reset');
getComputerChoice = ()=> {
    randomChoice = array[(Math.floor(Math.random() * array.length))];
    return randomChoice;
}
btn.forEach(function(e){e.addEventListener('click',() => {
        userChoice = e.textContent;
        userChoice = userChoice.toUpperCase();
        computerChoice = getComputerChoice();
        
        if(gameCount >=5){
            GameOver.textContent = "GAME OVER!!!";
            if(user > computer){
                FinalMsg.textContent = "Congratulations you won";
            }
            else if(user == computer){
                FinalMsg.textContent = "The match is a tie";

            }
            else{
                FinalMsg.textContent = "uhooh! YOU LOST!!";
            }
            reset.textContent = "Resetting Game in 10 seconds....";
            setTimeout(()=>{
                user = 0;
                computer =0;
                gameCount =0;
                GameOver.textContent ="";
                FinalMsg.textContent ="";
                currWin.textContent = "";
                text.textContent = "";
                UserScore.textContent = "Your Score : " + user;
                CompScore.textContent = "Computer Score : " + computer;
                reset.textContent = "";
            }, 10000);
        }

        else if(userChoice == computerChoice){
            gameCount++;
            if(userChoice=="PAPER"){
                currWin.textContent = '✋ ✋';
            }
            else if(userChoice=="ROCK"){
                currWin.textContent = '✊ ✊';
            }
            else{
                currWin.textContent = '✌️ ✌️';
            }
            text.textContent = "It's tie";
        }
        else if(userChoice == "ROCK"){
            gameCount++;
            if(computerChoice == "PAPER") {
                computer++;
                currWin.textContent = '✊ ✋';
                text.textContent = "You Lost!!";
            }
            else if(computerChoice == "SCISSOR"){
                user++;
                currWin.textContent = "✊ ✌️";
                text.textContent = "You Won!!";
            }
        }
        else if(userChoice == "PAPER"){
            gameCount++;
            if(computerChoice == "ROCK") {
                user++;
                currWin.textContent = "✋ ✊";
                text.textContent = "You Won!!";
            }
            else if(computerChoice == "SCISSOR"){
                computer++;
                currWin.textContent = "✋ ✌️";
                text.textContent = "You Lost!!";
            } 
        }
        else if(userChoice == "SCISSOR"){
            gameCount++;
            if(computerChoice == "ROCK"){
                computer++;
                currWin.textContent =  "✌️ ✊";
                text.textContent = "You Lost!!";
            } 
            else if(computerChoice == "PAPER") {
                user++;
                currWin.textContent = "✌️ ✋";
                text.textContent = "You Won!!";
            }
        }
        UserScore.textContent = "Your   Score : " + user;
        CompScore.textContent = "Computer Score : " + computer;
}
)
}
)

