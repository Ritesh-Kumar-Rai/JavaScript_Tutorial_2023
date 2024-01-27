// Inheritance in js

class User{

    constructor(username){
        this.username = username;
       
    }

    logMe(){
        console.log(`New Username : ${this.username}`);
    }
}

class Gamer extends User{

    constructor(username,email, password){
        super(username);// will go to the parent constructor and set this username 
        this.email = email;
        this.password = password;
    }

    playing(){
        console.log(`${this.username} is playing JUST CAUSE 4 game`);
    }
}

// instantiating an object 
const goGmaer =  new Gamer("goGamer", "go_gamaer@epic.com", "goGta");

goGmaer.playing();
goGmaer.logMe(); // child class has access to it's parent property and method because it inherited from it's parent class

// 2nd object of parent class
const xyzGamer = new User("exyGamer");

xyzGamer.logMe();
//xyzGamer.playing();// parent class object will not access it's inherited child property and method


console.log(goGmaer === xyzGamer);// false, because both is in diff memory 

console.log(goGmaer === Gamer); // true, no instead use instanceof
console.log(goGmaer instanceof Gamer);// true or
console.log(goGmaer instanceof User);// true