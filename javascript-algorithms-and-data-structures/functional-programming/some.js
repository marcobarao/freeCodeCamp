// Check if one element return true for a criteria
function checkPositive(arr) {
  return arr.some(item => item > 0);
}
checkPositive([1, 2, 3, -4, 5]);