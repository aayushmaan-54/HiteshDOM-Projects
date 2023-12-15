'use strict';

const root = document.documentElement;
const body = document.body;
const bg_color = getComputedStyle(root).getPropertyValue('--bg-color');
const black = getComputedStyle(root).getPropertyValue('--black');
const white = getComputedStyle(root).getPropertyValue('--white');
const start_btn = document.querySelector('.start');
const stop_btn = document.querySelector('.stop');
let rgb1,
    rgb2,
    rgb3,
    timeout;


function randValue(min, max) {
    const random = Math.floor(Math.random() * (max - min + 1));
    return min + random;
}


function colorMaker() {
    rgb1 = randValue(0, 255);
    rgb2 = randValue(0, 255);
    rgb3 = randValue(0, 255);
    return (`rgb(${rgb1}, ${rgb2}, ${rgb3})`);
}


start_btn.addEventListener('click', function(event) {
    event.preventDefault();
    timeout = setInterval(function() {
            if(rgb1 >= 50 && rgb2 >= 50 && rgb3 >= 50) {
                body.style.color = white;
            } else {
                body.style.color = black;
            }
            body.style.backgroundColor = colorMaker();
    }, 1000);
});


stop_btn.addEventListener('click', function(event) {
    event.preventDefault();
    body.style.backgroundColor = bg_color;
    clearInterval(timeout);
});