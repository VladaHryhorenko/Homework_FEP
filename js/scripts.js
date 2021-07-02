

//Task 1 ET-3min; AT-5min

// let arr = [2, 5, 7, 's', 22, 'a', 'v', 'u', 8];
// let summ = 0;
// let str = "";
// for (let i = 0; i < arr.length; i++) {
//     if ( !isNaN(arr[i]) ) {
//         summ += arr[i];
//     } else continue;
// }

// alert(`Array: ${arr}\nSumm: ${summ}`);


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


//Task 3 ET-5min; AT-4min

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


//Task 4 ET-10min; AT-15min

// let str = "Как однажды Жак звонарь сломал фонарь головой";
// let arr = str.split(' ');
// /*for (j = 0; j < arr.length; j++) {
//     console.log(arr[j]);
// }*/
// arr.splice(1, 6, arr[2], arr[3], arr[1], arr[4], arr[6], arr[5]);
// //console.log(arr);
// str = arr.join(" ");
// alert(str);


//Task 5 ET-8min; AT-8min

let person = {
    firstName: "Vlada",
    lastName: "Hryhorenko",
    age: 20,
    sex: "female",
    job: "Markup Developer",
    hobby: "volleyball"
  };
  let key = prompt("Enter a key that you`d like to find", "age");
  if (key in person) {
      console.log(`${key}: ${person[key]}`);
  } else {
    person[key] = prompt("Key is added to array. Enter a value");
  }
  //console.log(person);


// //Task 6 - with task 5

// let obj = {};
// obj.brand = prompt("Brand of the phone?", "Xiaomi");
// obj.model = prompt("Model of the phone?", "X-123");
// obj.resolution = prompt ("Resolution: ", "300");
// obj.price = prompt ("Price: ", "9000");
// obj.color = prompt ("Color: ", "Red");
// person.obj = obj;
// console.log(person);


//Task 7 ET-8min; AT-60min

// let dates = {
//     currentDate: new Date(),
//     yearAgo: new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate()),
//     enteredDate: new Date(prompt("Введите свою дату", "2020-08-20"))
// }
// console.log(dates.currentDate);
// console.log(dates.yearAgo);
// console.log(dates.enteredDate);

// if ( dates.enteredDate >= dates.yearAgo && dates.enteredDate <= dates.currentDate ) {
//     console.log("Введенная дата попадает в диапазон дат");
// } else {
//     console.log("Введенная дата не попадает в диапазон дат");
// }


//Task 8

// let arr = [];
// let n = 10;
// let summ = 0;

// for (let i = 0; i < n; i++) {
//     arr.push(prompt("Enter a value to an array"));
// }

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     if ( !isNaN(+arr[i])) {
//         summ += +arr[i];
//     } else continue;
// }
// alert(`Summ of numbers is ${summ}`);


//Task 9 ET-5min; AT-11min

// let newArray = [];
// let i, j;
// for (i = 0; i < 10; i++) {
//     newArray[i] = [];
//     for (j = 0; j < 10; j++) {
//         newArray[i][j] = `${i+1}*${j+1}=${(i+1)*(j+1)}`;
//     }
// }
// for (i = 0; i < 10; i++) {
//     console.log(newArray[i]);
// }

//Task 10 ET-3min; AT-3min

// let img = {
//     src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//     alt: "",
//     style: {
//         border: {
//             "border-color" : "#ccc",
//             "border-width": "1px",
//             "border-style" : "solid"
//         }
//     },
//     width: "200"  
// }











