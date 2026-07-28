let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user = document.querySelector("#user-score");
const comp = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const playGame = (userchoice) => {
    const compchoice = computerChoice();

    if (userchoice === compchoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "paper" ? false : true;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "scissors" ? false : true;
        }
        else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }

}

const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {

        userScore++;
        user.innerText = userScore;
        msg.innerText = `You Wins! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        comp.innerText = compScore;
        msg.innerText = `Computers Wins! His ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const computerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const drawGame = () => {
    msg.innerText = "Drawed Try Again";
    msg.style.backgroundColor = "#081b31";
}