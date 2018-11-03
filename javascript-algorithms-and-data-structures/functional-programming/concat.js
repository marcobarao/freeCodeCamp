// Combine arrays using the concat method
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);

// Add elements to the end of array using concat instead push
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
