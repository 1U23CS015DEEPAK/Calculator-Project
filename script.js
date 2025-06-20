let expression = "";

function press(value) {
  expression += value;
  document.getElementById("display").value = expression;
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").value = "";
}

function calculate() {
  let result = Function('"use strict";return (' + expression + ')')();
  document.getElementById("display").value = result;
  expression = result.toString();
}