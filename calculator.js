// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");
let principle;
let interest;
let loanYears;

/** Retrieves current form values and returns {amount, years, rate}. */

function getFormValues() {
	principle = Number(document.getElementById("loan-amount").value);
	interest = Number(document.getElementById("loan-rate").value);
	loanYears = Number(document.getElementById("loan-years").value);
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
	// console.log(amount, rate);
  let monthlyInterest = rate / 12;
  let loanMonths = years * 12;
  let divisor =  1 - Math.pow( (1 + monthlyInterest), -loanMonths)
  let numerator = (amount * monthlyInterest); 
  let monthlyPayment =  numerator / divisor;
  return Number(monthlyPayment.toFixed(2));
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
	getFormValues();
	let monthlyPayment = calcMonthlyPayment(principle, loanYears, interest);
	document.getElementById("calc-monthly-payment").innerHTML = monthlyPayment;
}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // you can decide on some initial values
  principle = 120;
  interest = .1;
  loanYears = 1;
  document.getElementById("loan-amount").value = principle;
  document.getElementById("loan-rate").value = interest;
  document.getElementById("loan-years").value = loanYears;
  
}

/** Start: set form defaults & display; attach form submit event listener. */

function start() {
  // so we can test the calcMonthlyPayment independently of all the
  // HTML, only do the rest if this is run on a page with the form
  if (!calcForm) return;

  setInitialValues();
  
  calcForm.addEventListener("submit", function (evt) {
    evt.preventDefault();
    getFormValuesAndDisplayResults();
  });
}

window.addEventListener('DOMContentLoaded', start);



/** TO-DO
 * 1. Error handling on forms if there if input is NaN
 * 2. Error for handling interest rate of 0 
 * 3. Error for handling negative numbers 
 * 4. Add test for edge cases
*/