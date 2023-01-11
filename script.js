let currentOperand = document.getElementsByClassName("current-operand");
let previousOperand = document.getElementsByClassName("previous-operand");

let display = "";
let firstNumber = "";
let secondNumber = "";
let switchNumber = false;
let operator = "";
let statusOfCalculator = true;
currentOperand[0].innerHTML = display;
const numberButtons = document.getElementsByClassName("number");
const operateButtons = document.getElementsByClassName("operation");

Array.from(numberButtons).forEach((button) => {
  button.addEventListener("click", () => {
    if (display === "" && button.innerHTML == 0) {
    } else {
      if (switchNumber === false) {
        if (
          (firstNumber.includes(".") && button.innerHTML === ".") ||
          (button.innerHTML === "." && display === "")
        ) {
        } else {
          display += button.innerHTML;
          firstNumber += button.innerHTML;
          currentOperand[0].innerHTML = display;
        }
      } else {
        if (
          (secondNumber.includes(".") && button.innerHTML === ".") ||
          (button.innerHTML === "." && display === "")
        ) {
        } else {
          display += button.innerHTML;
          secondNumber += button.innerHTML;
          currentOperand[0].innerHTML = display;
        }
      }
    }
  });
});

Array.from(operateButtons).forEach((button) => {
  button.addEventListener("click", () => {
    switch (button.innerHTML) {
      case "+":
        if (statusOfCalculator === true) {
          display += " + ";
          currentOperand[0].innerHTML = display;
          switchNumber = true;
          operator = "+";
          statusOfCalculator = false;
        }
        break;
      case "/":
        if (statusOfCalculator === true) {
          display += " / ";
          currentOperand[0].innerHTML = display;
          switchNumber = true;
          operator = "/";
          statusOfCalculator = false;
        }
        break;
      case "-":
        if (statusOfCalculator === true) {
          display += " - ";
          currentOperand[0].innerHTML = display;
          switchNumber = true;
          operator = "-";
          statusOfCalculator = false;
        }
        break;
      case "*":
        if (statusOfCalculator === true) {
          display += " * ";
          currentOperand[0].innerHTML = display;
          switchNumber = true;
          operator = "*";
          statusOfCalculator = false;
        }
        break;
      case "C":
        display = "";
        firstNumber = "";
        secondNumber = "";
        switchNumber = false;
        operator = "";
        currentOperand[0].innerHTML = display;
        previousOperand[0].innerHTML = "";
        statusOfCalculator = true;
        break;
      case "=":
        if (firstNumber >= 1 && secondNumber >= 1) {
          let result = operate(
            Number(firstNumber),
            Number(secondNumber),
            operator
          );
          result = +result.toFixed(2);
          previousOperand[0].innerHTML = display;
          display = result;
          currentOperand[0].innerHTML = display;
          switchNumber = false;
          firstNumber = result;
          secondNumber = "";
          statusOfCalculator = true;
        } else if (operator === "/" && secondNumber === "0") {
          previousOperand[0].innerHTML = "";
          currentOperand[0].innerHTML = "Don't divide by zero.";
          statusOfCalculator = false;
        }
        break;
    }
  });
});

function operate(a, b, op) {
  if (op === "+") {
    return a + b;
  } else if (op === "-") {
    return a - b;
  } else if (op === "*") {
    return a * b;
  } else if (op === "/") {
    return a / b;
  }
}
