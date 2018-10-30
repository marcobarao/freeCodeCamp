// Test method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);

// Test a literal string
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/;
let result = waldoRegex.test(waldoIsHiding);

// Test a literal string with differents possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);

// Ignore case letters
let myString = "freeCodeCamp";
let fccRegex = /freeCodeCamp/i;
let result = fccRegex.test(myString);

// Test anything with wildcard period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);

// Match beginning string patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
let result = calRegex.test(rickyAndCal);

// Match ending string patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
let result = lastRegex.test(caboose);

// Restrict possible username
let username = "JackOfAllTrades";
let userCheck = /[a-zA-Z]{2,}\d*/;
let result = userCheck.test(username);

// Specify upper and lower number of matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

// Specify only the lower number of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/;
let result = haRegex.test(haStr);

// Specify exact number
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/;
let result = timRegex.test(timStr);

// Check for all none
let favWord = "favorite";
let favRegex = /favou?rite/;
let result = favRegex.test(favWord);

// Positive and negative lookahead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{3,})(?=\D\d{2,})/;
let result = pwRegex.test(sampleWord);

// Reuse patterns usign capture groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/;
let result = reRegex.test(repeatNum);
