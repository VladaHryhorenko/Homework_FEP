// тут может находится ваш код
const area = document.querySelector('#canvas');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
let interval;
let squareArr = [];
let score = document.querySelector('#score');
let count = 0;



startBtn.addEventListener('click', ()=> {
  clearField();
  count = 0;
  interval = setInterval( ()=>{
  squareArr.push(new Square(Math.abs(Math.random() * (1 - 620) + 1), 1, getRandomColor(), Math.abs(Math.random() * (3 - 5) + 1)))
  //console.log(squareArr);
  }, 500);
})

stopBtn.addEventListener('click', () => {
  clearField();
})

const clearField = () => {
  clearInterval(interval);
  squareArr = [];
  
}

const getRandomColor = () => {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const handleSquareClick = (e) => {
  let i = squareArr.findIndex((el) => (e.offsetX >= el.x && e.offsetX < (el.x+20)) && (e.offsetY >= el.y && e.offsetY < (el.y+20)));
  if (i !== (-1)) {
    squareArr.splice(i, 1);
    count = count + 1;
  }
}

class Square {
  constructor(x, y, color, speed) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speed = speed;
  }

  draw(context) {
    context.fillRect(this.x, this.y, 20, 20);
    context.fillStyle = this.color;
    this.y = this.y + this.speed;
  }
}

function animate() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  squareArr.forEach((el)=>{
    el.draw(ctx);
  })
  setInterval(()=> {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 1000)
  requestAnimationFrame(animate);
  score.innerHTML = count;
 
}

area.addEventListener('click', handleSquareClick)
document.body.onload = animate;