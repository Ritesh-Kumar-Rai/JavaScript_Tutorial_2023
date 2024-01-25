console.log("Hare Krsna!");

document.getElementById("getFirstUser").addEventListener("click", getFirstUser);
document.getElementById("getUsers").addEventListener("click", getAllUsers);

function getFirstUser(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET', "sample2.json",true);


    xhr.onload = function(){
        if(this.readyState == 4 && this.status == 200){
            let res = JSON.parse(this.responseText);
            let output = `
            <ul>
                <li>ID : ${res[0].id}</li>
                <li>NAME : ${res[0].name}</li>
                <li>EMAIL : ${res[0].email}</li>
            </ul>`;

            document.getElementById("result").innerHTML = output;

        }else if(this.status == 404){
            document.getElementById("result").innerHTML = `ERROR : ${this.status} FILE NOT FOUND `;
        }
    }

    xhr.send(); // sending request
}


function getAllUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', "sample2.json", true);

    xhr.onload = function(){
        let output = "";
        let result = JSON.parse(this.responseText);

        for (const key in result) {
                output += `
                <ul>
                <li>ID : ${result[key].id}</li>
                <li>NAME : ${result[key].name}</li>
                <li>EMAIL : ${result[key].email}</li>
                </ul>`;    
            }
            document.getElementById("result").innerHTML = output;
        }

    xhr.send();// sending request
        
}
