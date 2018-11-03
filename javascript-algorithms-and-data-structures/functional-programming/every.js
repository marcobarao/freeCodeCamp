// Check if every element return true for a criteria
function checkPositive(arr) {
  return arr.every(item => item > 0);
}
checkPositive([1, 2, 3, -4, 5]);
