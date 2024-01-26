function multiplyBy5(num){
    // console.log(num+multiplyBy5.power);
    return num*5;
}

multiplyBy5.power = 2;

// console.log(multiplyBy5(5));
// console.log(multiplyBy5.power);
// console.log(multiplyBy5.prototype);

function createProduct(name,price){
    this.name = name;
    this.price  = price;
}

// How to add extra property method to this function
createProduct.prototype.increment = function(){
    this.price++;
}

createProduct.prototype.printMe = function(){
    console.log(`The product is ${this.name} and price is ${this.price}`);
}

// To access the injected property and method u need to use new keyword while calling function
const user1 = new createProduct("chai",25);
const user2 = new createProduct("Samosa", 30);

// To access property method
// 1. way 
    // user1.prototype.printMe(); but don't use this because the js will do it for you behind the scene 

// 2. way
    // user1.increment();
    user1.printMe();   
    user2.printMe();

/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/    