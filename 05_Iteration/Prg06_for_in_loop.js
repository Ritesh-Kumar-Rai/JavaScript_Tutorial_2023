// for in loop : for Object

const Games = {
    game1 : 'Watchdogs',
    game2 : 'Watchdogs 2',
    game3 : 'GTA 5',
    game4 : 'FarCry 4',
    game5 : 'Just Cause 3',
    game6 : 'Just Cause 4',
    game7 : 'FarCry 5',
    game8 : 'Hitman 2017'
};

for (const key in Games) {
    console.log(key,' is ',Games[key]);
}

// is it work for an array : yes

const programming = ['JavaScript','Python','PHP','JAVA','.NET','C++'];

console.log();
for (const index in programming) {
    if(index == 0){
        console.log('Programming Languages :');
    }
    console.log(programming[index])
}

// it will won't work for map