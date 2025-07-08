let data = [
  {
    player: "Jane",
    score: 52,
  },
  {
    player: "Mark",
    score: 41,
  },
];

// Fetch the button from the DOM, store it in a variable
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via da
const player2Btn = document.getElementById("player1-btn");
player2Btn.addEventListener("click", () => {
  console.log(data[0].score);
});
