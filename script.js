'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

const guessEle =document.querySelector(".guess");
const msg = document.querySelector(".message");
const body = document.querySelector("body");
const number=document.querySelector(".number");
const highScore=document.querySelector(".highscore");

// hnadle click event on check button
document.querySelector(".check").addEventListener("click", function () {
    const guess=Number(guessEle.value);
    if (!guess) {
        msg.textContent = "Guess Number.."
        return;
    }
    if (guess === secretNumber) {
        document.querySelector(".number").textContent = secretNumber;  // 🤪🤪🤪

        msg.textContent = "🎉 Correct Number"
        body.style.backgroundColor = "green";
        number.style.width="30rem";

        // updating max score
        let maxScore=Number(highScore.textContent);
        maxScore=Math.max(maxScore, score);
        highScore.textContent=maxScore;
    }else if(guess != secretNumber){
        if (score > 1) {
            msg.textContent =(guess > secretNumber) ? "📈 Too High" : "📈 Too Low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            msg.textContent = "😡You Lost Game😡";
             body.style.backgroundColor = "orange";
            document.querySelector(".score").textContent = 0;
        }
    } 
});


// restore all values
document.querySelector(".again").addEventListener("click", function(){
   score=20;
   secretNumber = Math.floor(Math.random() * 20) + 1;
   document.querySelector(".score").textContent = score;

   msg.textContent="Start guessing...";
   guessEle.value="";

   body.style.backgroundColor="rgb(48, 45, 45)";
   number.textContent="?";
   number.style.width="15rem";
});




