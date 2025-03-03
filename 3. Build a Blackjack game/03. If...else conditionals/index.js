let firstCard = 6;
let secondCard = 9;
let sum = firstCard + secondCard;

if (sum === 21) {
  console.log("Congratulations, You Win!");
} else if (sum < 21) {
  console.log(`You hold ${sum}, Draw another card?`);
} else {
  console.log("You lost!");
}
