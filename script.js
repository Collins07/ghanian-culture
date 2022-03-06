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

  var year = document.getElementById("year");
  var month = document.getElementById("month");
  var day = document.getElementById("day");

  function b() {
    var dates = new Date(year.value, month.value, day.value);
    var days = dates.getDay();
  alert(days)


  }