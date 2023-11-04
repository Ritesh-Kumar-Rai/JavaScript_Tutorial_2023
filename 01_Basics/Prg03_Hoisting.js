// Hoisting

/*
    Hoisting means to use a variable before it is declared. -- same for function
    variable and functions are hoisted which means the declaration part is moved on the top
    of the code 
*/

let naam;   // declaration
naam = "Ritesh Rai"; // initialization

console.log(naam);

// So if you used like below

console.log(age); // undefined
//console.log(email); // email is not defined
var age = 22;



// undefined vs not defined

// 1. undefined : means the variable declared but not initialized. 
// 2. not defined : means the variable doesn't exists 

chant(); // Hoisting

function chant() {
    console.log('Hare Krsna');
}
// [NOTE : let and const does not support hoisting so be aware of it]

//const aadhar_id; // error you required to declare + initialized value at once in const
//aadhar_id = 1236736;

