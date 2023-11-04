console.log('hare krsna');

/*
word vs keyword

1. word : the word which does not have meaning in js. Interpreter does not know about word.
2. keyword : the keyword which have some meaning in js, the interpreter knows about this words is called keyword.

Examples : 
    word -> ritesh, krsna, veda, bhagvad, diwali etc.
    keyword -> if,else,let,const,var, return, function, for, while etc.
*/


// Variables : 

/*    Variables are a container which is capable to store some value(data) in it. 
    Let say, in our code we want to store some data where anytime we can acquire those value when we need it.
    and we want to named it somewhat so we can can easily call it and fetch ny his name in this case we will use variables.
  - Variables is a container which store/hold data in it and you can name it 
  
  Example : 
        let's assume we want to store a user id after fetching from user in a variable like : user123_name@gmail.com 
        so we will store it in Variable : userid = user123_name@gmail.com;
    
    Syntax : var, let;
    var var_name = value;
    let var_name = value;

    e.g : 
            var userid = 123;
            let name = 'ram';
*/


isTrue = 'pak'; // is considered as variable but it is not recommended

console.log(isTrue)

var pehla = 67;// var is also negate to use because it has some security issues + scope issues[functional scope]
let dusra = 'dusra using let';

dusra = 'modified dusra'; // in variables var,let you can change or modify after assigning value to variable

// Constants
//  constants are same as variable but different in behaviour
// if you assign value to constant it won't be changed or modify after assigning to it
const pi = 3.14;

//pi = 6767; // error


console.table([pehla,dusra,pi]);

console.warn('danger');