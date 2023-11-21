// if statement

/* SYNTAX :
    if(condition){
        ...some code;
    }
*/

// Conditional Operators used : ==,!=,===,!==,>,<,>=,<=

let isLoggedIn = true;

if(isLoggedIn){
    console.log('~Hare Krsna User~');
}


let age  = 22;

if(age >= 20){
    console.log('Greater than 20');
}

if(28 === '28'){
    console.log('num is different from string');
}

// if else statement
/*SYNTAX :
    if(condition){
        ... some code exec when condition true
    }else{
        ...some code when condition false
    }

*/

if(isLoggedIn){
    console.log('User LoggedIn');
}else{
    console.log('User not loggedIn');
}

//Implicit Scope
if(true) console.log(108);
    // or for multiple line
if(age > 18) console.log('Great'), console.log("Not eligible");// not a good practice    


// if..elseif statement

if(age <= 18){
    console.log('Your age is less or equal to 18');
}else if(age >=18){
    console.log('Your age is greater or equal to 18');

}else{
    console.log('Sorry it\'s mine problem');
}


let payment = true;

// multiple conditions && , ||
if(isLoggedIn && payment){
        console.log('You are allowed to get access to the course');
}

if(20 === '20' || 108===108){
    console.log('anyone must be true');
}