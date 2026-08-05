let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let msg = document.getElementById("msg");
let playerX = document.getElementById("Player-X");
let playerO = document.getElementById("Player-O");

let countX = 0;
let countO = 0;
let turnO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        console.log("Button was Pressed");
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                if (pos1Val === "X") {
                    countX++;
                    playerX.innerText = countX;
                } else {
                    countO++;
                    playerO.innerText = countO;
                }
                console.log("winner", pos1Val);
                disabledBtn();
                msg.classList.remove("hide");
                msg.innerText = "Winner is " + pos1Val;
            }
        }
    }
}
// when winner is show only winner and rest should be hidden; anf for points also and new btn in hidden part
// const showWinner = () => {
    
// }

const disabledBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const resetBttn = () => {
    for (let box of boxes) {
        box.innerText = "";
        box.disabled = false;
    }
    turnO = true;
    msg.classList.add("hide");
}

resetBtn.addEventListener("click", resetBttn);