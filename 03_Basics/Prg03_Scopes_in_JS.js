// Scopes in JS

// Global and Local Scope
var a = 2; // Global scope
let b = 100;
if(true){

    var a = 12; // var is function scope 
    // Local scope
    let b = 10; // wheareas let and const are blocked scoped 
    const c = 89;

    console.log('Inner b : ',b);
}

console.log(a);

console.log('Outer b: ',b);
// console.log(c);



//

function one() {
    const username = 'Ritesh Rai';

    function two() {
        const id = 122;
        console.log(username)
    }
    two()
    // console.log(id)
}

one();

if(true)
{
    const username = 'Ritesh rai';
    if(username === 'Ritesh rai'){
        const id = 122;
        console.log(username);
    }
    // console.log(id);
}

// console.log(username);


// Hoisting

hello('Hare Krsna');

function hello(say){
    console.log(say);
}

// lol('Hare Ram'); // can't because it's a variable 
const lol = function(say){
        console.log(say);
}
