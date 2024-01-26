// let myName = "Ritesh     "
// let myMantra = "HareKrsna     "

// console.log(myName); // 11
// console.log(myName.trueLength); 

// adding custom property_method instead of using myName.trim().length; 


let myHeros = ["G.ONE", "Hanuman"]


let heroPower = {
    G_one: "Electro Ball",
    Hanuman: "gadda + infinite",

    getHanumanPower: function(){
        console.log(`Hanuman ji power is ${this.Hanuman}`);
    }
}

Object.prototype.ritesh = function(){
    console.log(`ritesh is present in all objects`);
}

heroPower.ritesh()
myHeros.ritesh()

// Now you see, if we add any property/method to parent Object then all the array, functions, string and Object itself will get those property/method because all are inherited from Object like null -> Object -> Array/Function/String ...

// But what happen when we add a property/method to only on Array, in addition to this other functions, objects, string will also get that property/method or not :

Array.prototype.chant = function(){
    console.log("Hare Krsna");
}

myHeros.chant(); // wow ! array got
// heroPower.chant(); no function does not get this feature


// INHERITANCE in prototype

const user = {
    name : "Jay Shri Ram",
    domain : "coding"
};

const school = {
    isOpen : true,
    fees : 25000 +" Rupees"
};

const Teacher = {
    isAvailable : false,
    iCard : 1235,

    // to inherit from parent object use
    __proto__ : school
};

school.__proto__ = user;

// Modern syntax :
Object.setPrototypeOf(school,user);