const termType = document.getElementById('termType');
const termValue = document.getElementById('termValue');
const dependentInput = document.getElementById('dependentInput');

termType.addEventListener('change' , function(){
if (termType.value === 'years'){
    dependentInput.value = 6.5;
} else if (termType.value === 'month'){
    dependentInput.value = 8;
}


});


  document.addEventListener("DOMContentLoaded", function () {
    const clearLink = document.getElementById('clear');
    clearLink.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll("input[type='number']").forEach(input => {
        input.value = "";
      });
    });
  });
