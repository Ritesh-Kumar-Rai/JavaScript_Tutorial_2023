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