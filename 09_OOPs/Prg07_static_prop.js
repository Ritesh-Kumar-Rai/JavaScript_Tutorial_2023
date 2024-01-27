// static property in OOP or js

/*The static keyword in JavaScript is used to define static methods or fields for a class. Static properties are not accessible on the instances of the class, but only on the class itself. */

class User{
    constructor(username){
        this.username = username;
    }
    
    static hiddenId(){
        return 121;
    }
}

// creating object of above class
const youtube = new User("youTube");
//console.log(youtube.hiddenId());// we cannot access static type method using object

console.log(User.hiddenId()); // but using classname we can access

class Company extends User{

    constructor(username, email){
        super(username);
        this.email = email;
    }

    logMe(){
        console.log("Username : "+this.username + " and email : "+this.email)
    }
}

const obj2 = new Company("Iphone", "iphone@apple.com")
obj2.logMe();
// console.log(obj2.hiddenId());// no we can't access parent's static method