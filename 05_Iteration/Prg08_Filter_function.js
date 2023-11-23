// filter

/* Sometimes we required to perform operations in a array by using
loops and returns an values but forEach() loop doesn't return anything*/


// for example : 

const arr = [1,2,3,4,5,6,7,8,9,10];

// const newArr = arr.filter((num)=>{
//     return num > 5;
// });

// or 

// const newArr = arr.filter((num) => num > 5); both are same


// console.log(newArr);

// But is any jugad to do same while using forEach() loop

const newArr2 = [];

arr.forEach((num)=>{
        if(num > 4){
            newArr2.push(num);
        }
});

console.log(newArr2);