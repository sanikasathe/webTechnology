// =========================================
// Difference between var, let, and const


// var: function scoped, can be redeclared and reassigned
var a = 10;
var a = 20; // redeclaration allowed

// let: block scoped, cannot be redeclared but can be reassigned
let b = 30;
// let b = 40; //  error: redeclaration not allowed

// const: block scoped, cannot be redeclared or reassigned
const c = 50;
// c = 60; //  error: reassignment not allowed



// =========================================
// Data Types in JavaScript
// =========================================

// -------- Primitive Data Types --------
// Primitive data types store single values

// Variable declaration
let number = 50;            // number
let Name = "sanika";        // string
let isTrue = true;          // boolean
let bigInt = 345670000000;  // number
let isNull = null;          // null
let undefined_var;          // undefined
let sym = Symbol(5);        // symbol

console.log(number, Name, isTrue, bigInt, isNull, undefined_var, sym);



// -------- Non-Primitive Data Types --------
// Non-primitive data types store multiple values

let arr = [1, 2, 3];        // array
let obj = { age: 20 };     // object



// =========================================
// Checking Data Types using typeof
// =========================================

console.log(typeof number);         // number
console.log(typeof Name);           // string
console.log(typeof isTrue);         // boolean
console.log(typeof bigInt);         // number
console.log(typeof isNull);         // object 
console.log(typeof undefined_var);  // undefined
console.log(typeof sym);            // symbol
console.log(typeof arr);            // object
console.log(typeof obj);            // object



// =========================================
// Difference between null and undefined

// null:
// - value is intentionally empty


// undefined:
// - value is not assigned
// - default value in JavaScript
