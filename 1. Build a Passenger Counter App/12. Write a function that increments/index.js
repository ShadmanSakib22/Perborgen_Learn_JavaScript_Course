let lapsCompleted = 0;

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function increment(x) {
  return ++x;
}

lapsCompleted = increment(lapsCompleted);
lapsCompleted = increment(lapsCompleted);
lapsCompleted = increment(lapsCompleted);

console.log(lapsCompleted);
