// Reduce() is used to perform some operations on each values of array and return the result

// General use of reduce is to calculate sum of arrays like in cart you want to display total products 

/*SYNTAX :
        array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
},initial_value);

*/

const num = [1,2,3];

/*const sum = num.reduce(function(acc,curval){
        console.log(`Accumulator: ${acc} and CurrentValue: ${curval}`);
        return acc + curval;
},0);*/

const initial_value = 0;
const sum = num.reduce((acc,curval)=> acc+curval,initial_value);

console.log(sum);

