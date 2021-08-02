function Figure(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
}

function Line (x, y, x2, y2, color) {
    Figure.call(this, x, y, color);
    this.x2 = x2;
    this.y2 = y2;
    this.draw = function(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.strokeStyle = this.color;
        ctx.beginPath();       // Начинает новый путь
        ctx.moveTo(this.x, this.y); // Передвигает перо в точку (30, 50)
        ctx.lineTo(this.x2, this.y2); 
        ctx.stroke();          // Отображает путь
    }
}

function Circle (x, y, r, color) {
    Figure.call(this, x, y, color);
    this.r = r;
    this.draw = function(canvas) {
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        console.log(this.color);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.fill();
    }
}

function Rect (x, y, w, h, color) {
    Figure.call(this, x, y, color);
    this.w = w;
    this.h = h;
    this.draw = function(canvas){
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        console.log(this.color);
        console.log(this.x, this.y, this.w, this.h);
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}

function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.add = function() {
        for (let i = 0; i < arguments.length; i++) {
            arguments[i].draw(this.canvas);
        }
    }
}


let line = new Line(100, 800, 500, 740, 'gray'); // x1, y1, x2, y2, color
let line2 = new Line(100, 820, 500, 760, 'gray'); // x1, y1, x2, y2, color
let circle = new Circle(300, 300, 50, 'rgba(8,51,199,0.4)'); // x, y, r, color
let circle2 = new Circle(340, 380, 100, 'rgba(8,51,199,0.4)'); // x, y, r, color
let rect = new Rect(900, 350, 150, 250, 'rgba(0,208,80,0.3)'); // x, y, w, h, color
let rect2 = new Rect(960, 320, 180, 100, 'rgba(255,101,80,0.4)'); // x, y, w, h, color
let rect3 = new Rect(1100, 390, 100, 70, 'rgba(255,255,0,0.4)'); // x, y, w, h, color


let drawArea = new Canvas('canvasID');

let i = 0;
while (i !== 1500) {
    drawArea.add(new Line(i, 0, (i+30), 30, 'red'));
    drawArea.add(new Line((i+30), 30, (i+60), 0, 'red'));
    i += 60;
}

drawArea.add(circle, circle2);
drawArea.add(rect, rect2, rect3);
drawArea.add(line, line2);