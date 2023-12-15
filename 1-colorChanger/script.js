const body = document.querySelector("body");
const containerBox = document.querySelectorAll('.box');
const restart_btn = document.querySelector('.restart');
const color1 = getComputedStyle(document.querySelector('.box1')).getPropertyValue('--color1');
const color2 = getComputedStyle(document.querySelector('.box2')).getPropertyValue('--color2');
const color3 = getComputedStyle(document.querySelector('.box3')).getPropertyValue('--color3');
const color4 = getComputedStyle(document.querySelector('.box4')).getPropertyValue('--color4');
const bg_color = getComputedStyle(body).getPropertyValue('--bg-color');

containerBox.forEach(function(box) {
    box.addEventListener('click', function(e) {
        if(e.target.id === 'color1'){
            body.style.backgroundColor = color1;
            body.style.backgroundImage = '';
        }

        else if(e.target.id === 'color2'){
            body.style.backgroundColor = color2;
            body.style.backgroundImage = '';
        }

        else if(e.target.id === 'color3'){
            body.style.backgroundColor = color3;
            body.style.backgroundImage = '';
        }

        else if(e.target.id === 'color4'){
            body.style.backgroundColor = color4;
            body.style.backgroundImage = '';
        }

        else if(e.target.id === 'color5'){
            body.style.backgroundImage = 'url(bg.jpg)';
            body.style.backgroundSize = 'cover';
        }
    });
});


restart_btn.addEventListener('click', function() {
    body.style.backgroundColor = bg_color;
    body.style.backgroundImage = '';
})