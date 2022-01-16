const input = document.querySelector("#input");

const button = document.querySelector("#button");

const output = document.querySelector("#output");


function PassTheMessage(){
  
    if (input.value==""){
        output.textContent = "Plese Enter Something";
    }
    else{
    output.textContent = input.value;
    }

}

button.addEventListener("click", PassTheMessage);