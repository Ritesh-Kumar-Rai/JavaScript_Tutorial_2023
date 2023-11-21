// for loop

/*
SYNTAX : 
    for (initialization; condition; increment/decrement) {
        // code block to be executed
    }

*/


for(let i = 0; i<=100; i++){
    console.log(i);
}


array = [10,2.0,20,60,70];

for (let index = 0; index < array.length; index++) {
    let element = array[index];
    console.log(element);
}

//console.log(element); // you can't access element variable because it is out of scope

// we can also use conditional statements inside an looping statements

for(let i = 0; i<5;i++){
    
    if(i == 2){
        console.log('2 is gotcha');
    }
    
    console.log(i);
}

// Nested Loop

/*for(let i = 0; i<=10; i++){
    console.log(`Outer loop : ${i}`);
    for(let j = 0; j<=10; j++){
        console.log(`Inner Loop ${i} and ${j}`);
    }
}*/

// let's create a table 1 to 10

for(let i = 1; i<=10; i++){
    console.log('Table for : '+i);
    for(let j = 1; j<=10; j++){
        console.log(`${i} X ${j} = ${i*j}`);
    }
    console.log();
}

// loop for array
let superheroes = ['G.ONE','KRRISH','SHAKTIMAAN'];

for(let index = 0; index < superheroes.length; index++){
        console.log(superheroes[index]);
}
