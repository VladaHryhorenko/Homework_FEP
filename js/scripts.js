//Task 1

// let calculator = {
//     x: 1, // by default
//     y: 1, // by default
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

// const coffeMachine = {
//     message: 'Your coffee is ready!',
//     start: function() {
//         setTimeout(() => {
//             return alert(this.message);
//         }, 3000);
//     }
// }
// coffeMachine.start();


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

// let calculator = {
//     x: 1, // by default
//     y: 1, // by default
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

// let me = {
//     getSum: function(x, y) {
//         this.x = x;
//         this.y = y;
//         return `${this.x} + ${this.y} = ${calculator.sum.call(this, this.x, this.y)}`;
//     },
//     getDiv: function(x, y) {
//         this.x = x;
//         this.y = y;
//         return `${this.x} / ${this.y} = ${calculator.div.call(this, this.x, this.y)}`;
//     },
//     getMulti: function(x, y) {
//         this.x = x;
//         this.y = y;
//         return `${this.x} * ${this.y} = ${calculator.multi.call(this, this.x, this.y)}`;
//     },
//     getDiff: function(x, y) {
//         this.x = x;
//         this.y = y;
//         return `${this.x} - ${this.y} = ${calculator.diff.call(this, this.x, this.y)}`;
//     },
// }

// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));
// alert(me.getDiff(6789, 3334));
// alert(me.getMulti(12, 12));


//Task5
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// format.call(country, '', ''); // Ukraine
// format.apply(country,['[',']']); // [Ukraine]
// format.call(country.capital, '', ''); // Kyiv
// format.apply(country.capital, ['', '']); // Kyiv
// format.apply(country.language, ['','']); // undefined


//Task6
// let user = {
//     name: "Bob",
// }

// function format(start, end) {
//     console.log(start + this.name + end);
// }

// // let userFormat = format.call(user, '<<<', '>>>');
// let userFormat = format.bind(user);
// userFormat('<<<', '>>>');


//Task7

// function concat(str, sep, str1) {
//     return console.log(str + sep + str1);
// }

// let hello = concat.bind(null, "Hello", ' ');

// alert(hello("Bob"));
// alert(hello("World!"));


//Рекурсия
//Task1

// let x = 2;
// let y = 5;
// let z = 12;

// рекурсия 1й способ
// let i = 1;
// function cube(a) {
//     let res = a;
//     if(i !== 3) {
//         ++i;
//         res *= x;
//         return cube(res);
//     }
//     return res;
// }

// рекурсия 2й способ
// function cube(a, n = 3) {
//     if (n == 1) {
//         return a;
//       } else {
//         return a * cube(a, n - 1);
//       }
// }

// console.log(cube(x));
// console.log(cube(y));
// console.log(cube(z));


//цикл
// function cube(a) {
//     let res = a;
//         for(let i = 1; i < 3; i++) {
//             res *= a;
//         }
//         return `${a}**3 = ${res}`;
// }

// console.log(cube(x));
// console.log(cube(y));
// console.log(cube(4));
// console.log(cube(1));
// console.log(cube(12));




//Task2
// let res = 0;
// function sum(...args) {
//     if (args.length !== 0) {
//         return res = args[0] + sum(...args.slice(1));
//     }
//     return res;
// }
// console.log(sum(1, 2, 3, 4, 5)); // 15


