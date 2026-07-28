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

const playGame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    const compchoice=computerChoice();
    console.log("Comp Choice = ",compchoice);


}


const computerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randomidx=Math.floor(Math.random() *3);
    return options[randomidx];
}