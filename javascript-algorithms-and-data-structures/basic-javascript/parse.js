// Parse int
function convertToInteger(str) {
  return parseInt(str);
}

convertToInteger("56");

// Parse int with a radix (binary)
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011");
