let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard + 4;
let hasBlackJack = false;
let isAlive = true;
// 1. Declare a variable called message and assign its value to an empty string
let msg = "";

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
  msg = "Do you want to draw a new card? 🙂";
} else if (sum === 21) {
  msg = "Wohoo! You've got Blackjack! 🥳";
  hasBlackJack = true;
} else {
  msg = "You're out of the game! 😭";
  isAlive = false;
}

// 3. Log it out!
console.log(msg);
