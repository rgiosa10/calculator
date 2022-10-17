// business logic
function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  return number1 / number2;
}

//user interface logic
const number1 = parseInt(prompt("Enter a number:"));
const number2 = parseInt(prompt("Enter another number:"));

const addResults = add(number1,number2)
const subResults = subtract(number1,number2)
const multResults = multiply(number1,number2)
const divResults = divide(number1,number2)

const finalResults = "The addition of your numbers equals " + addResults + ".\nThe subtraction of your numbers equals " + subResults + ".\nThe multiplication of your numbers equals " + multResults + ".\nThe division of your numbers equals " + divResults + "."

window.alert(finalResults)


