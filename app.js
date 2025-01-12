let boxes = document.querySelectorAll(".box");
let resetGame = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let container = document.querySelector(".container");

let player1 = true;

let winningPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const reset = () => {
    player1 = true;
    enabledBoxes();
    container.classList.add("hide");
}

let disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

let enabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulation, Winner is ${winner}`;
    container.classList.remove("hide");
}

const Draw = () => {
    msg.innerText = `Game Draw`;
    container.classList.remove("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(player1 === true) {
            box.innerText = "X";
            player1 = false;
        } else {
            box.innerText = "O";
            player1 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for(let pattern of winningPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                disableBoxes();
                showWinner(pos1);
            }
        }
    }
    let count = 0;
    for(let box of boxes) {
        if(box.innerText !== "" )
            count++
    }
    if(count === 9)
        Draw();
}

resetGame.addEventListener("click", reset);
newGame.addEventListener("click" , reset);