

//Task 1

// let arr = [2, 5, 7, 's', 22, 'a', 'v', 'u', 8];
// let summ = 0;
// for (let i = 0; i < arr.length; i++) {
//     summ += arr[i];
// }
// alert(summ);

//Task 2

// let n = 10;
// let array = [];
// for (let j = 0; j < n; j++) {
//     array[j] = Math.random();
//     array[j] = array[j].toFixed(2);
// }
// for (j = 0; j < n; j++) {
//     console.log(array[j]**5);
// } 


//Task 3

// let arr = [ 'AngularJS', 'jQuery'];
// console.log(arr);
// arr.push("Backbone.js");
// console.log(arr);
// arr.unshift("ReactJS", "Vue.js")
// console.log(arr);
// arr.splice (1, 0, "CommonJS");
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     if ( arr[i] === "jQuery" ) {
//         alert(`${arr[i]}! Это здесь лишнее!`);
//     }
// }


//Task 4

// let str = "Как однажды Жак звонарь сломал фонарь головой";
// let arr = str.split(' ');
// /*for (j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
// }*/
// arr.splice(1, 3, arr[2], arr[3], arr[1]);
// //console.log(arr);
// str = arr.join(" ");
// alert(str);


//Task 5

// let person = {
//     firstName: "Vlada",
//     lastName: "Hryhorenko",
//     age: 20,
//     sex: "female",
//     job: "Markup Developer",
//     hobby: "volleyball"
//   };
//   let key = prompt("Enter a key that you`d like to find", "age");
//   if (key in person) {
//       console.log(`${key}: ${person[key]}`);
//   } else {
//     console.log("There is no such key");
//   }


// //Task 6 - with task 5

// let obj = {};
// obj.brand = prompt("Brand of the phone?", "Xiaomi");
// obj.model = prompt("Model of the phone?", "X-123");
// obj.resolution = prompt ("Resolution: ", "300");
// obj.price = prompt ("Price: ", "9000");
// obj.color = prompt ("Color: ", "Red");
// person.obj = obj;
// console.log(person);


//Task 7
let year = new Date;
year = year.getFullYear() - 1;
let dates = {
    currentDate: new Date(),
    yearAgo: new Date().setFullYear(year),
    enteredDate: prompt("Введите свою дату", "2020-08-20")
}
console.log(dates.currentDate);
console.log(dates.yearAgo);
console.log(dates.enteredDate);
if ( dates.enteredDate >= dates.yearAgo && dates.enteredDate <= dates.urrentDate ) {
    console.log("Введенная дата попадает в диапазон дат");
} else {
    console.log("Введенная дата не попадает в диапазон дат");
}







