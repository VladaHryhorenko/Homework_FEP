//Task1

// function sequence(start = 0, step = 1) {
//     return function() {
//       return start +=step;
//     }
// }

// let generatorDefault = sequence();
// let generator = sequence(10, 3);
// let generator2 = sequence(7, 1);
// console.log(generatorDefault());
// console.log(generator());
// console.log(generator());
// console.log(generator2());


//Task2
// function reverseStr(str) {
//     return str.split("").reverse().join("");
// };

// let str = "123456";
// console.log(str);
// let str2 = reverseStr(str);
// console.log(str2);

//Task 3

// function frstUp(str) {
//     let arr = str.split(" ");
//     let arrUppdate = arr.map((item) => {
//         return `${item[0].toUpperCase()}${item.slice(1)}`
//     })
//     return arrUppdate.join(" ");
// }
// let str = "hello this is new string";
// str = frstUp(str);
// console.log(str);


//Task 4

// function modifyStr(str) {
//     let arr = str.split("_")
//     let arrUppdate = arr.map((item, index) => {
//         if (index === 0) return item;
//         else{
//             return `${item[0].toUpperCase()}${item.slice(1)}`
//         }
//     })
//     return arrUppdate.join("");
// }

// let str = "var_text_hello";
// str = modifyStr(str);
// console.log(str);


//Task 5 

// let numbArr = [1, 2, 3, 4, 5];

// function print(numbArr) {
//     console.log(numbArr[0]);
//     numbArr.shift();
//     if (numbArr.length) {
//         return print(numbArr);
//     } else return;
// }

// print(numbArr);


//Task 6

function summOfNumbers(number) {
    let arr = number.toString().split("");
    console.log(arr);
    let summ = 0;
    for (let i = 0; i < arr.length; i++) {
        summ += +arr[i];
    }
    console.log(summ);
    if (summ > 9) {
        summOfNumbers(summ);
    } else return summ;
}

let number = 987545999876543454;

let res = summOfNumbers(number);
console.log(res);





