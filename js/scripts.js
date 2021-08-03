let container = document.getElementById('container');
let el = document.createElement('h2');
const start = document.getElementById('start');
const stoped = document.getElementById('stop');
let date = new Date();
let interval;

container.appendChild(el);
el.innerText = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;

function clockFunc() {
        interval = setInterval( () => {
        date = new Date();
        el.innerText = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `}, 1);
       
}
function stopClock() {
    clearInterval(interval);
    date = new Date();
    el.innerText = `Время: ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} `;
}

start.addEventListener('click', clockFunc);
stoped.addEventListener('click', stopClock);










