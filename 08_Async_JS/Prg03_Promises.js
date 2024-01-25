// Promises in js
/*Promises in JavaScript are objects that represent the eventual outcome of an asynchronous operation.
 They can be either fulfilled (with a value) or rejected (with an error). 
 You can use promises to handle asynchronous code in a more readable and maintainable way, 
 by chaining callbacks and handling errors. 
 For example, you can use a promise to fetch data from a web server, 
 and then process the data once it is available.*/


 const promise = new Promise((resolve, reject)=>{

        // Do an async task : DB call, cryptography, network calls

            setTimeout(function(){
                console.log("Async task done.");
                resolve(); // when task done
            },1000);
 });

 promise.then(()=>{
    console.log("Promise consumed");
 });

// Promise 2

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async 2 task completed.");
        resolve();
    },1000);
}).then(()=>{
    console.log("Promise 2 consumed");
});

// Promise 3
const PromiseThree = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let user = {username : "Hanuman Ji", email : "hanumant@ram.com"};
            resolve(user);
        },1000);
});

PromiseThree.then((user)=>{
    console.log(user);
});


// Promise 4 with resolve/reject and .then().then().catch()

const promiseFour = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let error = false;

            (!error) ? resolve({username : "Ritesh Rai", email : "ritesh@gmail.com"}) : reject("ERROR -> Something went wrong!");
        },1000);
});

// assume i want username only then i use 2 then 
promiseFour.then((data)=>{
        console.log(data);
        return data.username;
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.error(error);
}).finally((f)=>{
    console.log("Our Promise is either Resolved or Rejected {Reference :"+f+" }");
});

console.log('Jay Shri Ram');


// Async Await in Promises
const PromiseFive = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            resolve({username : "JavaScript", email : "javascript@js.com"});
        }else{
            reject("ERROR => Something went wrong!");
        }
    },1000)
});


async function consumePromiseFive(){
    try {
        const response = await PromiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();


// async/await for fetch() api

async function getUserFromfetch(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getUserFromfetch();

// fetch() api
fetch("https://jsonplaceholder.typicode.com/todos/2")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log("2nd fetch response: ",data)
}).catch((error)=>{
    console.log("Error => ",error);
});