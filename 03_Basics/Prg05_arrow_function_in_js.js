// arrow function

myfunc = ()=>{
    return 'Hello world';
}

console.log(myfunc());


const greet = () =>{
    console.log("Hare Krsna!");
}

greet();



// implicit return arrow function, you don't need to use return keyword like below 


// const myfunc2 = () => 'Hanuman Ji';
// const sum = (num1,num2) => num1+num2;

// console.log(myfunc2());
// console.log(sum(2,2));

// implicit return with parenthesis bracket to return special data or multiline data

const myfunc2 = (num1,naam) => (`
This is ${num1} named of ${naam}`);

console.log(myfunc2(23,'Ram'))

// or 
const returnObj = () => ({
    name : 'SONY',
    product : 'PS5 pro',
    rate : '65000'
});

console.log(returnObj());

