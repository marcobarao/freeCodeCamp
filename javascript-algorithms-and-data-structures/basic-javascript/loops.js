// While
var myArray = [];
var i = 0;

while (i < 5) {
  myArray.push(i);
  i++;
}

// For
var myArray = [];

for (var i = 1; i <= 5; i++) {
  myArray.push(i);
}

// Iterate odd numbers with for loop
var myArray = [];

for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}

// Count backwards with for loop
var myArray = [];

for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}

// Iterate through an array with for loop
var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

// Nesting for loops
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

// Do...While
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

// Profile lookup
var contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"]
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"]
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (name == contacts[i]["firstName"]) {
      if (contacts[i].hasOwnProperty(prop)) {
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  }
  return "No such contact";
}

lookUpProfile("Akira", "likes");
