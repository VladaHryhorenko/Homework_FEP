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

let arrOfUsers = [
    {
        firstName: "John",
        lastName: "Lol",
        age: 20
    },
    {
        firstName: "Kate",
        lastName: "Lol",
        age: 19
    },
    {
        firstName: "David",
        lastName: "Miller",
        age: 33
    },
    {
        firstName: "Lera",
        lastName: "Miller",
        age: 22
    },
    {
        firstName: "Pol",
        lastName: "Hill",
        age: 60
    },
    {
        firstName: "Rob",
        lastName: "Brown",
        age: 17
    },
    {
        firstName: "Bob",
        lastName: "White",
        age: 20
    },
    {
        firstName: "Richard",
        lastName: "Berrie",
        age: 16
    },
    {
        firstName: "Joan",
        lastName: "Roll",
        age: 29
    },
    {
        firstName: "Harry",
        lastName: "Black",
        age: 12
    }
];

// let filterMinors = arrOfUsers.filter(function(item) {
//     if (item.age < 18) {
//         return item;
//     }
// });
// let filterMinors = arrOfUsers.filter( item => item.age > 18);
// console.log(filterMinors);

// arrOfUsers = arrOfUsers.map(item => {
//     item.fullname = `${item.firstName} ${item.lastName}`;
// });

// console.log(arrOfUsers);




// let selectFullName = filterMinors.filter(function(item) {
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

// function objectExtend(target, ...source) {
//     console.log(source);
//     for ( let j = 0; j < source.length; j++) {
//         let term = source[j];
//         console.log(term);
//         for (let key in term) {
//             target[key] = term[key];
//         }
        
//     }
// }

// let target = {
//     name: "John",
//     lastName: "Parker",
//     age: 30
// }
// console.log({...target});

// let job = {
//     position: "developer",
//     company: "microsoft",
//     salary: 7000,
//     age: 77
// }

// objectExtend (target, job, {married: false, children: false});
// console.log(target);

//Task 7

// function setComment(date,  message , author = "Anonymous") {
//     if (author === null) {
//         author= "Anonymous";
//     };
//     if ((date === undefined) || (message === undefined) || (date === null) || (message === null)) {
//         // return alert("Данные переданы в функцию некорректно");
//         return console.log("Данные переданы в функцию некорректно");
//     } else {
//         console.log(`${author}, ${date} \n${message}`);
//     }
// };

// setComment('2016-11-02', 'Everything is ok', 'John');
// setComment('2016-11-02', 'Everything is ok'); 
// setComment('2016-11-02'); 
// setComment(null, 'hello', 'Kate');
// setComment('2016-11-02', null, 'Bob');
// setComment('2016-11-02','John', null);


//Task 8

// function createTimer() {
//     let t1 = performance.now();
//     return function timer() {
//         let t2 = performance.now(); 
//         return console.log(t2-t1);
//     };
// }

// let timer = createTimer();
// alert('!')  // код, время выполнения которого нужно измерить
// alert( timer() ); 


//Task 9

// function createAdder(val) {
//     let name = val;
//     return function val(param) {
//         return name + param;
//     }
// };

// let hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry

// let plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10



const btnPlus = document.querySelector('.first');
const btnMinus = document.querySelector('.second');

btnPlus.addEventListener('click', function(event) {
    console.log(event);
    console.log("plus");
});

btnMinus.addEventListener('click', function() {
    console.log("minus");
});



