"use strict";

const input_field = document.getElementById('input-field');
const buttons = document.querySelectorAll('.btn');
const output_field = document.getElementById('output-field');


buttons.forEach(function(button) {
    button.addEventListener('click', function(e) {
        let inputValue = input_field.value;

        if(button.classList.contains("uppercase")) {
            output_field.classList.add("uppercase");
            output_field.textContent = inputValue;
        }

        else if(button.classList.contains("lowercase")) {
            output_field.classList.add("lowercase");
            output_field.textContent = inputValue;
        } 

        else if(button.classList.contains("capitalize")) {
            output_field.classList.add("capitalize");
            output_field.textContent = inputValue;
        } 

        else if(button.classList.contains("bold")) {
            output_field.classList.add("bold");
            output_field.textContent = inputValue;
        } 

        else if(button.classList.contains("italic")) {
            output_field.classList.add("italic");
            output_field.textContent = inputValue;
        } 

        else if(button.classList.contains("underline")) {
            output_field.classList.add("underline");
            output_field.textContent = inputValue;
        } 
    });
});