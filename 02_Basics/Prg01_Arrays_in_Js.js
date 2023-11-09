// Array in Js
/*
    In array you can multiple values with different datatypes
    the array comes in reference datatype which means it support shallow copy(it shares address of original value not actual copy)
*/
const arr = [10,20,30,40,50,60]; 

const str_arr = ['Hanuman Ji','Krsna','Balram','Ram'];

console.log(arr[0]);
console.log(str_arr[0]);

console.log(typeof arr); // object datatype

// another way to create an array
const new_array = new Array(1,2,3,4,5,6,7,8,9,10);

console.log(new_array);

// array methods 

console.log(arr);

// 1. push() it adds new value to the last in array
    arr.push(90);
    arr.push(1);
    console.log(arr);

// 2. pop() it delete value from the last of the array 
    arr.pop();
    console.log(arr)    

// 3. unshift() it adds new value to the first in array 
    arr.unshift('Hare Krsna');
    arr.unshift(78.67); // adds value at the index 0
    console.log(arr);    // adds value at the index 0

// 4. shift() it removes value from the first of the array 
    arr.shift();
    console.log(arr);

// [Note : both unshift() or shift() can cause more cpu utilization because it shifts all values 
//         of array to store value at 0th index, what if values are in millions it will take more time and resource. so be aware]


// 5. includes() it finds whether a value available in array or not, it returns boolean 

    console.log(arr.includes(10)); // true

// 6. indexOf() it returns the index of the specified value if the value not exists in array then it will return -1    

    console.log(arr.indexOf(80))

// 7. join() 
/* The join() method in JavaScript is used to join all the elements of an array into a string. It returns a new string
   that contains all the elements of the array concatenated together,
   separated by a specified separator.
*/

const new_arr_into_str = arr.join();
console.log(new_arr_into_str)
console.log(typeof new_arr_into_str)

console.log('Original Array :',arr);

// 8. slice() & splice() 

// slice(start,end) does not affects/modify the original array
const marr = arr.slice(0,3);
console.log(marr); 

console.log('After using slice() :',arr);
// splice(start,end) on the otherhand affects/modify the original array 
const marr2 = arr.splice(0,3);
console.log(marr2);

console.log('at last after using splice() :',arr); // it removes the first 3 data