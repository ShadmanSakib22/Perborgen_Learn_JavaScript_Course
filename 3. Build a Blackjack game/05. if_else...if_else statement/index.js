// Check if the person is elegible for a birthday card from the King! (100)

let age = 100;

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"

if (age < 100) {
  console.log("Not elegible");
} else if (age === 100) {
  console.log("Here is your birthday card from the King!");
} else console.log("Not elegible, you have already gotten one");

/*
//Conditional Branch: 
// let msg = (condition) ? "true" : "false" [if-else]
// let msg = (condition) ? "true" : (condition) ? "true" : "false" [if- else if -else]

let msg = (age < 100) ? console.log("Not elegible") : 
    (age === 100) ? console.log("Here is your birthday card from the King!") : 
    console.log("Not elegible, you have already gotten one");

*/
