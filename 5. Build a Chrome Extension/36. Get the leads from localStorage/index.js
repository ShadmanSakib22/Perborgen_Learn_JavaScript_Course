let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

// Get the leads from the localStorage
// Store it in a variable, leadsFromLocalStorage
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// Log out the variable
console.log(leadsFromLocalStorage);

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();

  // To verify that it works:
  console.log(localStorage.getItem("myLeads"));
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `;
  }
  ulEl.innerHTML = listItems;
}
