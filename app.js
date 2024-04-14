// bootstrap validations//

(() => {
    'use strict' 
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
  })()



  document.addEventListener("DOMContentLoaded", function() {
    let annual_income = document.getElementById("annual_income");
    let extra_income = document.getElementById("extra_income");
    let age = document.getElementById("age");
    let deductions = document.getElementById("deductions");
   // let submit = document.getElementById("submit");
    let form = document.getElementById("form");
    let close = document.getElementById("close");
    let card = document.getElementById("card");
    let cardValue = document.getElementById("cardValue");
  

    let check = () => {
      let sum = parseFloat(annual_income.value) + parseFloat(extra_income.value) - parseFloat(deductions.value);
      if (sum >= 9) {
        if (age.value < 40 && age.value > 1) {
          return sum * (30 / 100);
        } 
        else if (age.value >= 40 && age.value < 60) {
          return sum * (40 / 100);
        }
         else {
          return sum * (10 / 100);
        }
      } 
      else {
        return 0;
      }
    };

   
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      if(form.checkValidity()){           // check form validity
      let value = check();
     // console.log(value);
      if(card){
        card.style.display="block";
        cardValue.innerText = value;
      }
    }
   });
    close.addEventListener("click",function(){
     // console.log("close");
     if(card){
      card.style.display="none";
     }
  });
  });
  


















