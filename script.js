let box = document.querySelectorAll(".btn");
let btn1 = document.querySelector("#btn1");
let reset = document.querySelector("#reset");
let newgameButton = document.querySelector("#new");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#msg");
let turnx = true;
const winPatterns = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]
]
box.forEach((btn) => {
    btn.addEventListener("click",() => {
        if(turnx){
            btn.innerText = "X";
            turnx = false;
        }
        else{
            btn.innerText = "O";
            turnx = true;
        }
    btn.disabled = true;
    checkWinner();
    })
})
let disableBoxes = () => {
    for(let b of box){
        b.disabled = true;
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congrats ${winner} is the Winner`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = box[pattern[0]].innerText;
        let pos2 = box[pattern[1]].innerText;
        let pos3 = box[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3 && pos3 === "X"){
                showWinner("X");
            }
            else if(pos1 === pos2 && pos2 === pos3 && pos3 === "O"){
                showWinner("O");
            }
        }
    }
}
reset.addEventListener("click",() => {
    window.location.reload();
})
newgameButton.addEventListener("click",() => {
    window.location.reload();
})
