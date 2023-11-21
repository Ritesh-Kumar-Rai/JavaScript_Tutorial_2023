// Nullish Coalescing Operator (??) : null, undefined

/* The nullish coalescing operator (??) is a logical operator that 
    returns its right-hand side operand when its left-hand side operand 
    is null or undefined, and otherwise returns its left-hand side operand. 
    It is a way to handle missing or undefined values without using the 
    logical OR (||) operator, which can have unintended consequences 
    when dealing with falsy values. */


// SYNTAX : leftExpr ?? rightExpr

let val1;
// val1 = 16 ?? 108;
// val1 = null ?? 10;
// val1 = undefined ?? true;
val1 = null ?? undefined ?? [1,2,3,4,5]

console.log(val1);

// Ternary Operator (?) :

// SYNTAX : condition ? true : false;

let age = 20;

age >= 18 ? console.log("Age is Greater than 18") : console.log('Age is smaller than 18');
