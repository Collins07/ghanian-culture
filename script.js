let content = document.getElementById("content");

let button = document.getElementById("click-here");

button.onclick = function(){

    if(content.className ==="open"){
        content.className=" ";
        button.innerHTML = "Show More";

    } else{
        content.className="open";
        button.innerHTML = "Collapse form";
    }
};