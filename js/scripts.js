//Task 1 ET-3min AT-3min

// function max(a, b) {
//     if (a > b) return a;
//     else if (b > a )return b;
//     else return "equal"
// }
// let a = +prompt("Enter a first number", 55);
// let b = +prompt("Enter a second number", 90);
// console.log( max(a, b) );

//Task 2 ET-10min AT-12min

// function min(...args) {
//     let min = args[0];
//     console.log(args);
//     for (let i = 1; i < args.length; i++) {
//         if( min > args[i]) {
//             min = args[i];
//         }
//     }
//     return min;
// }

// console.log( min(-111, 4, 89, -11, 0, -2, 23, -789) );


//Task 3

// let arrOfUsers = [
//     {
//         firstName: "John",
//         lastName: "Lol",
//         age: 20
//     },
//     {
//         firstName: "Kate",
//         lastName: "Lol",
//         age: 19
//     },
//     {
//         firstName: "David",
//         lastName: "Miller",
//         age: 33
//     },
//     {
//         firstName: "Lera",
//         lastName: "Miller",
//         age: 22
//     },
//     {
//         firstName: "Pol",
//         lastName: "Hill",
//         age: 60
//     },
//     {
//         firstName: "Rob",
//         lastName: "Brown",
//         age: 17
//     },
//     {
//         firstName: "Bob",
//         lastName: "White",
//         age: 20
//     },
//     {
//         firstName: "Richard",
//         lastName: "Berrie",
//         age: 16
//     },
//     {
//         firstName: "Joan",
//         lastName: "Roll",
//         age: 29
//     },
//     {
//         firstName: "Harry",
//         lastName: "Black",
//         age: 12
//     }
// ];
// let filterMinors = arrOfUsers.filter(function(item) {
//     if (item.age < 18) {
//         return item;
//     }
// });
// console.log(filterMinors);

// for (let i = 0; i < arrOfUsers.length; i++) {
//     arrOfUsers[i].fullName = `${arrOfUsers[i].firstName} ${arrOfUsers[i].lastName}`;
// }
// console.log(arrOfUsers);

// let selectFullName = arrOfUsers.filter(function(item) {
//     delete item.age;
//     delete item.firstName;
//     delete item.lastName;
//     return item;
// });
// console.log(selectFullName);


//Task 4

// function deleteFirst(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i+1];
//     }
//     arr.length = arr.length-1;
//     return arr;
// }

// let arr = [];
// let n = 10;
// for (let j = 0; j < n; j++) {
//     arr[j] = prompt("Enter an element", 2);
// }
// console.log(arr);
// console.log( deleteFirst(arr) );


//Task 5

// function addLast(arr, ...param){
//     for (let i = 0; i < param.length; i++) {
//         arr[arr.length] = param[i];
//     }
// }

// let arr = ['h', 'k', 'p', 5, 6, 'j'];
// console.log(arr);
// addLast(arr, 'hj', 55, 'lola', true);
// console.log(arr);


//Task 6

function objectExtend(target, ...source) {
    console.log(source);
    for ( let j = 0; j < source.length; j++) {
        let
    target.source[j][key];
        //for ()let key in O
        
    }
}

let target = {
    name: "John",
    lastName: "Parker",
    age: 30
}

let job = {
    position: "developer",
    company: "microsoft",
    salary: 7000,
    age: 77
}

objectExtend (target, job, {married: false, children: false});
console.log(target);




