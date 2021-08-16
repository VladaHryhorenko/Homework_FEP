const container = document.createElement('div');
document.body.appendChild(container);
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.fontFamily = 'Roboto';
container.style.border = "3px solid rgb(31, 35, 56)"
container.style.width = "50%";

const buttonBlock = document.createElement('div');
buttonBlock.classList.add('button-block');
container.appendChild(buttonBlock);
buttonBlock.style.display = 'flex';
buttonBlock.style.justifyContent = 'center';


const startButton = document.createElement('button');
const stopButton = document.createElement('button');
startButton.innerText = 'Start';
stopButton.innerText = 'Stop';
stopButton.style.margin = "20px 25px";
stopButton.style.padding = "10px 16px";
stopButton.style.backgroundColor = "rgb(255, 69, 0)";
stopButton.style.borderRadius = '20px'
startButton.style.margin = "20px 25px";
startButton.style.padding = "10px 16px";
startButton.style.backgroundColor = "rgb(144,238,144)";
startButton.style.borderRadius = '20px'

buttonBlock.appendChild(startButton);
buttonBlock.appendChild(stopButton)

let el = document.createElement('h2');
el.style.textAlign = 'center';
let date = new Date();

let interval;

container.appendChild(el);
el.innerText = `Время: ${(date.getHours()) < 10 ? "0" + date.getHours() : date.getHours()}:${(date.getMinutes()) < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${(date.getSeconds()) < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;
console.log(el.innerText);

function clockFunc() {
        interval = setInterval( () => {
        date = new Date();
        el.innerText = `Время: ${(date.getHours()) < 10 ? "0" + date.getHours() : date.getHours()}:${(date.getMinutes()) < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${(date.getSeconds()) < 10 ? "0" + date.getSeconds() : date.getSeconds()}`}, 1);
       
}
function stopClock() {
    clearInterval(interval);
    date = new Date();
    el.innerText = `Время: ${(date.getHours()) < 10 ? "0" + date.getHours() : date.getHours()}:${(date.getMinutes()) < 10 ? "0" + date.getMinutes() : date.getMinutes()}:${(date.getSeconds()) < 10 ? "0" + date.getSeconds() : date.getSeconds()}`;
}

startButton.addEventListener('click', clockFunc);
stopButton.addEventListener('click', stopClock);










