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

(function () {
    var forms = document.querySelectorAll('.needs-validation')
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