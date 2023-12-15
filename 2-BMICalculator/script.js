'use strict';

const calculate_btn = document.querySelector('.calculate_btn');
const result = document.querySelector('.result');
let weight_input, height_input, result_bmi;


function getValue() {
    weight_input = document.getElementById('weight').value;
    height_input = document.getElementById('height').value;
}


function BMI_calc() {
    let height_inCM = height_input / 100;
    return (weight_input / (height_inCM * height_inCM));
}


calculate_btn.addEventListener('click', function(e) {
    e.preventDefault();
    if(!(weight_input == 0 || height_input == 0)) {
        result_bmi = BMI_calc().toFixed(2);
        result.textContent = `BMI = ${result_bmi} kg/m²`;
    }
});