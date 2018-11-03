// Sort an alphabetic array with sort method
function alphabeticalOrder(arr) {
  return arr.sort((a, b) => {
    return a > b;
  });
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);

// Sort an array without mutate it
var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return arr.concat([]).sort((a, b) => a - b);
}
nonMutatingSort(globalArray);
