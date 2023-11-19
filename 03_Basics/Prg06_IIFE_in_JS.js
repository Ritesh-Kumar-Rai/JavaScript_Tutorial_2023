// Immediately Invoked Functions Expression (IIFE)

/* An IIFE is a way of creating a function that runs immediately without being stored in a variable 
or being called by another function.

-It is useful for creating a scope that is isolated from the global scope, 
meaning that any variables or functions declared inside the IIFE are not accessible 
outside of it.

-To create an IIFE, you need to wrap the function definition in parentheses, 
and then add another pair of parentheses at the end to invoke the function.

You can also return a value from an IIFE and assign it to a variable, 
as shown in the second example.
*/


// SYNTAX :  ()()
    // (function_definition)();call the function, terminator(;) is must if you have more than two IIFE

   // named IIFE 
   (function greet(){
    console.log("Hare Krsna");
})();

// Anonymous IIFE
(()=>{
    console.log('Hare Ram');
})();

// IIFE with parameters and arguments
(function(name){
    console.log(`Namaste ${name}`);
})('Ritesh Rai');



