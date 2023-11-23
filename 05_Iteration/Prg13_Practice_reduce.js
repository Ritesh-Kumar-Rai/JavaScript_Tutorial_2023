// reduce() 

const cart = [
    {brand : 'SONY XPERIA Z1', price : 25000, quantity : 2},
    {brand : 'SAMSUNG S23 ULTRA', price : 118000, quantity : 3},
    {brand : 'REALME 9 PRO +', price : 24000, quantity : 2}
 ];
 
 // good but what if you have quantity property inside an object then using reduce() is good
 const Total_products = cart.length; // not a good practice for specific usage
         // or 
 
 const Total_items = cart.reduce((accumulator, item)=>{
         return accumulator + item.quantity;
 },0);        
 
 // console.log(Total_products);
 console.log('Total Items: ',Total_items);
 
 
 // const total_price = cart.reduce((accumulator, item)=>{
 //     console.log(`Accumulator: ${accumulator} and price: ${item.price}`);
 //         return accumulator + item.price;
 // },0);
 
 
 // calculate total price by adding quantity
 const total_price = cart.reduce((accumulator,item)=>{
     return accumulator + (item.price * item.quantity);
 },0);
 
 
 console.log(`Total Price : ${total_price}`);