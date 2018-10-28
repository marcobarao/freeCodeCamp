// Random
function randomFraction() {
  return Math.random();
}

// Generate random whole number
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}

// Generate random whole number whitin range
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
