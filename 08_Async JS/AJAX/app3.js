console.log("Hare Krsna!");

let requestUrl = "https://api.github.com/users";

document.getElementById("getUsers").addEventListener("click", loadUsers);

function loadUsers(){
    let xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl, true);

    xhr.onprogress = function(){
        document.getElementById("result").textContent = "loading...";
    }
    xhr.onload = function(){
        let output = "";

        if(this.status == 200){
            let res = JSON.parse(this.responseText);

            for(const key in res){
                output += `
                <div id="users">
                        <img src="${res[key].avatar_url}" alt="" height="50px" width="50px">
                        <ul>
                                <li>ID : ${res[key].id}</li>
                                <li>NAME : ${res[key].login}</li>
                                <li>GITHUB URL :${res[key].html_url}</li>
                          </ul></div>`; 
            }
            document.getElementById("result").innerHTML = output;
        }
    }

    xhr.send();
}
