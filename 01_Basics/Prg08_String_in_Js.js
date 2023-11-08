// String in Js

let name = "Ritesh Kumar Rai";
let chantingRound = 16;

console.log(name+' chants '+chantingRound+' rounds'); // not a good practice

// instead try better way 

// # Template Literals or [String Interpolation]

console.log(`The ${name} chants ${chantingRound} rounds daily`); // we use backticks with placeholder for variables

// `` -> backticks
// ${} -> placeholder



//String Object

const naam = new String('Hanuman Ji');

console.log(typeof name)
console.log(name.toUpperCase())

console.log(naam.__proto__);
console.log(naam.toLocaleLowerCase());
console.log(naam.indexOf('a'));
console.log(naam.charAt(0));

// some other string methods
console.log(naam.substring(0,4));
console.log(naam.slice(-8,5));


// trim() method
let naam1 = "    Ritesh Rai     ";
console.log(naam1);
console.log(naam1.length); // 19

let trimed_naam = naam1.trim();

console.log(trimed_naam)
console.log(trimed_naam.length) // 10

/*trim() is a commonly used method in JavaScript 
for removing whitespace from the beginning and end of a string. It can be useful for form validation, 
especially when validating user input such as email addresses, phone numbers, or passwords. 
It returns new string with modified data and the actual value is unchanged*/


// split() : it is used when you want to break a string into an array of string
// Example : "Hare Krsna" -> after split() -> ['Hare',' ','Krsna']

/*Syntax : split() accepts two parameters split(separator, limit);
            - separator (optional) - The pattern (string or regular expression) describing where each split should occur.
            - limit (optional) - A non-negative integer limiting the number of pieces to split the given string into. */

let naam2 = 'Ritesh Rai'; 
console.log(naam1.split(''));
console.log(naam2.split(' '));

//All the above will work for same normal string or string object [new String()]