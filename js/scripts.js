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



//Task 2

let coffeMachine = {
    message: 'Your coffee is ready!',
    start: function() {
        return alert(this.message);
    }
}
setTimeout(coffeMachine.start, 3000);

