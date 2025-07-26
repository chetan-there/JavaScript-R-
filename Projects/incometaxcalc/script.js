function calculateTax() {
  var income = parseFloat(document.getElementById("income").value);
  var resultBox = document.getElementById("result");

  if (isNaN(income) || income <= 0) {
    resultBox.style.display = "block";
    resultBox.style.color = "red";
    resultBox.innerText = "⚠️ Please enter a valid income.";
    return;
  }

  // Old regime calculation
  let oldTax = 0;
  if (income > 250000 && income <= 500000) {
    oldTax = (income - 250000) * 0.05;
  } else if (income > 500000 && income <= 1000000) {
    oldTax = 250000 * 0.05 + (income - 500000) * 0.2;
  } else if (income > 1000000) {
    oldTax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
  }

  // New regime calculation with ₹75,000 standard deduction
  let newIncome = income - 75000;
  let newTax = 0;

  if (newIncome > 1500000) {
    newTax = (newIncome - 1500000) * 0.3 + 300000;
  } else if (newIncome > 1200000) {
    newTax = (newIncome - 1200000) * 0.2 + 210000;
  } else if (newIncome > 900000) {
    newTax = (newIncome - 900000) * 0.15 + 135000;
  } else if (newIncome > 600000) {
    newTax = (newIncome - 600000) * 0.10 + 75000;
  } else if (newIncome > 300000) {
    newTax = (newIncome - 300000) * 0.05;
  }

  resultBox.style.display = "block";
  resultBox.style.color = "#222";
  resultBox.innerHTML = `
    🧾 <strong>Old Regime Tax:</strong> ₹${oldTax.toFixed(2)} <br>
    🌐 <strong>New Regime Tax:</strong> ₹${newTax.toFixed(2)} <br>
    🏆 <strong>Recommended:</strong> ${oldTax > newTax ? "New Regime" : "Old Regime"}
  `;
}
