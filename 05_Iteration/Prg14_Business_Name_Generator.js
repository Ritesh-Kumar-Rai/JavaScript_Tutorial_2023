/*Generate a Business Name by using

Adjectives :
    Crazy
    Amazing
    Fire

Shop Name :
    Engine
    Food
    Garments
    
Another Word :
    Bros
    Limited
    Hub    
*/
/*
let adj = {

    adj1 : "Crazy",
    adj2 : "Amazing",
    adj3 : "Fire"
}

let shop = {

    shop1 : "Engine",
    shop2 : "Food",
    shop3 : "Garments"
};

let word = {

    word1 : "Bros",
    word2 : "Limited",
    word3 : "Hub"
};


console.log("Some Business Names :");
for(let key in adj){
    let w1 = adj[key];
    for(let key in shop){
        let w2 = shop[key];
        for(let key in word){
            console.log(w1 + " "+w2+" "+word[key]);
        }
    }
    console.log("");
} */


// or 

let adj = "",shop = "",word = "";

// for adjective
const r1 = Math.floor(Math.random() * 3);
if(r1 === 0){
    adj = "Crazy";
}else if(r1 === 1){
    adj = "Amazing";
}else{
    adj = "Fire";
}

// for shop name
const r2 = Math.floor(Math.random() * 3);

if(r2 === 0){
    shop = "Engine";
}else if(r2 === 1){
    shop = "Food";
}else{
    shop = "Garments";
}

// for word
const r3 = Math.floor(Math.random() * 3);

if(r3 === 0){
    word = "Bros";
}else if(r3 === 1){
    word = "Limited";
}else{
    word = "Hub";
}

console.log("Your Business Card Name : \n");
console.log(`${adj} ${shop} ${word}`)