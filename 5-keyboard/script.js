'use strict';

const keys = document.querySelectorAll('.key');
const keyInfo = document.querySelector('.keyInfo');
let inputKey, inputKeyCode;


function keyPress(event) {
    event.preventDefault();
    inputKey = event.key;
    inputKeyCode = event.keyCode;
    keyInfo.textContent = inputKeyCode + " = " + inputKey.toUpperCase();
    keys.forEach((ele) => {
        if(ele.id == inputKeyCode) {
            ele.classList.add('done');
        }
    });
}


document.addEventListener("keydown", keyPress);