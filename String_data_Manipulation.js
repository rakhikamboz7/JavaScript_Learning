let str = "Hello, World!";

// Length of the string
console.log("Length:", str.length);

// Substring
console.log("Substring:", str.substring(7, 12)); //(using index to extract substring from a string)

// Concatenation
let newStr = str.concat(" How are you?"); //we can also use a '+' operator to concatenate strings.
console.log("Concatenated:", newStr);

// Replacing a substring
let replacedStr = str.replace("World", "Universe");  //given string name and the word to replace
console.log("Replaced:", replacedStr);

// Converting to uppercase/lowercase
console.log("Uppercase:", str.toUpperCase()); 
console.log("Lowercase:", str.toLowerCase());

// Splitting a string into an array
let words = str.split(",");
console.log("Split:", words); 
