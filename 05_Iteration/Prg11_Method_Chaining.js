// Method Chaining

/*Method chaining is a technique that allows you to call multiple methods 
on the same object or value in a single statement. 
For example, 
    array.map().map().filter() means that you apply the first map method 
    to the array, then apply the second map method to the result of the 
    first one, and then apply the filter method to the result of the 
    second one. The final result is a new array that contains the filtered 
    and mapped values.*/

    const arr = [1,2,3,4,5,6,7,8,9,10];    

    // first add 1 to array then multiply by 10 at the last fetch those values which are greater tha 40 using method chaining
    
    const modified_one = arr.map((num) => num+1)
                            .map((num)=> num*10)
                            .filter((num)=> num>40);
    
    console.log(modified_one);