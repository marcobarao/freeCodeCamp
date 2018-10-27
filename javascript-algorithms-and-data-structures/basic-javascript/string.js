// Declare string variables
var myFirstName = "Marco";
var myLastName = "Barão";

// Escaping literal quotes
var myStr = 'I am a "double quoted" string inside "double quotes".';

// Quoting strings with single quotes
var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

// Scape sequences
// \'	single quote
// \"	double quote
// \\	backslash
// \n	newline
// \r	carriage return
// \t	tab
// \b	backspace
// \f	form feed
var myStr = "FirstLine\n\t\\SecondLine\nThirdLine";

// Concatening strings with plus operator
var myStr = "This is the start. " + "This is the end.";

// Concatening strings with plus equals operator
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Constructing strings with variables
var myName = "Marco";
var myStr = "My name is " + myName + " and I am well!";

// Appending variables
var someAdjective = "cool";
var myStr = "Learning to code is ";
myStr += someAdjective;

// Finding the length of a string
lastNameLength = lastName.length;

// Use bracket notation to find the first char in a string
firstLetterOfLastName = lastName[0];

// Understand string Immutability
var myStr = "Jello World";
// myStr[0] = "H"; // Don't work
myStr = "Hello World";

// Use bracket notation to find the Nth char in a string
var thirdLetterOfLastName = lastName[2];

// Use bracket notation to find the last char in a string
var lastLetterOfLastName = lastName[lastName.length - 1];

// Use bracket notation to find the Nth-to-last char in a string
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

// Word blanks
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result =
    "My " +
    myNoun +
    " is " +
    myAdjective +
    ". It " +
    myVerb +
    " so " +
    myAdverb +
    ".";

  return result;
}

wordBlanks("dog", "big", "ran", "quickly");
wordBlanks("cat", "little", "hit", "slowly");
