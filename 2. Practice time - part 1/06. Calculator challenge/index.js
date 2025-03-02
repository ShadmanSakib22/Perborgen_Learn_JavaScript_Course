let num1 = 0;
let num2 = 0;

const num1Input = document.getElementById("num1-el");
const num2Input = document.getElementById("num2-el");

//Realtime Listeners
num1Input.addEventListener("input", () => {
  //console.log(+num1Input.value);
  num1 = +num1Input.value;
});
num2Input.addEventListener("input", () => {
  //console.log(+num2Input.value);
  num2 = +num2Input.value;
});

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

const add = () => {
  return num1 + num2;
};
const subtract = () => {
  return num1 - num2;
};
const divide = () => {
  return num1 / num2;
};
const multiply = () => {
  return num1 * num2;
};

const add_btn = document.getElementById("add-btn");
const sub_btn = document.getElementById("sub-btn");
const mul_btn = document.getElementById("mul-btn");
const div_btn = document.getElementById("div-btn");

calcResult = document.getElementById("sum-el");

add_btn.addEventListener("click", () => {
  calcResult.textContent = add();
});
sub_btn.addEventListener("click", () => {
  calcResult.textContent = subtract();
});
mul_btn.addEventListener("click", () => {
  calcResult.textContent = multiply();
});
div_btn.addEventListener("click", () => {
  calcResult.textContent = divide();
});
