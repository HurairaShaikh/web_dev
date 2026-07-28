let user = 0;
let comp = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        //console.log("choice was click",userChoice);
        playGame(userChoice);
    });
});

const playGame = (userchoice) => {
    console.log("user choice = ", userchoice);
    const compchoice = computerChoice();
    console.log("Comp Choice = ", compchoice);

    if (userchoice === compchoice) {
        drawGame();
    }
    else {
        let userwin = true;
        if (userchoice === "rock") {
            userwin = compchoice === "scissors" ? true : false;
        }
        else if (userchoice === "paper") {
            userwin = compchoice === "rock" ? true : false;
        }
        else {
            userwin = compchoice === "rock" ? true : false;
        }
        showWinner(user);
    }

}

const showWinner = (userwin) => {
    if (userwin) {
        console.log("You win");
    }
    else {
        console.log("Computer win");
    }
}


const computerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomidx = Math.floor(Math.random() * 3);
    return options[randomidx];
}

const drawGame = () => {
    console.log("Game was Drawed");
}