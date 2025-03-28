let person =[
    {
        name:"imran",
        age:23,
        contact:"9090909090"
    },
    {
        name:"manish",
        age:28,
        contact:"89898989"
    },
    {
        name:"Arman",
        age:16,
        contact:"0909090909"
    },
]

console.log(person);

person.push({name:"Hussain",
    age:23,
    contact:"888888888"
});

// console.log(person);

// person.pop();

// console.log(person);

person.shift()

// console.log(person);

person.unshift({name:"Imran",
    age:23,
    contact:"888888888"
})

console.log(person);

let personArr = person.map((e)=>{return e.name})
console.log(personArr);

let personArr1 = person.filter((e)=>{return e.age<=23})
console.log(personArr1);








