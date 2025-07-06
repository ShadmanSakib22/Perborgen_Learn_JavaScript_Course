let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array
function randomMove() {
  let i = Math.floor(Math.random() * 3);

  return hands[i];
}

let value = randomMove();

console.log(value);
