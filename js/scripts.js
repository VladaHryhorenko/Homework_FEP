//Task1

// const x = 50;
// const y = 3 * x;
// const z = x + y;
// console.log("x = ", x, "\ny = ", y, "\nz = ", z, "\n\n\n");


//Task2

// let firstName = prompt("Your first name?", "John");
// let lastName = prompt("Your last name?", "Miller");
// let res = "What`s up " + firstName+ " " + lastName;
// alert(res);


//Task3

// let x = +prompt("Enter number 1", 54);
// let y = +prompt("Enter number 2", 10);

// let multiplication = x * y;
// let division = x / y;
// let addition = x + y;
// let subtraction = x - y;

// let res2 = "x * y = " + multiplication + "\nx / y = " + division +  "\nx + y = " + addition +  "\nx - y = " + subtraction;
// alert(res2);


//Task 4

// let payment = 0;
// let amountOfDays = +prompt("Количество рабочих дней в неделю?", 5);
// let amountOfHours = +prompt("Количество рабочих часов в день?", 8);
// let reitPerHour = +prompt("Ваш рейт за час?", 18);
// let amountOfWeeks = 4.3;

// payment = reitPerHour * amountOfHours * amountOfDays * amountOfWeeks;
// console.log ("Payment for june: ", payment, "$");


//Task 5

// let x = +prompt("Enter a number", 35);
// if (x < 0) {
//     x = x * (-1);  
// }
// let res = x % 2;
// if (res === 1) {
//     console.log("Число нечётное");
// } else if (res === 0) {
//     console.log("Число чётное");
// } else {
//     console.log("Было введено не число");
// }


//Task 6

// let val = +prompt("Enter a value");
// console.log(val, typeof val);
// //console.log(val == "NaN");
// if ( isNaN(val) ) {
//     console.log("Entered value is not a number");
// } else {
//     console.log("Entered value is a number");
// };


//Task 7

// let info = 0;
// let res = 0
// let num1 = Math.random();
// num1 *= 100;
// console.log(num1);
// num1 = Math.round(num1);
// console.log(num1);
// let num2 = +prompt("Enter your number", 55);
// if (num1 >= num2) {
//     info = "The first number is bigger than the second";
// } else {
//     info = "The second number is bigger than the first";
// }

// res = info + "\nNumber 1 = " + num1 + "\nNumber 2 = " + num2;
// alert(res);


//Task 8

let str = prompt("Your sentense", "Мне нравится изучать Front-end");
let str2 = prompt("Что вам нравится изучать?", "JavaScript");
if ( !(str.includes(str2)) ) {
    console.log("Строка не содержит в себе", str2);
};
let substring = str.slice(0, 21);
//console.log(substring);
let result = `${substring} ${str2}`;
alert(result);

