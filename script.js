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



document.getElementById("button").addEventListener("click", function () {

  const amount = parseFloat(document.getElementById("amount1").value);
  const termValue = parseFloat(document.getElementById("termValue").value);
  const termType = document.getElementById("termType").value;
  const interestRate = parseFloat(document.getElementById("dependentInput").value);
  const type = document.querySelector("input[name='check']:checked")?.value;

  if (isNaN(amount) || isNaN(termValue) || isNaN(interestRate) || !type) {
    alert("complet all the field");
    return;
  }

  const totalMonths = termType === "years" ? termValue * 12 : termValue;

  const monthlyRate = interestRate / 100 / 12;

  let result = 0;

  if (type === "repayement") {
    result = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));
  } else if (type === "interest only") {
    result = amount * monthlyRate;
  }

  document.getElementById("p-1").textContent = `Monthly repayment: ${result.toFixed(2)}`;
});