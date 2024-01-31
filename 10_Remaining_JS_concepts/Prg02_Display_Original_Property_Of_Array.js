// Interview Question 1 : Display original properties of an array

// some property which is pre-added
Array.prototype.chant = "Hare Krsna";

// array with original properties
const arr = [1,2,3,4,5,6,7,8,9,10];

// normal loop method
/* for(let i in arr){
    console.log(i,arr[i]); 
    // here at last we got chant, "Hare Krsna" displayed which we don't know actually
} */


// best way to loop by ignoring other properties

for(let index in arr){

    if(arr.hasOwnProperty(index)){
        console.log(index, arr[index]);
    }
}