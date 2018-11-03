// Combine an array into a string
function sentensify(str) {
  return str.split(/\W/).join(" ");
}
sentensify("May-the-force-be-with-you");
