// const descripter = Object.getOwnPropertyDescriptors(Math)
const descripter = Object.getOwnPropertyDescriptor(Math,"PI")


// console.log(descripter);
// console.log(Math.PI);
// Math.PI = 4; // we cannot change the value of Math.PI
// console.log(Math.PI);

// How can we create our own object and make it's property unchangable or control it's behaviour

const chant = {
    print : "Hare Krsna",
    round : 16,
    isDevot : true,
    encryptText : function(){
        console.log("some encryption alogorithm");
    }
};

// console.log(Object.getOwnPropertyDescriptor(chant,"print"));

// let's disable some property behaviour

Object.defineProperty(chant,"print",{
    writable : false, // disable value changing
    enumerable : false, // disable loop
})

chant.print = "Jay Shri Ram";// unchangable
console.log(chant.print);

for (const [key,value] of Object.entries(chant)) {
    if(typeof value !== "function"){
        console.log(`${key} : ${value}`);
    }
}

// We can't change Math.PI value because it is strongly checked/constant by compiler/c++ library
// Object.defineProperty(Math,"PI",{
//     writable : true
// })

// console.log(Math.PI)