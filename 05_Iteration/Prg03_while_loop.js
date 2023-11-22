// while loop

// unlike for loop we have many options for loop like while loop 

/* SYNTAX :
while (condition) {
    // ...some code 
}*/

// let num = 1;
// while(num <= 20){
//     console.log(`Value is ${num}`);
//     num = num+2;
// }


// while loop for array

let superheroes = ['G.ONE','KRRISH','SHAKTIMAAN','IRONMAN','THOR','SPIDERMAN'];
let index = 0;
while(index < superheroes.length){
        console.log(`value is ${superheroes[index]}`);
        index++; // incremented by 1 optional : index = index+1;
}