// business logic
function add(number1Input, number2Input) {
  return number1Input + number2Input;
}

function subtract(number1Input, number2Input) {
  return number1Input - number2Input;
}

function multiply(number1Input, number2Input) {
  return number1Input * number2Input;
}

function divide(number1Input, number2Input) {
  return number1Input / number2Input;
}

function calculate() {
  if (operatorInput === "add") {
    result = add();
  } else if (operatorInput === "subtract") {
    result = subtract();
  } else if (operatorInput === "multiply") {
    result = multiply();
  } else if (operatorInput === "divide") {
    result = divide();
  }
  document.getElementById("output").innerText = result;
}

//user interface logic
function getFormInputs () {
  const number1Input = parseInt(document.getElementByID("input1").value);
  const number2Input = parseInt(document.getElementByID("input2").value);
  const operatorInput = document.querySelector("input[name='operator']:checked").value;
};



window.addEventListener("load", function() {
  let form = querySelector("form");

  window.addEventListener("submit", function(event) {
    event.preventDefault()
    form.addEventListener("submit", calculate) {
      form.addEventListener("submit", getFormInputs);
    };
    

  });
  


})

const finalResults = "The addition of your numbers equals " + addResults + ".\nThe subtraction of your numbers equals " + subResults + ".\nThe multiplication of your numbers equals " + multResults + ".\nThe division of your numbers equals " + divResults + "."

const finalResults2 = number1 + " + " + number2 + " = " + addResults + ", " + number1 + " - " + number2 + " = " + subResults + ", " + number1 + " * " + number2 + " = " + multResults + ", " + number1 + " / " + number2 + " = " + divResults;

window.alert(finalResults)

window.alert(finalResults2);

window.addEventListener("load", function(){

});

