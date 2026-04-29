//older way to declare string
const str1="sanika";
console.log(str1);

//new way to declare string---->string interpolation--->good way
const str2="JS";
console.log(`hello my course name is ${str2}`);  // `--->backticks


//CREATING STRING OBJECT---->to get string methods and use them
const gameCount=new String("JSCWS")
console.log(gameCount);

// String Addition / Concatenation

const fname = "Sanika";
const course = "JavaScript";

// Using +
console.log("Using + :", fname + " is learning " + course);

// Using template literal
console.log(`Using template: ${fname} is learning ${course}`);

// Using concat
console.log("Using concat:", fname.concat(" is learning ", course));

// String methods

console.log(gameCount.length);//  Used to find total number of characters in a string

console.log(gameCount[0]); //Used to access character at a specific position
console.log(gameCount[4]);

console.log(gameCount.toUpperCase());//Converts entire string into uppercase letters

console.log(gameCount.toLowerCase());//Converts entire string into lowercase letters

console.log(gameCount.charAt(1));// Used to get character at given index position

console.log(gameCount.indexOf('C'));//Used to find position of a character in string

const newstr1 = "  sanika  ";
console.log(newstr1.trim());// Removes extra spaces from start and end of string

// Activity: Check remaining string methods

// String methods

console.log(gameCount.includes("game"));// Checks if string contains given value

console.log(gameCount.startsWith("g"));// Checks if string starts with given value

console.log(gameCount.endsWith("t"));// Checks if string ends with given value

console.log(gameCount.slice(0, 4));// Extracts part of string

console.log(gameCount.substring(1, 5));// Extracts characters between indexes

console.log(gameCount.substr(1, 3));// Extracts characters from position with given length

console.log(gameCount.replace("a", "@"));// Replaces one character with another

console.log(gameCount.replaceAll("a", "@"));// Replaces all matching characters

console.log(gameCount.concat(" play"));// Joins two strings

console.log(gameCount.split(""));// Converts string into array

console.log(gameCount.repeat(2));// Repeats string given number of times

console.log(gameCount.padStart(10, "*"));// Adds characters at beginning of string

console.log(gameCount.padEnd(10, "*"));// Adds characters at end of string

console.log(gameCount.toString());// Converts value to string

