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

  if (operatorInput === "add") {
    result = add(number1Input, number2Input);
  } else if (operatorInput === "subtract") {
    result = subtract(number1Input, number2Input);
  } else if (operatorInput === "multiply") {
    result = multiply(number1Input, number2Input);
  } else if (operatorInput === "divide") {
    result = divide(number1Input, number2Input);
  }
  document.getElementById("output").innerText = "The answer is " + result;
}

//user interface logic

window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
  });

  // form.addEventListener("submit", getFormInputs);

  form.addEventListener("submit", calculate);

    // event.preventDefault()
    // form.addEventListener("submit", getFormInputs);
    // form.addEventListener("submit", calculate);
    
  });


// Separating calculation and obtaining the form inputs, using arrays

  // function calculate(array) {
  //   if (array[2] === "add") {
  //     result = add(array[0], array[1]);
  //   } else if (array[2] === "subtract") {
  //     result = subtract(array[0], array[1]);
  //   } else if (array[2] === "multiply") {
  //     result = multiply(array[0], array[1]);
  //   } else if (array[2] === "divide") {
  //     result = divide(array[0], array[1]);
  //   }
  //   document.getElementById("output").innerText = "The answer is " + result;
  // }
  
  // function getFormInputs() {
  //   const number1Input = parseInt(document.getElementByID("input1").value);
  //   const number2Input = parseInt(document.getElementByID("input2").value);
  //   const operatorInput = document.querySelector("input[name='operator']:checked").value;
  
  //   return [number1Input,number2Input,operatorInput];
  // };

  // Then can run calculate(getFormInputs())
  
