function insertUsername(username){
    // store in db
    this.username = username; // this keyword refering parent function not this function
    console.log("called");
}

function createUser(username,email,password){
    insertUsername.call(this,username); // pass current context to 2nd function
    this.email = email;
    this.password = password;
}

const iskcon = new createUser("HareKrsna", "harekrsna@iskcon.com", 123);

console.log(iskcon);


// In short, .call() method used to pass current execution context to 2nd function so that the 2nd function will use the context of 1st function instead 





/*In JavaScript, the `this` keyword refers to the object that the current function or method is operating on. However, in this code, the `this` keyword inside the `createUser` function does not refer to the global scope, but to the newly created object `iskcon` . 

The problem with this code is that the `insertUsername` function is not bound to the `iskcon` object, so the `this` keyword inside it does not refer to `iskcon`. Instead, it refers to the global object, which is `window` in a browser environment. Therefore, when you call `insertUsername` inside `createUser`, the `this.username` assignment actually creates a new global variable called `username` instead of setting the `username` property of `iskcon`.*/

/* 1 way
In JavaScript, the call() method is a predefined function that can be used to invoke (call) a function with an owner object as an argument (parameter) . The call() method allows an object to use a method belonging to another object

The call() method can also accept arguments, which are passed as additional parameters after the first argument (the owner object)*/






/* 2 way
To fix this issue, you can use the `bind` method to bind the `insertUsername` function to the `iskcon` object ¹. Here's how you can modify your code:

```javascript
function insertUsername(username){
    // store in db
    this.username = username;
    console.log("called");
}

function createUser(username,email,password){
    insertUsername.bind(this)(username);
    this.email = email;
    this.password = password;
}

const iskcon = new createUser("HareKrsna", "harekrsna@iskcon.com", 123);

console.log(iskcon);
```

By calling `insertUsername.bind(this)(username)`, you are creating a new function that has the `this` keyword bound to the `iskcon` object, and then calling that function with the `username` argument ¹. This way, the `this.username` assignment inside `insertUsername` will correctly set the `username` property of `iskcon` ¹. */

