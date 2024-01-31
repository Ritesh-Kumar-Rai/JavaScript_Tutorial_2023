// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let arr = [10,20,30,40,50];

Array.prototype.chant = "Hare Krsna";

Array.prototype.harEk = function(func){
        
        for(let i=0; i < this.length; i++){
            func(this[i], i, this)
        }
}

arr.harEk((element,index,array)=>{
    console.log(`array[${index}] : ${element} = full array ${array}`);
})


// advanced one with some checksums

Array.prototype.harEk2 = function(callback, this_context){
        
        if(typeof callback !== "function"){
            throw "first parameter required a function!";
        }
        
        const length = this.length;
        
        let i = 0;
        while(i < length){
            
            if(this.hasOwnProperty(i)){
                callback.call(this_context, this[i], i, this);
                
            }
            // console.log(i,this[i])
            i++;
        }
}


arr.harEk2((e,i,array)=>{
    console.log(e,i,array)
});