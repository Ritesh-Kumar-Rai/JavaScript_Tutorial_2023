console.log('Hare Krsna');

// Singleton Object
//const obj = new Object(); // any object created by new Object() constructor are called singleton object

// Non-Singleton Object
const obj = {};

obj.name = "Ritesh Kumar Rai";
obj.github = "Ritesh-Kumar-Rai";
obj.profession = "JS Developer";

console.log(obj);

// Nested Objects
const nested_obj = {
    naam: {
        pura_naam: {
            "pehla naam": 'Ritesh',
            "dusra naam": 'Rai'
        }
    }
};


// Object Chaining
console.log(nested_obj);
console.log(nested_obj.naam);
console.log(nested_obj.naam.pura_naam);
console.log(nested_obj.naam.pura_naam["pehla naam"]);

/*[Object chaining refers to the technique of accessing nested properties of 
    an object using the dot notation (object_name.property_name) or 
    square brackets(object_name['property_name']).
]*/

// Optional Chaining 
console.log(nested_obj?.naam?.pura_naam?.["dusra naam"]);


/*[Optional chaining is a new feature introduced in ECMAScript 2020 that allows you
    to safely access nested properties of an object without worrying about whether 
    intermediate properties exist or not.
    It uses the question mark(?) to indicate optional properties.]*/


// How to Merge Two objects together

// if you try this 
const obj2 = {1 : 'a', 2 : 'b'};

// const obj3 = {obj,obj2};  bad way

        //    or 

// 1.using spread operator
// const obj3 = {...obj, ...obj2};


// 2. Object.assign(target,sources)

const obj3 = Object.assign({},obj,obj2); // target is {} object and Sources is the actual obj
console.log(obj3);

// Object loop through

// assume you have an array of objects or object and you want to access it through loop 

const array_of_objects = [
    {id : 10, email : 'R@yahoo.com'},
    {id : 11, email : 'I@yahoo.com'},
    {id : 12, email : 'T@yahoo.com'}
];

console.log(array_of_objects[0].email);


// loop method
console.log(Object.keys(array_of_objects)); // to access object keys

console.log(Object.values(obj)); // to access 

console.log(Object.entries(array_of_objects));




// When we loop through an object somehow when the property does not exists it caused an error or code crash
// to prevent this we have one method

// object.hasOwnProperty()

console.log(obj.hasOwnProperty('name'));  // true