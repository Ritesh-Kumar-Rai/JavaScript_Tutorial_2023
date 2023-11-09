// Date Object

let myDate = new Date();

// Some readable formats
console.log(myDate.toDateString());
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());

console.log(typeof myDate)

// Some More methods
console.log('Some Date format methods : ');
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getFullYear());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getMonth());// month start from 0 as january
console.log(myDate.getTime());


// Get custom date and Time
console.log('My Custom date :')

let myCustomDate = new Date(2023,5,22); //  be asure that the month starts in date object from 0, 0 = jan
let myCustomDatetime = new Date(2023,5,22,7,5); // date with time (year,month,date,hour,minute)
let diffdate = new Date('06-22-2001');


console.log(myCustomDate.toString())
console.log(myCustomDatetime.toLocaleString());
console.log(diffdate.toString());

let extra_modified = myDate.toLocaleString('default',{
    month : 'long',
    weekday : 'long'
});
console.log(extra_modified)