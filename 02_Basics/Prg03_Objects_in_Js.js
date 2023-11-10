// Object in JavaScript


/*  SYNTAX : 
                const object_name = {
                    property_name1 : values,
                    property_name2 : values,
                    ....
                };
*/ 
let myObject = {
    name : "Ritesh Kumar Rai",
    age : 22,
    email : "Ritesh@apple.com",
    location : "Vrindavan",
    "language known" : ['Hindi','English','Bhojpuri','Gujarati']
};

// access to object
console.log(myObject.name); // access by using (.) dot
console.log(myObject['email']); // access by using [] brackets
console.log(myObject["language known"]);// this is the only way to access the object key ""

// Now how can we assign a key in object as Symbol

const jawan_id = Symbol('JAWAN srk movie id');

const movies = {
    // jawan_id : 12, // no this is not a correct way 
    [jawan_id] : 12,
    name : 'JAWAN',
    cast : ['SRK','Nayanthara','Vijay Sethupathi','Priyamani'],
    ratings : 7.4,
    HDR : false ,
    "Doby Vision and Atmos" : false 
};

console.log(movies[jawan_id]);
console.log(typeof movies[jawan_id]);
console.log(movies);

// How to change values of the object

console.log(myObject);
myObject.email = "Ritesh@chatgpt.com";

console.log(myObject);


// How can prevent object values to be modified

Object.freeze(myObject); // this will Freeze the object means you never change it's values
myObject.name = 'Shahrukh Khan';
console.log(myObject);

// How to add function in object explicitly and you can declare functions inside implicitly

movies.play = function () {
    console.log('Watch Movie at NETFLIX');
}

console.log(movies.play);
console.log(movies.play());



// this keyword

movies.playtrailer = function() {
    console.log(`Watch ${this.name} trailer on YouTube`);
}

movies.playtrailer();

// this keyword is used in function of an object to prefer the properties of an object
 