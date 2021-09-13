let arr = [
    {
        id: 1,
        name: "John",
        gender: "m",
        age: 20
    },
    {
        id: 2,
        name: "Kate",
        gender: "f",
        age: 26    },
    {
        id: 3,
        name: "Lola",
        gender: "f",
        age: 28
    },
    {
        id: 4,
        name: "Harry",
        gender: "m",
        age: 66
    },
    {
        id: 5,
        name: "Nick",
        gender: "m",
        age: 45
    },
    {
        id: 6,
        name: "Bob",
        gender: "m",
        age: 12
    },
    {
        id: 7,
        name: "Ann",
        gender: "f",
        age: 15
    },
    {
        id: 8,
        name: "Marry",
        gender: "f",
        age: 17
    }
];

//forEach - не возвращает ничего, нужно использовать для переборов массива, когда надо узнать какую-либо информацию.
let summ = 0;
arr.forEach( (item) => {
    console.log(item);
    summ += item.age;
});
console.log(summ);


//map - возвращает модифицированный массив, не может вернуть массив меньше чем был - сократить него

let updatedArr = arr.map( (el, index) => {
    if (index % 2 === 0) {
        return {
            ...el,
            newKey: true,
            age: el.age+5,
        }
    }
    return el;
});

console.log(updatedArr);

let usersList = arr.map( (item) => `${item.name} - ${item.age}` );
console.log(usersList);

//filter - отфильтровать массив - нужно вернуть true/false - отбирает данные из массива - проходит весь массив

let men = arr.filter( item => item.gender === "m" );
console.log(men);

//find - нужно вернуть true/false - находит первое совпадение и не проходит весь обьект


let user = arr.find( (item) => item.id = '5');
console.log(user); // вернул объект

//some - нужно вернуть true/false - есть ли какой-то элемент в массиве

let hasGirls = arr.some( (item)  => item.gender === 'f' );
console.log(hasGirls);

//every - все ли элементы удовлетворяют условие?

let allAdults = arr.every( (item) => item.age >= 18 );
console.log(allAdults);

// reduce - 

let summAge = arr.reduce( (acc, item) => {
    return acc + item.age;
}, 0 );
console.log(summAge);

let users = arr.reduce ( (acc, item) => {
    return {
        ...acc,
        [item.name]: item.age
    }
}, {});
console.log(users);

let menList = arr.reduce( (acc, item) => {
    if (item.gender === 'm') {
        return [
            ...acc,
            {
                ...item,
                newKey: true,
                age: item.age+5 
            }
        ];
    } 
    return acc;
}, []);
console.log(menList);

let array = [
    {
        id: 1,
        name: "John",
        gender: "m",
        age: 20
    },
    {
        id: 2,
        name: "Kate",
        gender: "f",
        age: 26    },
    {
        id: 3,
        name: "Lola",
        gender: "f",
        age: 28
    },
    {
        id: 4,
        name: "Harry",
        gender: "m",
        age: 66
    },
    {
        id: 5,
        name: "Nick",
        gender: "m",
        age: 45
    }
]


