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
//All the above will work for same normal string or string object [new String()]