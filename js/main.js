const startBtn = getElementById('start');
const stopBtn = getElementById('stop');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let red = getRandomInt(255);
let green = getRandomInt(255);
let blue = getRandomInt(255);

class Square {
  constructor(x, y, w, h, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.w = w;
      this.h = h;
  }
  draw(canvas){
      let ctx = canvas.getContext('2d');
      ctx.fillStyle = this.color;
      console.log(this.color);
      console.log(this.x, this.y, this.w, this.h);
      ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}


function animate() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
  let x = Math.random() * 1000 % canvas.style.width;
  ctx.fillRect(x, 0, 20, 20);
  function createSq() {
    ctx.fillStyle = "rgb(" + red + "," + green + "," + blue + ")";
    x = Math.random() * 1000 % canvas.style.width;
    ctx.fillRect(x, 0, 20, 20);
  }
  ctx.addEventListener('click', createSq);

  
  // тут может находится ваш код

  requestAnimationFrame(animate);
}

// тут может находится ваш код

document.body.onload = animate;
