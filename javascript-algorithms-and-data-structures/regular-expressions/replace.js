// Use capture groups to search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/;
let replaceText = "okey-dokey";
let result = huhText.replace(fixRegex, replaceText);

// Remove whitespaces from start and end
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, '');
console.log(result);