document.body.style.height = '100vh';
document.body.style.width = '100vw';
document.body.style.margin = '0';
document.body.style.padding = '50px';
document.body.style.boxSizing = 'border-box';


const title = document.createElement('h2');
title.innerText = "События";
document.body.appendChild(title);

const block = document.createElement('div');
block.style.height = '400px';
block.style.width = '400px';
block.style.border = '2px solid black';
document.body.appendChild(block);

const coordinats1 = document.createElement('p');
let mouse = 'X: 0, Y: 0';
coordinats1.innerText = mouse;
function mouseTracker(event) {
    mouse = `X: ${event.pageX}, Y: ${event.pageY}`;
    coordinats1.innerText = mouse;
};
document.body.addEventListener('mousemove', mouseTracker, false);
document.body.insertBefore(coordinats1, block);


const coordinats2 = document.createElement('p');
let mouse2 = 'X: 0, Y: 0';
coordinats2.innerText = mouse2;
function innerMouseTracker(event) {
    mouse2 = ` Координаты внутри блока: X: ${event.offsetX}, Y: ${event.offsetY}`;
    coordinats2.innerText = mouse2;
}

block.addEventListener('mousemove', innerMouseTracker, false);
document.body.appendChild(coordinats2);
