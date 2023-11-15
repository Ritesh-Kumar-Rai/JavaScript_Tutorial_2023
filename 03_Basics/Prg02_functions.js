// REST operator in function

function calculateCartPrice(val1,...nums) {   // rest operator
    return nums
}

console.log(calculateCartPrice(400,500,600,700));

// you can also pass array and objects to functions

// passing objects to function
const myObj = {
    name : 'Hanuman Ji',
    age : '1000000+',
    isImmortal : true,
    chanting : 'Ram Ram'    
};

function Greeting(obj){

    //when you work with objects in a function so be assure that the properties which
    // you are using is available in object or not
    console.log(`Hare Krsna ${obj.name}, chanting ${obj.chanting}`);
}

Greeting(myObj);


// same way we can pass array to function

const newarray = [1,2,3,4,5];

function getArray(arr){
    console.log(`Second index was ${arr[1]} and last index was ${arr[4]}`);
}

getArray(newarray);