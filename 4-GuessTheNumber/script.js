'use strict';

const root = document.documentElement;
const body = document.body;
const input = document.getElementById('guess');
const instruction = document.querySelector('.instruction');
const guess_btn = document.querySelector('.guess_button');
const prev_guess = document.querySelector('.prev_guessValue');
const remain_guess = document.querySelector('.remain_guessValue');
const bg_color = getComputedStyle(root).getPropertyValue('--bg-color');
const font_white = getComputedStyle(root).getPropertyValue('--font-white');
const win_bg_color = getComputedStyle(root).getPropertyValue('--bg-win-color');
const loose_bg_color = getComputedStyle(root).getPropertyValue('--bg-loose-color');
const font_black = getComputedStyle(root).getPropertyValue('--font-black');
let input_value, 
    randNum, 
    guessDefaultValue = 5,
    gameOverFlag = false;
remain_guess.textContent = guessDefaultValue;


function getValue() {
    input_value = input.value;
}


function reset() {
    guessDefaultValue = 5;
    input_value = '';
    body.style.backgroundColor = bg_color;
    body.style.color = font_white;
    prev_guess.textContent = '';
    remain_guess.textContent = guessDefaultValue;
    instruction.textContent = "Try and guess a random number between 1 and 20";
    guess_btn.textContent = "Guess";
    input.value = 0;
    gameOverFlag = false;
    random1to20();
}


function random1to20() {
    randNum = Math.floor(Math.random() * 20) + 1;
    console.log(randNum);
}
random1to20();


guess_btn.addEventListener('click', function() {
    if(!gameOverFlag) {
        if(input_value == randNum) {
            body.style.backgroundColor = win_bg_color;
            prev_guess.append(" " + randNum + " ");
            body.style.color = font_black;
            instruction.textContent = "Correct✅";
            guess_btn.textContent = "Restart";
            gameOverFlag = true;
        } else if(input_value != randNum && guessDefaultValue > 0) {
            prev_guess.append(" " + input_value + " ");
            guessDefaultValue--;
            remain_guess.textContent = guessDefaultValue;
            if(input_value >= (randNum + 5)) {
                instruction.textContent = "WRONG🚫 Guess value is TOO HIGH!";
            } else if (input_value > randNum && input_value <= (randNum + 5)) {
                instruction.textContent = "WRONG🚫 Guess value is HIGH!";
            }
    
            else if(input_value < randNum) {
                if(input_value < (randNum - 5)) {
                    instruction.textContent = "WRONG🚫 Guess value is TOO LOW!";
                } else {
                    instruction.textContent = "WRONG🚫 Guess value is LOW!";
                }
            }
        } else if(guessDefaultValue == 0) {
            body.style.backgroundColor = loose_bg_color;
            body.style.color = font_black;
            guess_btn.textContent = "Restart";
            gameOverFlag = true;
        }
    } else {
        reset();
    }
});