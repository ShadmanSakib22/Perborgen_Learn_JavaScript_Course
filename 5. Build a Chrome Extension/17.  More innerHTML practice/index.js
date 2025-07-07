const container = document.getElementById("container");

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
container.innerHTML = "<button onclick='buy()'>Buy!</button>";

// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"

function buy() {
  container.innerHTML += "<p>Thank you for buying!</p>";
}
