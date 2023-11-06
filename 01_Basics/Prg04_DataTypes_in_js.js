// DataTypes in Js

/*
    Primarily JS has 2 mainly data types :
    1. Primitive datatypes
    2. Reference datatypes


    1. Primitive datatypes : 
                These are the datatypes whose values can be copied to another which is real copy.
                means if i have one variable of primary data types and if i copied first variable value to another variable
                and when i modify or delete the second variable the first variable will not get any reflect(unchanged).

                PRIMITIVE DATATYPES are : 
                    Number -> 1234.. upto 15digits,
                    BigInt -> 123456789101112131415n, 
                    String -> 'io', "Hare Krsna", 
                    Boolean -> TRUE/FALSE, 
                    null -> standalone value, 
                    undefined -> empty variable, 
                    symbol -> unique


    2. Reference DataTypes :
            Any value which is copied, does not become a real copy, but we have to pass the reference to the main value
            using it we call as Reference datatype.
            
            REFERENCE DATATYPES are :
                    Object {},
                    Array [],
                    Function ().
            Any value which are wrapped under these 3 braces are called as Reference datatype.
             
*/

// Example : 

// Primitive Datatype :

let a = 108; // Number
let name = "Ritesh Kumar Rai"; // String
let isTrue = true; // Boolean
let data = null; // null
let address; // undefined
const mySymbol = Symbol('Chant'); // Symbol

console.log(typeof mySymbol);

// now lets copy variable 1 to 2
let var1 = 12;
let var2 = var1;

var2 = null;

console.log(var1,var2);

// Reference Datatypes

let arr = [1,2,3,4,5,6,7,8]; //Array
let obj = {
    name : 'Ritesh Kumar Rai',
    age : 22,
    email : null,
    isactive : true
}; // Object

function chant() {
    console.log('Hare Krsna!');
} // function

console.log(typeof(arr)); 
console.log(typeof obj);
console.log(typeof chant);

// why array is object datatype ? we will learn in upcoming chapters but for now :

// array -> data is stored in key value pair like 0: 1, 1:1,2:2 which is [index : value]
// that's why array also count as object 



// Let's copy arr 1 to arr2

let arr2 = arr;

console.log(arr,arr2);

arr2.pop(); // as you can see we change arr2 but the arr is also gets reflected
console.log(arr,arr2);