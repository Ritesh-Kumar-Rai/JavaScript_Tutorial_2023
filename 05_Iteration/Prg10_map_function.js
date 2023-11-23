// map() in js

/*filter() used to return those values which are satifies the condition
wheareas in otherhand map() used to modify the data and returns the 
new modified data.*/

const arr = [1,2,3,4,5,6,7,8,9,10];

// add 10 to each value of the array

const newone = arr.map((num)=>{
        return num+10;
});

console.log(newone);

// Both filter,map does not modified original array 
