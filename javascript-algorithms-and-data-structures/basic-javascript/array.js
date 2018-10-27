// Store multiple values in one variable using arrays
var myArray = ["Marco", 18];

// Nest one array withim another
var myArray = [["Bulls", 23], ["White Sox", 45]];

// Access array data with indexes
var myArray = [50, 60, 70];
var myData = myArray[0];

// Modify data with indexes
var myArray = [18, 64, 99];
myArray[0] = 45;

// Access multi-dimensional arrays with indexes
var myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14]];
var myData = myArray[2][1];

// Manipulate arrays with push() append on the final of array
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3]);

// Manipulate arrays with pop() remove last item of array and return it
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();

// Manipulate arrays with shift() remove first item of array and return it
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();

// Manipulate arrays with unshift() add a item in the first index of array
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);

// Shopping List
var myList = [
  ["Chocolate Bar", 3],
  ["Spaghetti", 1],
  ["Tomato", 2],
  ["Coke", 1],
  ["Water", 2],
  ["Juice", 3]
];
