console.log('Javascript up and running!');

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

let gLineSize = 1;
let color = "#000000";

window.onresize = function() {
    alert("Window resized. All images will be cleared. ");
    resize();
}


function resize() {
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
}

let paint = false;

function start(e) {
    paint = true;
    draw(e);
}

function end() {
    paint = false;
    ctx.beginPath();
}

function draw(e) {
    if (paint == false) {
        return;
    }

    ctx.lineWidth = gLineSize;
    ctx.lineCap = 'round';
    ctx.strokeStyle = color;
    //ctx.beginPath();
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX, e.clientY);


}

document.getElementById('clear').onclick = function() {
    console.log('Cleared');
    resize();
}

const selectSize = document.querySelector('#linesize');

selectSize.addEventListener('change', (event) => {
    console.log(`Line size is ${event.target.value}`);
    gLineSize = event.target.value;
});

const selectColor = document.querySelector('#color');

selectColor.addEventListener('change', (event) => {
    console.log(`Color is ${event.target.value}`);
    color = event.target.value;
});

canvas.addEventListener("mousedown", start);
canvas.addEventListener("mouseup", end);
canvas.addEventListener("mousemove", draw);