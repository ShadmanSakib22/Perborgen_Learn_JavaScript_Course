let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"];

// Use a for loop to log the array to the console:

// manual
for (let i = 0; i < largeCountries.length; i++) {
  console.log(largeCountries[i]);
}

// using for...in
for (const i in largeCountries) {
  console.log(largeCountries[i]);
}

// using for...of
for (const country of largeCountries) {
  console.log(country);
}

// using forEach
largeCountries.forEach((country) => {
  console.log(country);
});

// bonus: map
largeCountries.map((country) => {
  console.log(country);
});
