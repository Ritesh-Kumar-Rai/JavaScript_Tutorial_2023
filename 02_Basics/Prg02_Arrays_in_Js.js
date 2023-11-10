// Arrays 2 

// Now what about you want to add two arrays in one like second array to existing one

const Krsna_avatar = ['Ram','Narsimha','Vishnu','Varaha'];
const Shiva_avatar = ['Hanuman','Rudra','Bhairav'];

// Krsna_avatar.push(Shiva_avatar);

console.log(Krsna_avatar); // instead of merge the second array stored at the index of 4
console.log(Krsna_avatar[4]);

// another way to do this mergement

const all_Avatar = Krsna_avatar.concat(Shiva_avatar); // it returns another array copied array

// console.log(all_Avatar)

// another better option : ...spread operator
const all_new_Avatar = [...Krsna_avatar,...Shiva_avatar];
// console.log(Krsna_avatar,Shiva_avatar);
console.log(all_new_Avatar);

const lat_arr = [1.0,1.45,89,[17,18,19],100,[12,13,14,['Oops','Horse']]];

console.log(lat_arr);

const m_lat_arr = lat_arr.flat(2); // or flat('infinity')

console.log(m_lat_arr);


// other ones
console.log(Array.isArray('Ritesh Rai'));
console.log(Array.from('Ritesh Rai'));
console.log(Array.from({name : 'Ritesh Rai'})); // empty array because forcefully converting key: value into array can cause problem

const one = 108;
const two = 208;
const three = 308;

console.log(Array.of(one,two,three));