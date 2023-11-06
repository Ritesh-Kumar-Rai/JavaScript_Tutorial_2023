// Datatype Conversion




// convert string to Int
let a = '16';
let converted_a_to_number = Number(a);

//console.log(typeof a);
//console.log(typeof converted_a_to_number);

//console.log(a, converted_a_to_number);

let a1 = '16rounds';

let con1 = Number(a1);

//console.log(typeof a1);
//console.log(typeof con1);

//console.log(a1, con1); // con1 produce NaN

/*When you convert a string to a number in JavaScript,
the result depends on the contents of the string.If the string contains only
numeric characters, the conversion will be successful and the resulting number
will be accurate.However, if the string contains non - numeric characters, 
the conversion will result in NaN(Not a Number).

- If you want to extract the numeric value from a string that contains non-numeric characters, 
you can use the parseInt() function.*/

let parse = parseInt(a1);

console.log(typeof a1);
console.log(typeof parse);

console.log(a1,parse);






// Convert int to boolean
let b = 0;
let con2 = Boolean(b);

console.log(typeof b)
console.log(typeof con2)

console.log(b,con2);

// -1 -> true, 0 -> false

console.log();
// Convert string to boolean
let c = "Ritesh Rai";
let con3 = Boolean(c);



console.log(typeof c);
console.log(typeof con3);
console.log(c,con3);

// "" -> false, "Ritesh Rai" -> true


// Operation

let num1 = 108;

let num2 = - num1; // number to negative
console.log(num1,num2)