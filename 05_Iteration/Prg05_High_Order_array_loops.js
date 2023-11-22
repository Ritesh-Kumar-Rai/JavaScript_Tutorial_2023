// for of loop : used for string, array, map, sets

// ['','',''];
// [{},{},{}]

let arr = [10,20,30,40,50,60,70,80,90,100];

for (const num of arr) {
    //console.log(`value is ${num}`);
}

let string = "Hare Krsna!";

for (const word of string) {
    if(word === ' '){
        continue;
    }
    // console.log(`word is ${word}`);
}

// Maps 

const map1 = new Map();

map1.set('IN','Bharat');
map1.set('USA','United States of America');
map1.set('FR','FRANCE');

for (const [key,value] of map1) {
    console.log(key,':-',value);
}

// is for of works in object : no