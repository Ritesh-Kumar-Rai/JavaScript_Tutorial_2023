// Higher Order Function

// forEach loop for array

/* SYNTAX :

    array.forEach(callback_function(parameter){
            ... some code  
    });

*/

const programming = ['JavaScript','Python','PHP','JAVA','.NET','C++'];

programming.forEach((item)=>{
        //console.log(item);
});


// the forEach() function only need an callback function which
// accepts arguments as parameters and print them, so you can defined your custom
// function like below 

function print(item){
//     console.log(item);
}

programming.forEach(print);// just pass reference don't call the function


// the forEach() is also has some parameters : item,index,arr

programming.forEach((item,index,arr)=>{
        // console.log(item,index,arr);
});

// what about we have array of objects : [{},{},{}]

const phones = [
        {
                brand : 'SONY',
                model : 'XZ ULTRA',
                price : 59000
        },
        {
                brand : 'SAMSUNG',
                model : 'S23 ULTRA 512gb',
                price : 118000
        },
        {
                brand : 'APPLE',
                model : 'IPHONE 14 pro MAX',
                price : 138789
        }
];

phones.forEach((item)=>{
        // console.log(item);
        // console.log(item.brand,item.model);
        // or 
        for (const key in item) {
                console.log(item[key]); // array for object
        }
});