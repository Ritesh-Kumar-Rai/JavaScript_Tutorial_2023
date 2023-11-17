// this keyword : it work for current context 

// In object, the this keyword is used in function to refer the current object properties

// For example: 

const obj = {
    name : "Ritesh Kumar Rai",
    email : "Ritesh@google.com",
    getName : function (){
        console.log(`This is ${this.name}`); // get the name property of the current object
        console.log(this);
    }
};

obj.getName(); // o/p This is Ritesh Kumar Rai
obj.name = "Hanuman Ji";
obj.getName(); // Hanuman Ji

//Note : the this Keyword will not work with arrow function 


const obj2 = {
    name : "Hanuman Ji",
    email : "hanuman@krsna.com",
    getName : () => {
        console.log(`This is ${this.name}`);
        console.log(this); // {} empty object
    }
};

obj2.getName(); // undefined
//obj2.getName.bind(obj2)();// undefined

// this keyword in arrow function will inherit from outer scope which is window.object that's why we get undefined

console.log(this); // empty object




/*
The this keyword always refer the current context object depend on how it is used,
if you used this keyword inside an function() of the object then it will refer to the current object
else in arrow function or normal function outside the custom object it will refer the outer
scoped window.object{} 
*/