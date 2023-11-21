// break keyword : it is used to stop the current execution of loop and and go outside of loop

 
for(let a = 0; a<=20; a++){
    if(a == 5){
        console.log(`5 detected we are stopped the loop and break it permanently`);
        break;
    }

    console.log('a is : '+a);
}

// continue keyword : it is used to skip the current execution of code in a loop and continue the iteration

for(let i = 0; i<=5; i++){
    if(i == 3){
        console.log('3 is detected we are skipped this one without stopping the loop');
        continue;
    }
    console.log(`i is : ${i}`);
}