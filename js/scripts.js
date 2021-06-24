//Task1

// let x = +prompt("Enter a number", -67);
// if (x > 0) {
//     alert ("Number is positive!");
// } else if (x < 0) {
//     alert ("Number is negative");
// } else {
//     alert ("Number is 0");
// }


//Task2

// let myMoney = +prompt("How much money do YOU have?", 150);
// let friendsMoney = +prompt("How much money does YOUR FRIEND have?", 100);
// let allMoney = myMoney + friendsMoney;

// if (allMoney < 1000) {
//     alert ("It`s not enough for Mallorca! Let`s go to drink some beer!");
// } else {
//     alert("We`ll have a nice vacation in Mallorca");
// }


//Task 3

// let age = +prompt("How old are you?", 25);
// if ( age >= 20 && age < 27) {
//     alert ("Выслать повестку :(");
// } else {
//     alert ("Тебе повезло, ты либо ещё слишком молод, либо уже достаточно старый");
// }

//Task 4

// for(;;) {
//     let busNumber = +prompt("Какой приехал автобус(номер)?", 7);
//     if( busNumber === 7 || busNumber === 225 || busNumber === 255) {
//         alert ("Едем домой!");
//         break;
//     } else {
//         alert ("Придется ещё подождать своей маршрутки");
//     }
// }

//Task 5

// let dayOfTheWeek = "friday"; // = "sunday";

// if (dayOfTheWeek !== "saturday" && dayOfTheWeek !== "sunday") {
//     alert( `Today is ${dayOfTheWeek}! You have to go to work!` );
// } else {
//     alert( `Today is ${dayOfTheWeek}! Have a rest!` );
// }

//Task 6

// let x = 22;
// let y = 22;
// while( (x <= -20) || (x >= 20) ) {
//     x = +prompt("Enter a number 1( -20 <= number <= 20 )", 0);
// }
// while( (y <= -20) || (y >= 20) ) {
//     y = +prompt("Enter a number 2( -20 <= number <= 20 )", 0);
// }
// if ( x <= 1 && (y>=3 || y<0) ) {
//     alert(`Summ x + y = ${x+y}`);
// } else {
//     alert("Неверно! Условие не выполняется!");
// }

//Task 7

// let x = +prompt("Enter namber 1", 7);
// let y = +prompt("Enter number 2", 6);

// if ( (x > 2 && x < 11) || (y >= 6 && y < 14) ) {
//     x = 2 * x + 5;
//     alert(`2 * x + 5 = ${x}`);
// } else {
//     alert("Введенные числа не удовлеворяют условиям");
// }

//Task 8

// let userName = prompt("What is yout name?");
// if ( userName === "" ){
//     alert("You entered an empty string");
// } else if (userName === null) {
//     alert("You pushed 'Отмена'");
// } else {
//     alert( `Hello, ${userName}`);
// }


//Task 9

// let greeting = "";
// let lang = prompt("Choose the language: ru, en or de", "ru");
// /*
// if (lang === "ru") {
//     alert("Привет!");
// } else if (lang === "en") {
//     alert("Hello!");
// } else if (lang === "de") {
//     alert("Guten Tag!");
// } else {
//     alert("Error! You didn`t choose the lang correctly");
// }*/

// switch(lang) {
//     case "ru":
//         alert("Привет!");
//         break;

//     case "en":
//         alert("Hello!");
//         break;

//     case "de":
//         alert("Guten Tag!");
//         break;

//     default:
//         alert("Error! You didn`t choose the lang correctly");
//         break;
// }

//Task 10

// let mounth = new Date();

// if (mounth.getMonth() >= 2 && mounth.getMonth() < 5) {
//     alert("It`s spring");
// } else if (mounth.getMonth() >= 5 && mounth.getMonth() < 8) {
//     alert ("It`s summer");
// } else if (mounth.getMonth() >= 8 && mounth.getMonth() < 11) {
//     alert ("It`s autumn");
// } else {
//     alert("it`s winter");
// }
// console.log(mounth, mounth.getMonth() );

//Task 11

// let lang = prompt("Choose the language (ru or en)");
// let day = +prompt("Choose the day (0 - sunday... 6 - monday)");

// if ( lang === "ru" ) {
//     switch(day) {
//         case 0:
//             alert("Воскресенье");
//             break;
//         case 1:
//             alert("Понедельник");
//             break;
//         case 2:
//             alert("Вторник");
//             break;
//         case 3:
//             alert("Среда");
//             break;
//         case 4:
//             alert("Четверг");
//             break;
//         case 5:
//             alert("Пятница");
//             break;
//         case 6:
//             alert("Суббота");
//             break;
//         default:
//             alert("Ты неправильно выбрал(-а) день");
//             break;
//     }
// } else if ( lang === "en" ){
//     switch(day) {
//         case 0:
//             alert("Sunday");
//             break;
//         case 1:
//             alert("Monday");
//             break;
//         case 2:
//             alert("Tuesday");
//             break;
//         case 3:
//             alert("Wednesday");
//             break;
//         case 4:
//             alert("Thursday");
//             break;
//         case 5:
//             alert("Friday");
//             break;
//         case 6:
//             alert("Saturday");
//             break;
//         default:
//             alert("You choosed an uncorrect day");
//             break;
//     }
// } else {
//     alert("Uncorrect language");
// }


//Task 12

// let userName = prompt("What is your name?", "John");
// let userAge = +prompt("What is your age?", 29);

// if ( (userName === "John" && userAge === 29) || (userName === "Kate" && userAge === 15) ) {
//     console.log(`Привет ${userName} ${userAge}`);
// } else {
//     console.log("Пока");
// }

// //(userName === "John" && userAge === 29) || (userName === "Kate" && userAge === 15) ? console.log(`Привет ${userName} ${userAge}`) : console.log("Пока");

