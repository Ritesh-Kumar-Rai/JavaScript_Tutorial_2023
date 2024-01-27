
// Class

/*class User{

    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        const encrypt = Math.floor(Math.random() * 100);
        console.log(`Encrypted password is ${this.password + encrypt}`);
    }

    capitalizeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

// instantiate a object of above class
const vagri = new User("vagri", "vagri@gmail.com", "vagris");

// console.log(vagri);

vagri.encryptPassword();
console.log(vagri.capitalizeUsername());
*/


// Behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    const encrypt = Math.floor(Math.random() * 100);
    console.log(`Encrypted password is ${this.password + encrypt}`);
}

User.prototype.capitalizeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const Tapori = new User('tapori', "tapori420@chor.com", "topper");

// console.log(Tapori);
Tapori.encryptPassword();
console.log(Tapori.capitalizeUsername());