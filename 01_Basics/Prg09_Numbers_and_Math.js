let score = 108;
console.log(score);

// new Number() object you gonna used when you want to explicitly define datatype as number only
let balance = new Number(108.899090);
console.log(balance)

console.log(balance.toString());

// toFixed(num) it is used for float values when you want to print values after decimal point
console.log(balance.toFixed(2)); // it only print 2 digit num after floating point 108.90


// toPrecision() 
// it is used when you want a roundof values of a given number
// Syntax : toPrecision(num) it accepts num which defines for how much digits before floating point gives roundof

let forRoundof = 898.77869098;

console.log(forRoundof.toPrecision(2)); // here we get output as 9.0e+2 because we provide smaller digit then the actual value
console.log(forRoundof.toPrecision(3));// 899
// be careful while using toPrecision() it requires accurate digit numbers

// toLocaleString(locales,[options])
//      it is used to format numbers, date, time according to user region and language settings

let localeNumbers = 100000;

console.log(localeNumbers); // without toLocalString()
console.log(localeNumbers.toLocaleString('en-IN'));// after toLocaleString()

console.log(localeNumbers.toLocaleString('hi-IN',{style: 'currency',currency : 'INR'}));



// =================== Maths ===========================

console.log(Math);

console.log(Math.abs(-108)); // always return positive number
console.log(Math.round(4.3)); // roundof value
console.log(Math.ceil(6.1)); // returns largest value greater or equal to given number
console.log(Math.floor(6.9));// returns smallest value less tha or equal to given number


console.log(Math.min(1,2,3,7,90,3)); // it returns min value from an array
console.log(Math.max(1,2,3,7,8,20,8,11,4)); // it returns max value from an array

// Math.random() to generate random number by default range 0 to 1 in decimal points

console.log(Math.random());
console.log(Math.random() * 10); // to get number between 0 to 10 floating = true
console.log(Math.floor((Math.random() * 10)) + 1);// to get number range between 1 to 10 floating = false


// to get random numbers between custom range of min and max
const min = 10;
const max = 20;

console.log(Math.floor(Math.random() *  (max - min + 1)) + min);

 