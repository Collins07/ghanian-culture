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

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()

  function b(){
    let date = document.getElementById("birthdya");
    let current = new Date(birthday.value);
    let days = current.getDay();
    alert (days)



  if(days===0){
    alert("your name is Kwasi")
  }

  else if(days===1){
    alert("your name is Kwadwo")
  }
  else if(days===2){
    alert("your name is Kwabena")
  }
  else if(days===3){
    alert("your name is Kwaku")
  }
  else if(days===4){
    alert("your name is Yaw")
  }
  else if(days===5){
    alert("your name is Kofi")
  }
  else {
    alert("your name is Kwame")
  }

  }