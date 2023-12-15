const cursor = document.querySelector('.cursor');
const colors = [
    '#FF6633',
    '#FFB399',
    '#FF33FF',
    '#FFFF99',
    '#00B3E6',
    '#E6B333',
    '#3366E6',
    '#999966',
    '#99FF99',
    '#B34D4D',
];

function changeCursorColor() {
    const colorIndex = Math.floor(Math.random() * colors.length);
    const color = colors[colorIndex];
    cursor.style.backgroundColor = color;
}


window.addEventListener('mousemove', function(e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;

    cursor.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill: "forwards"});

    setInterval(changeCursorColor, 2000);
});
