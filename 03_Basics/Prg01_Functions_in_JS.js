// Functions in Js

/*
SYNTAX : 

    // function declaration + initialization
    function function_name() {

    }

    function_name() // function call
*/

// Example :

function sayName() {
    console.log('Ritesh Kumar Rai');
}

sayName();


// parameters are the variables which hold values in a function
function sum(num1, num2) {
    console.log(num1+num2);
}

sum(2,'5'); // arguments are those values which is passed at the time of function call


function sumTwo(num1 , num2){

    console.log('Hare Krsna');

    return num1+num2; //  return keyword used to return result 
    console.log('Hare Krsna'); // unreachable after return keyword
}

const result = sumTwo(2,2); // Here because we are storing values to variable we need a return keyword in the function else it won't work
console.log(result);



function Greetinguser(username = 'anonymous'){ // default value 'anonymous'

    if(!username){ 
        console.log('Please enter a username');
        return
     }
    return `Hare Krsna, ${username} `;
}

// console.log(Greetinguser('Ritesh Rai'))
console.log(Greetinguser())