let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

let increment = () => {
  count += 1;
  countEl.textContent = count;
};

let save = () => {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  resetCount();
};

let resetCount = () => {
  count = 0;
  countEl.textContent = count;
};
