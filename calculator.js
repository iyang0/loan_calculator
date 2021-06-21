// So we only have to do this once, find these elements in DOM
const calcForm = document.getElementById("calc-form");

/** Retrieves current form values and returns {amount, years, rate}. */

function getFormValues() {
}

/** Calculate monthly payment and return. */

function calcMonthlyPayment(amount, years, rate) {
}

/** Get form values, calculate & update display. */

function getFormValuesAndDisplayResults() {
}

/** Set initial form values and show initial results. Called at app start. */

function setInitialValues() {
  // you can decide on some initial values
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
