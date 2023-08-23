let lastVALUE = "O"
let display = document.getElementById('display');
display.textContent="Start Game";

let buttons = document.querySelectorAll(".box");
for(let button of buttons) {
    button.addEventListener("click", ()=>{
        if (button.textContent !== "") {
            return
        }
        if(lastVALUE==="O") {
            button.textContent = "X";
            lastVALUE = "X";
            display.textContent="Players Twos Turn To Play"
            checkStatus();
        }
        else if(lastVALUE==="X") {
            button.textContent = "O";
            lastVALUE = "O";
            display.textContent="Players Ones Turn To Play"
            checkStatus();
        }
    });
};