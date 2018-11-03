// Learn about functional programming
const prepareTea = () => "greenTea";

const getTea = numOfCups => {
  const teaCups = [];

  for (let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }

  return teaCups;
};
const tea4TeamFCC = getTea(40);
console.log(tea4TeamFCC);

// Avoid mutations and side effects using functional programming
var fixedValue = 4;

function incrementer(value) {
  return value + 1;
}

var newValue = incrementer(fixedValue);
console.log(fixedValue);

// Refactor global variables out of function
var bookList = [
  "The Hound of the Baskervilles",
  "On The Electrodynamics of Moving Bodies",
  "Philosophiæ Naturalis Principia Mathematica",
  "Disquisitiones Arithmeticae"
];

function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

function remove(arr, bookName) {
  let newArr = [...arr];

  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
    return newArr;
  }
}

var newBookList = add(bookList, "A Brief History of Time");
var newerBookList = remove(bookList, "On The Electrodynamics of Moving Bodies");
var newestBookList = remove(
  add(bookList, "A Brief History of Time"),
  "On The Electrodynamics of Moving Bodies"
);

console.log(bookList);

// Apply functional programming to convert strings to url slugs
var globalTitle = "Winter Is Coming";
function urlSlug(title) {
  let newTitle = title.split(/\W+/);
  console.log(newTitle);
  return newTitle.filter(item => item != '').map(item => item.toLowerCase()).join("-");  
}

var winterComing = urlSlug(globalTitle);
