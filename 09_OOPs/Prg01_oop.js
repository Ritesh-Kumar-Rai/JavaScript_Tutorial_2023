// 1. Object Literal
const user = {
    username : "Ritesh Rai",
    loginCount : 12,
    signIn : true,
    getUserInfo : function(){
        console.log(`Got user details from DataBase`);
       // console.log(`username : ${username}`); // error username not defined because the js finding the var in a local environment 
        console.log(`username : ${this.username}`);// this keyword denotes to this current Context which is an object

        console.log(this);
    }

};

// console.log(user.username);
// console.log(user.getUserInfo());
// console.log(this);


// 2. Constructor function
function User(username,loginCount,signIn){
    this.username = username;
    this.loginCount = loginCount;
    this.signIn = signIn;

    // we can add function also
    this.greeting = function(){
        console.log(`Hare Krsna : ${this.username}`);
    }


    // return this; by default this will return
}

const userOne = new User("Ritesh", 9,true);
const userTwo = new User("JavaScript React", 5, false);

console.log(userOne);
console.log(userOne.constructor); // [Function : User], reference of current context/function

console.log(userTwo);
/* Now if we don't use new keyword the userTwo will override the existing object of this keyword */

// new keyword will create a new Context[environment]

/* Steps of what happens when new keyword used 

1. Empty Object create {} [also called : instance]
2. Constructor function called
3. this keyword is inject to these constructor empty object
4. we get a result

*/

console.log(userOne instanceof User) // true
console.log(userTwo instanceof User) // true