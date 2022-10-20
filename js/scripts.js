// business logic
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function calculate() {
  const number1Input = parseInt(document.getElementById("input1").value);
  const number2Input = parseInt(document.getElementById("input2").value);
  const operatorInput = document.querySelector("input[name='operator']:checked").value;

  let result;
  if (operatorInput === "add") {
    result = add(number1Input, number2Input);
  } else if (operatorInput === "subtract") {
    result = subtract(number1Input, number2Input);
  } else if (operatorInput === "multiply") {
    result = multiply(number1Input, number2Input);
  } else if (operatorInput === "divide") {
    result = divide(number1Input, number2Input);
  }
  return result;
}

//user interface logic

window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("output").innerText = "The answer is " + calculate();
  });
});