let count = 0;
let countEl = document.querySelector("#count-el");
function increment() {
  count = count + 1;
  // set countEl's innerText to the count
  countEl.innerHTML = count;
}
