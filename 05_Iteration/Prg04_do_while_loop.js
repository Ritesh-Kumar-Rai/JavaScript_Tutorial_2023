// do..while loop

// sometimes you want to iterate the loop one time atleast before checking conditions
// for these kind of special reason we use do..while loop

/*
SYNTAX :
    do{
        //  ...some code   
    }while(condition);
*/

let score = 11;

do {
    console.log(`Scored at ${score}`);
    score++;
} while (score <= 10);