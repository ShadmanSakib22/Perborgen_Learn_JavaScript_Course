let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  console.log(myLeads);
});

// 1. Create a variable, listItems, to hold all the HTML for the list items
let listItems = "";
// Assign it to an empty string to begin with
myLeads.forEach((e) => {
  // 2. Add the item to the listItems variable instead of the ulEl.innerHTML
  listItems += `<li> ${e} </li>`;
});
// 3. Render the listItems inside the unordered list using ulEl.innerHTML
ulEl.innerHTML = listItems;
