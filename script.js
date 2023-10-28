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
const div= document.querySelector('div');
getComputerChoice = ()=> {
    randomChoice = array[(Math.floor(Math.random() * array.length))];
    return randomChoice;
}
btn.forEach(function(e){e.addEventListener('click',() => {
        userChoice = e.textContent;
        userChoice = userChoice.toUpperCase();
        computerChoice = getComputerChoice();
        
        if(gameCount >=5){
            GameOver.textContent = "GAME OVER";
            if(user > computer){
                FinalMsg.textContent = "Congratulations you won";
            }
            else if(user == computer){
                FinalMsg.textContent = "The match is a tie";

            }
            else{
                FinalMsg.textContent = "uhooh! YOU LOST!!";
            }
            const para = document.createElement('p');
            para.textContent = "Resetting Game in 10 seconds....";
            div.appendChild(para);
            setTimeout(()=>{
                user = 0;
                computer =0;
                gameCount =0;
                GameOver.textContent ="";
                FinalMsg.textContent ="";
                UserScore.textContent = "Your score : " + user;
                CompScore.textContent = "Computer score : " + computer;
                div.removeChild(div.lastChild);
            }, 10000);
        }

        else if(userChoice == computerChoice){
            gameCount++;
            currWin.textContent = "Its a tie!";
        }
        else if(userChoice == "ROCK"){
            gameCount++;
            if(computerChoice == "PAPER") {
                computer++;
                currWin.textContent =  "Computer Won";
            }
            else if(computerChoice == "SCISSOR"){
                user++;
                currWin.textContent = "You Won";
            }
        }
        else if(userChoice == "PAPER"){
            gameCount++;
            if(computerChoice == "ROCK") {
                user++;
                currWin.textContent = "You Won";
            }
            else if(computerChoice == "SCISSOR"){
                computer++;
                currWin.textContent =  "Computer Won";
            } 
        }
        else if(userChoice == "SCISSOR"){
            gameCount++;
            if(computerChoice == "ROCK"){
                computer++;
                currWin.textContent =  "Computer Won";
            } 
            else if(computerChoice == "PAPER") {
                user++;
                currWin.textContent = "You Won";
            }
        }
        UserScore.textContent = "Your score : " + user;
        CompScore.textContent = "Computer score : " + computer;
}
)
}
)

