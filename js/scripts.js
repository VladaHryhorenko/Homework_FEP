//Task 1

// let calculator = {
//     x: 1,
//     y: 1,
//     read: function() {
//         this.x = prompt('Enter first value');
//         this.y = prompt('Enter second value');
//     },
//     sum: function() {
//         return this.x + this.y;
//     },
//     multi: function() {
//         return this.x * this.y;
//     },
//     diff: function() {
//         return this.x - this.y;
//     },
//     div: function() {
//         return this.x / this.y;
//     }

// }
// console.log('Default')
// console.log(calculator.multi());
// console.log(calculator.sum());
// console.log(calculator.diff());
// console.log(calculator.div());

// calculator.read();
// console.log(calculator.multi());
// console.log(calculator.sum());
// console.log(calculator.diff());
// console.log(calculator.div());



//Task 2 ----- ДОДЕЛАТЬ!!!!!!!!!!!!!!!!!!!

// let coffeMachine = {
//     message: 'Your coffee is ready!',
//     start: function() {
//         return alert(this.message);
//     }
// }
// setTimeout(coffeMachine.start, 3000);


//Task3

// let counter = {
//     i: 0,
//     inc: function() {
//          this.i++;
//          return this;
//     },
//     dec: function() {
//         this.i--;
//         return this;
//     },
//     getValue: function() {
//         return this.i;
//     }
// }

// let current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); //1

// // let current = counter.inc().inc().dec().inc().dec().inc().inc().getValue();
// // alert(current); //3


//Task4


let calculator = {
    x: 1,
    y: 1,
    read: function() {
        this.x = prompt('Enter first value');
        this.y = prompt('Enter second value');
    },
    sum: function() {
        return this.x + this.y;
    },
    multi: function() {
        return this.x * this.y;
    },
    diff: function() {
        return this.x - this.y;
    },
    div: function() {
        return this.x / this.y;
    }
}

let calcInterface = {
    x: 4,
    y: 5,
    getSum: function() {
        calculator.read();
        return alert(`${this.x} + ${this.y} = ${calculator.sum()}`)
    }
}
