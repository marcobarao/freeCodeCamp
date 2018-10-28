// Conditional ternary
function checkEqual(a, b) {
  return a === b ? true : false;
}

checkEqual(1, 2);

// Multiple conditional ternary
function checkSign(num) {
  return num > 0 ? "positive" : num === 0 ? "zero" : "negative";
}

checkSign(10);
