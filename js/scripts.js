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

// function summOfNumbers(number) {
//     let arr = number.toString().split("");
//     console.log(arr);
//     let summ = 0;
//     for (let i = 0; i < arr.length; i++) {
//         summ += +arr[i];
//     }
//     console.log(summ);
//     if (summ > 9) {
//         summOfNumbers(summ);
//     } else return summ;
// }

// let number = 987545999876543454;

// let res = summOfNumbers(number);
// console.log(res);


// function Animal(name, age) {
//     let animalName = name;
//     this.age = age;
//     this.say = function() {
//         console.log("Voice")
//     }
//     this.run = function() {
//         console.log("Run")
//     }
// }

// let cat = new Animal("Murka", 5);
// cat.run();
// cat.say();
// console.log(cat);


// function Dog(name, value) {
//     Animal.call(this, name, value);
//     this.addAge = function() {
//         this.age += 10;
//     }
//     this.say= function() {
//         console.log("Гав");
//     }
//     let beforeRun = this.run;
//     this.run  = function() {
//         let commandToRun = confirm("Животное откликаается на Фас?");
//         if(commandToRun) beforeRun.call(this);
//     }
// }

// let dog = new Dog("Reks", 3);
// console.log(dog.age);
// dog.say();
// dog.run();
// dog.addAge();
// console.log(dog);


class Animal {
    constructor(name, breed) {
        this.__name = name;
        this._breed = breed;
    }
    comeHere() {
        console.log(`${this.__name} is here`);
    }
    say() {
        console.log("Hello"); 
    } 
}

let animal = new Animal("Barsik", "buldog");


// function Cat(name, breed) {
//     Animal.call(this, name, breed);
// }

// Cat.prototype = Object.create(Animal.prototype);

// Cat.prototype.comeHere = function() {
//     Animal.prototype.comeHere.call(this);
//     console.log(`Хозяин`);
// }

// Cat.prototype.say = function() {
//     console.log("may");
// }

// let cat = new Cat("Murka", "british");

class Cat extends Animal {
    constructor(name, breed) {
        super(name, breed);
    }
    comeHere() {
        super.comeHere();
        console.log("хозяин");
    }
    say() {
        console.log('Мяу');
    }

}

let cat = new Cat("Murka", "british");









