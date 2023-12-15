"use strict";

const content = document.querySelector('.content');
const btn = document.querySelector('.btn');
let baseURL = 'https://source.unsplash.com/all/300x300';


btn.addEventListener('click', function() {
    baseURL = `https://source.unsplash.com/all/300x300?random=${Math.random()}`
    content.innerHTML = `<img src="${baseURL}"/>`;
});