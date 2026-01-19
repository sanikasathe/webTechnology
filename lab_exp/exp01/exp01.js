//variable declarations----let ,const,var
console.log("**Variable Declaration**");
document.writeln("** Variable Declaration ** <br>");

//const
const accountId = 1001;
console.log("Account ID:", accountId);
document.writeln("Account ID: " + accountId + "<br>");

//let and var
let a =20;
var b=40;

console.log("---understanding Block Scope Example ---");
document.writeln("--- understanding Block Scope Example ---<br>");

{
    let a=100;
    let b=200;

    console.log("Inside Block:", a, b);
    document.writeln("Inside Block: " + a + " " + b + "<br>");
}
//datatypes
console.log("** Data Types **");
document.writeln("** Data Types **<br>");

let accId = 101;
console.log("accId:", accId);
document.writeln("accId: " + accId + "<br>");
console.log("Type of accId:", typeof accId);
document.writeln("Type of accId: " + typeof accId + "<br>");

let accName = "Sanika";
console.log("accName:", accName);
document.writeln("accName: " + accName + "<br>");
console.log("Type of accName:", typeof accName);
document.writeln("Type of accName: " + typeof accName + "<br>");

let isValid = true;
console.log("isValid:", isValid);
document.writeln("isValid: " + isValid + "<br>");
console.log("Type of isValid:", typeof isValid);
document.writeln("Type of isValid: " + typeof isValid + "<br>");

let temp;
console.log("temp:", temp);
document.writeln("temp: " + temp + "<br>");
console.log("Type of temp:", typeof temp);
document.writeln("Type of temp: " + typeof temp + "<br>");

let value = null;
console.log("value:", value);
document.writeln("value: " + value + "<br>");
console.log("Type of value:", typeof value);
document.writeln("Type of value: " + typeof value + "<br>");

let sym1 = Symbol("id");
console.log("Symbol:", sym1.toString());
document.writeln("Symbol: " + sym1.toString() + "<br>");
console.log("Type of sym1:", typeof sym1);
document.writeln("Type of sym1: " + typeof sym1 + "<br>");

let bigNumber = 25647896322222140000n;
console.log("BigInt:", bigNumber);
document.writeln("BigInt: " + bigNumber + "<br>");
console.log("Type of bigNumber:", typeof bigNumber);
document.writeln("Type of bigNumber: " + typeof bigNumber + "<br>");

//activity 1
console.log("**Activity 01 : printing Student Info **");
document.writeln("**Activity 01 : Student Info **<br>");

let sname = "Sanika";
let sroll = 121;
let sage = 20;
let isGirl = true;

console.log("Name :", sname);
document.writeln("Name : " + sname + "<br>");

console.log("Roll Num :", sroll);
document.writeln("Roll Num : " + sroll + "<br>");

console.log("Age :", sage);
document.writeln("Age : " + sage + "<br>");

console.log("isGirl :", isGirl);
document.writeln("isGirl : " + isGirl + "<br>");

//activity2
console.log("** Activity 02 : Odd-Even **");
document.writeln("** Activity 02 : Odd-Even **<br>");

let num1 = 10;

if (num1 % 2 == 0) {
    console.log(num1, "is Even Number");
    document.writeln(num1 + " is Even Number<br>");
} else {
    console.log(num1, "is Odd Number");
    document.writeln(num1 + " is Odd Number<br>");
}

//activity3
console.log("** Activity 03 : Pass-Fail **");
document.writeln("** Activity 03 : Pass-Fail **<br>");

let marks = 50;

if (marks > 40) {
    console.log("Result: Pass");
    document.writeln("Result: Pass<br>");
} else {
    console.log("Result: Fail");
    document.writeln("Result: Fail<br>");
}

//activity4
console.log("** Activity 04 : Loop **");
document.writeln("**Activity 04 : Loop **<br>");

console.log("First 10 Numbers:");
document.writeln("First 10 Numbers:<br>");

for (let i = 0; i < 10; i++) {
    console.log("Number:", i);
    document.writeln("Number: " + i + "<br>");
}

