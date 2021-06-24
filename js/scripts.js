

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

let person = {
    firstName: "Vlada",
    lastName: "Hryhorenko",
    age: 20,
    sex: "female",
    job: {
      position: "Markup Developer",
      company: "Momomo",
      payment: 2000
    }
  };
  let key = prompt("Enter a key that you`d like to find", "age");
  if (key in person) {
      console.log(`${key}: ${person[key]}`);
  } else {
    console.log("There is no such key");
  }


