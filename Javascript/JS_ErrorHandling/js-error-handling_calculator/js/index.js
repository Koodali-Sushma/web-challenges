console.clear();

const form = document.querySelector("form");
const output = form.querySelector("output");
const error_ptag = document.querySelector("p");

const operations = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      console.log("Invalid input.....");
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  },
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  error_ptag.textContent = "";
  output.innerText = "";
  const firstNumber = Number(event.target.firstNumber.value);
  const secondNumber = Number(event.target.secondNumber.value);
  const operation = event.target.operation.value;
  try {
    output.innerText = operations[operation](firstNumber, secondNumber);
    console.log("Valid input.....");
  } catch (error) {
    error_ptag.textContent = error;
  }
});
