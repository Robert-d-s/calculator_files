"use strict";
// retreive elements by their ID's and store them in variables
const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");
const resultList = document.querySelector("#results");
//fires event when the initial HTML document has been completley loaded and parsed
window.addEventListener("DOMContentLoaded", loadContent);
//event listeners on the buttons and fires the function when clicked
function loadContent() {
  calculateBtn.addEventListener("click", startCalculation);
  clearBtn.addEventListener("click", clearResults);
}
// retrive input values values and use the built in Number function to convert the values from strings to numbers
function startCalculation() {
  let firstNum = Number(document.querySelector("#firstnumber").value);
  let secondNum = Number(document.querySelector("#secondnumber").value);
  let operator = document.querySelector("#operator").value;
  let shouldRound = document.querySelector("#doround").checked;
  let decimalPlaces = Number(document.querySelector("#decimals").value);
  // perform calculations based on the selected operator and stores it in result
  let result = 0;
  switch (operator) {
    case "add":
      result = firstNum + secondNum;
      break;
    case "sub":
      result = firstNum - secondNum;
      break;
    case "mul":
      result = firstNum * secondNum;
      break;
    case "div":
      result = firstNum / secondNum;
      break;
  }
  // check if value is truthy, formats a number to a string and change value of result
  if (shouldRound) {
    result = result.toFixed(decimalPlaces);
  }
  //set value of input field to that of result and append it to the end of the list of results
  //set scroll position to 0 on the x-axis and 10000000 on the y-axis
  document.querySelector("#firstnumber").value = result;
  resultList.appendChild(createResultItem(result));
  resultList.scrollTo(0, 10000000);
}
// create the result li element to be used in the funtion above
function createResultItem(result) {
  const li = document.createElement("li");
  li.textContent = result;
  return li;
}
// clear the list of results but keep the latest result in the list and append it to the end of the list of results `resultList`
function clearResults() {
  const latestResult = resultList.lastChild.textContent;
  resultList.innerHTML = "";
  resultList.appendChild(createResultItem(latestResult));
}
