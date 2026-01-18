//activity1
// Get input from user
let num = prompt("Enter a number:");

// Convert string input to number
num = Number(num);
if (num % 5 === 0) {
    console.log("The number is a multiple of 5");
} else {
    console.log("The number is NOT a multiple of 5");
}
//activity2
// Take marks from user
let score = Number(prompt("Enter your marks:"));

// Check grade using conditions
if (score >= 80 && score <= 100) {
    console.log("Grade A");
} else if (score >= 70 && score <= 89) {
    console.log("Grade B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade D");
} else if (score >= 0 && score <= 49) {
    console.log("Grade F");
} else {
    console.log("Invalid marks");
}
//activity3
// Creating a const object to store product information
const product = {
    name: "Parker Jotter Standard CT Ball Pen",
    color: "Black",
    rating: 4.5,
    reviews: 7002,
    price: 270,
    mrp: 285,
    discount: "5% off",
    dealOfTheDay: true
};

// Printing the product object
console.log(product);

//activity4
// Creating a const object to store profile information
const profile = {
    username: "shradhakhapra",
    name: "Shradha Khapra",
    posts: 195,
    followers: "569K",
    following: 4,
    profession: "Entrepreneur",
    bio: "Apna College | Ex-Microsoft, DRDO",
    tagline: "To educate someone is the highest privilege",
    verified: true
};

// Printing the profile object
console.log(profile);

