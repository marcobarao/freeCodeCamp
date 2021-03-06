// Extract matches
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// Find more than the first
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);

// Match single character with multiple possibilities
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);

// Match letters of the alphabet
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi;
let result = quoteSample.match(alphabetRegex);

// Match numbers and letters
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);

// Match single characters not specified
let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi;
let result = quoteSample.match(myRegex);

// Match characters that occur one time or more times
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);

// Match characters that occur zero or more times
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result = chewieQuote.match(chewieRegex);

//Find characters with lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
let result = text.match(myRegex);

// Find one or more criminals in a hunt
let crowd = "P1P2P3P4P5P6CCCP7P8P9";

let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

// Match all letters and numbers
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g;
let result = quoteSample.match(alphabetRegexV2).length;

// Match everything but letters and numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g;
let result = quoteSample.match(nonAlphabetRegex).length;

// Match all numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/g;
let result = numString.match(numRegex).length;

// Match all non-numbers
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/g;
let result = numString.match(noNumRegex).length;

// Match whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

// Match non-whitespace
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

// 
