console.log("Hare Krsna");


document.getElementById("btn")
.addEventListener("click", fetchData);


function fetchData(){
    
    // Instantiate the XMLHTTPRequest() constructor
    let xhr = new XMLHttpRequest();

    // OPEN the api open -> parameters(request type/method, url/filename,async:true/false, [optional] username,password )
    xhr.open("GET", "sample.txt",true);

    // console.log(xhr);
    console.log("READYSTATE : ",xhr.readyState);


    // this will fire at every readyState changes between (1,2,3,4)
    xhr.onreadystatechange = function(){
        console.log("READYSTATE : ",this.readyState);
    }

    //onprogress is fired when readyState == 3, it is mostly used for loaders
    xhr.onprogress = function(){
        console.log("Inside onprogress, READYSTATE : ",this.readyState);
        document.getElementById("result").innerText = "Loading";
        // i have set setTimeout() inside onload() so that this loading will appear
        
    }  


    //this will fire when the response recieved, readyState == 4
    xhr.onload = function(){

        console.log("Inside onload, READYSTATE : ",this.readyState);

        if(this.readyState == 4 && this.status == 200){

            let res = document.getElementById("result");
            setTimeout(()=>{

                res.innerText = this.responseText;
            },2000);


        }else if(this.status == 404){

            // this keyword is same pointing to xhr
            let res = document.getElementById("result");
            res.style.color = "red";
            res.innerHTML = xhr.responseText + " with status : "+this.status;
        }
    }

   // the onerror() will fire when network related error happens
    xhr.onerror = function(){
        console.log(this.onerror);
        // .. handle error
    }

    //finally send the request
    xhr.send();
    // console.log(xhr);
}

// HTTP STATUSES
// 200 -> "OK"
// 403 -> "Forbidden"
// 404 -> "Not Found"


// readyState Values
// Holds the status of the XMLHttpRequest.
// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready