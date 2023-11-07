let arr = ['shaktimaan','hanuman','krrish','g.one'];

console.log(typeof arr); // object datatype because the data stored in array as key:value pair

let myfunc = function(){};

console.log(typeof myfunc);

let obj = {
    name : 'Shaktimaan',
    age : 5001,
    power : 679098888n, // BigInt
    isAlive : true,
    skills : ()=>{
        console.log('Many as you can\'t think of');
    }// property-method

};

console.log(typeof obj)   





// Stack Heap Memory 🚀🧠


/*
1. **Stack**:
   - Stores **primitive data types** directly.
   - These include numbers, booleans, strings, and other simple values.
   - Provides a **copy** of the actual data.
   - When you assign one primitive variable to another, it duplicates the value.
   - Each function call creates a new stack frame, and local variables reside here.
   - The stack operates in a **LIFO (last in, first out)** manner.

2. **Heap**:
   - Stores **non-primitive data types** (also known as reference types).
   - These include objects, arrays, functions, and other complex structures.
   - Provides a **reference** (memory address) to the actual data.
   - When you assign an object or array to another variable, it points to the same data in the heap.
   - Objects in the heap can reference each other (e.g., an object containing an array).
   - Garbage collection automatically cleans up unused objects.

3. **Copying Behavior**:
   - When you copy a primitive value 
   (e.g., let a = 42; 
   let b = a;
   ), it's a true copy.
   
   - When you copy an object 
   (e.g., 
    let obj1 = { name: "Alice" }; 
    let obj2 = obj1; 
    ), you're actually copying the reference (address) to the same object in the heap.

In summary:
- Stack: Simple, efficient, and manages function calls and local variables.
- Heap: Dynamic, handles complex data structures, and allows objects to reference each other.

*/


// Stack example :

let name = 'Ritesh Kumar Rai';
let name2 = name;

console.log(name,' ',name2);

name2 = 'Hanuman Ji'; // name2 changed

console.log(name, ' ', name2); // name was remained as it is (modification not reflected)



// Heap example : 

let num = [10,20,30,40,50];
let num2 = num;

console.log(num,num2);

num2.pop(); // one value deleted from num2 but it reflects to num because both sharing same address 

console.log(num,num2);