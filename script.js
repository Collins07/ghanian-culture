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
    let date = document.getElementById("birthday");
    let current = new Date(birthday.value);
    let days = current.getDay();
    // alert (days)

    const males = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    const females = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ame"];

    let gender = document.getElementById("gender");
    let gender1 = document.getElementById("gender1");
    let both = (gender.checked, gender1.checked);
    // alert(both);



  if(days===0 && both===false){
    alert("your name is Kwasi because you were born on Sunday")
  }
  else if(days===0 && both===true){
    alert("your name is Akosua because you were born on Sunday")
  }

  else if(days===1 && both===false){
    alert("your name is Kwadwo because you were born on Monday")
  }
  else if(days===1 && both===true){
    alert("your name is Adwoa because you were born on Monday")
  }
  else if(days===2 && both===false){
    alert("your name is Kwabena because you were born on Tuesday")
  }
  else if(days===2 && both===true){
    alert("your name is Abenaa because you were born on Tuesday")
  }
  else if(days===3 && both===false){
    alert("your name is Kwaku because you were born on Wednesday")
  }
  else if(days===3 && both===true){
    alert("your name is Akua because you were born on Wednesday")
  }
  else if(days===4 && both===false){
    alert("your name is Yaw because you were born on Thursday")
  }
  else if(days===4 && both===true){
    alert("your name is Yaa because you were born on Thursday")
  }
  else if(days===5 && both===false){
    alert("your name is Kofi because you were born on Friday")
  }
  else if(days===5 && both===true){
    alert("your name is Afua because you were born on Friday")
  }
  else if(days===6 && both===false){
    alert("your name is Kwame because you were born on Saturday")
  }
  else if(days===6 && both===true){
    alert("your name is Ame because you were born on Saturday")
  }
  else {
    alert("Enter valid details")
  }

  }