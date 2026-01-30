console.log("********Activity 01 : declare array, object, function*******");

// Array
let marks = [20, 30, 40, 50];

// Object
const product = {
    title: "Book",
    rating: 4.8,
    price: 20
};

// Function
function greeting() {
    console.log("Hello World!");
}
greeting();


// ******** Activity 02: Reverse a number ********
console.log("*********Activity 02: Reverse a number*********");

let num = 7865;
let tempNum = num;
let rev_num = 0;

while (tempNum > 0) {
    let digit = tempNum % 10;
    rev_num = rev_num * 10 + digit;
    tempNum = Math.floor(tempNum / 10);
}
console.log("reverse number of " + num + " is " + rev_num);


// ******** Activity 03: Check palindrome number ********
console.log("********Activity 03: Check palindrome number*********");

let num3 = 121;
let temp = num3;
let rev = 0;

while (temp > 0) {
    let digit = temp % 10;
    rev = rev * 10 + digit;
    temp = Math.floor(temp / 10);
}

if (rev === num3) {
    console.log(num3 + " is Palindrome Number");
} else {
    console.log(num3 + " is not a Palindrome Number");
}


// ******** Activity 04: Fibonacci series ********
console.log("******Activity 04 : Fibonacci series********");

let n = 10;
let a = 0, b = 1;

console.log(a);
console.log(b);

for (let i = 2; i < n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}


// ******** Activity 05: Array operations ********
console.log("********Activity 05 : Array operations********");

// Find largest number
let arr1 = [3, 4, 1, 7, 8];
let max = arr1[0];

for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > max) {
        max = arr1[i];
    }
}
console.log("Largest number in array " + arr1 + " is " + max);

// Remove duplicates
let arr2 = [2, 2, 3, 4, 5, 5, 6, 7, 6, 6];
let unique = [];

for (let i = 0; i < arr2.length; i++) {
    if (!unique.includes(arr2[i])) {
        unique.push(arr2[i]);
    }
}
console.log("Unique array:", unique);


// ******** Activity 06: String operations ********
console.log("********Activity 06 : String operations********");

// Count vowels
let str1 = "javascript";
let count = 0;

for (let ch of str1.toLowerCase()) {
    if ("aeiou".includes(ch)) {
        count++;
    }
}
console.log("Vowel count in " + str1 + " is " + count);

// Palindrome string
let str2 = "mom";
let revStr = str2.split('').reverse().join('');

if (str2 === revStr) {
    console.log("String " + str2 + " is Palindrome");
} else {
    console.log("String " + str2 + " is not Palindrome");
}


// ******** Activity 07: Number operations ********
console.log("********Activity 07 : Number operations********");

// Prime number
let num2 = 7;
let isPrime = true;

if (num2 <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num2); i++) {
        if (num2 % i === 0) {
            isPrime = false;
            break;
        }
    }
}

console.log(isPrime ? num2 + " is Prime Number" : num2 + " is not Prime Number");

// Factorial
let num5 = 5;
let fact = 1;

for (let i = 1; i <= num5; i++) {
    fact *= i;
}
console.log("Factorial of " + num5 + " is " + fact);


// ******** Activity 08: Functions ********
console.log("********Activity 08 : Functions********");

// Even-Odd function
function EvenOddChecker(num6) {
    if (num6 % 2 === 0) {
        console.log(num6 + " is Even");
    } else {
        console.log(num6 + " is Odd");
    }
}
EvenOddChecker(4);
EvenOddChecker(3);

// Sum of array
function SumOfArr(arr3) {
    let sum = 0;
    for (let i = 0; i < arr3.length; i++) {
        sum += arr3[i];
    }
    return sum;
}

console.log("Sum of array [4,7,8,9,2] is " + SumOfArr([4, 7, 8, 9, 2]));
