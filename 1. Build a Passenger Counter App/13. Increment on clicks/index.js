// document.getElementById("count").innerText = 5

// let count = 5
// count = count + 1
// console.log(count)

// intialize the count as 0
let count = 0;
// listen for clicks on the increment button

document.querySelector("#increment-btn").addEventListener("click", increment);
// increment the count variable when the button is clicked (log it out)
const increment = () => {
  count = count + 1;
  console.log(count);
  document.querySelector("#count-el").innerHTML = count;
};
// change the count-el in the HTML to reflect the new count
