// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.querySelector("#welcome-el");

// Create two variables (name & greeting) that contains your name
let fullName = "Shadman Sakib";

// and the greeting we want to render on the page
let greeting = "Welcome to the team";

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = `${greeting}, ${fullName}`;
