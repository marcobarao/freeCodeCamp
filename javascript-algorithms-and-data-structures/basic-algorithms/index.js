// Convert celsius to fahrenheit
const convertToF = celsius => (celsius * 9) / 5 + 32;

convertToF(30);

// Reverse a string
const reverseString = str => {
  let str_list = str.split("");
  return str_list.reduce((newStr, char) => (char += newStr));
};

reverseString("hello");

// Fatorialize a number
const factorialize = num => {
  let result = 1;
  for (let fatorial = 1; fatorial <= num; fatorial++) {
    result *= fatorial;
  }
  return result;
};

factorialize(5);

// Find the longest word
findLongestWordLength = str => {
  let word_list = str.split(" ");
  let longest = 0;
  word_list.forEach(word => {
    if (word.length > longest) longest = word.length;
  });
  return longest;
};

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// Return largest number
const largestOfFour = arr => {
  let largest = [
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
    Number.NEGATIVE_INFINITY
  ];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > largest[i]) largest[i] = arr[i][j];
    }
  }
  return largest;
};

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);

// Confirm the ending
const confirmEnding = (str, target) => {
  return str.substring(str.length - target.length, str.length) === target;
};

confirmEnding("Bastian", "n");

// Repeat a string num times
const repeatStringNumTimes = (str, num) => {
  if (num <= 0) return "";

  let newStr = "";
  for (let i = 0; i < num; i++) {
    newStr += str;
  }
  return newStr;
};

repeatStringNumTimes("abc", 3);
