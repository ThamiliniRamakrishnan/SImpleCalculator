// let num1 = 8
// let num2 = 2
// document.getElementById("num1").textContent = num1
// document.getElementById("num2").textContent = num2

let result = document.getElementById("result");
let num1, num2;

function getNumbersFromInput() {
  num1 = parseFloat(document.getElementById("num1").value);
  num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please enter valid numbers";
    return false;
  }

  return true;
}

function addNumbers() {
  if (getNumbersFromInput()) {
    let output = num1 + num2;
    result.textContent = "Summation: " + output;
  }
}

function subtractNumbers() {
  if (getNumbersFromInput()) {
    let output = num1 - num2;
    result.textContent = "Subtraction: " + output;
  }
}

function multiplyNumbers() {
  if (getNumbersFromInput()) {
    let output = num1 * num2;
    result.textContent = "Multiplication: " + output;
  }
}

function divideNumbers() {
  if (getNumbersFromInput()) {
    let output = num1 / num2;
    result.textContent = "Division: " + output;
  }
}
