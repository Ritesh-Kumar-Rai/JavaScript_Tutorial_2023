//TRUTHY and FALSY in JS

let user = [];

if(user){
    // if true
    console.log('Got the user');
}else{
    //if false
    console.log('Didn\'t get any user');
}

// Falsy values :
//  false, 0, -0, BigInt 0n, "",null, undefined, NaN

// Truthy values :
// "0", 'false', '-0', " ", {}, [], function(){}

//If empty array is true then how can we check if it is empty or not

if(user.length === 0){
    console.log('user array data is empty');
}

// how to check for object 
let myObj = {};

if(Object.keys(myObj).length === 0){
        console.log('Object is empty');
}

// General Understanding
/*
    false == 0 -> true
    false == '' -> true
    0 == '' -> true
*/
