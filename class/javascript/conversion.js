let score="22";
let score_bool=true;
let score_null=null;
let score_undefined=undefined;
console.log(typeof(score));
console.log(typeof(score_bool));
console.log(typeof(score_null));//null datatype-object ----->value assigned
console.log(typeof(score_undefined));//undefined---undefined------>value not assignment

//converting string--->number
let j="40";
let jconversion=Number(j);
console.log(typeof(j));
console.log(typeof(jconversion));

//if string contains number----here 34 will convert into number but abc string willnt
let q="34abc";
let q_num=Number(q)
console.log(q_num);


//converting number----->string
let num=10
let num_str=String(num);
console.log(typeof(num));
console.log(typeof(num_str));

//activity1---->conversions(for all datatypes)
// STRING → BOOLEAN

let strr1 = "sanika";               // string → boolean
console.log(Boolean(strr1));        // true (non-empty string)
//string->bigint
let strBigInt = "123456789";       // string → bigint
console.log(BigInt(strBigInt));    // 123456789n
// STRING → NULL (NOT POSSIBLE)
// let val = null;
// null cannot be created from string directly

//STRING → SYMBOL (NOT POSSIBLE)
// Symbol("abc") WRONG
// Symbol cannot be created by converting string value

// STRING → OBJECT
let strObj = "hello";
let obj = Object(strObj);
console.log(obj);                 // String object
console.log(typeof obj);          // object


// POSSIBLE:
//   string → number
//   string → boolean
//   string → bigint
//   string → object
//   string → array
//
//  NOT POSSIBLE:
//   string → null
//   string → undefined
//   string → symbol (actual conversion)
//   string → function




//ArithmeticOperations
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

let str1="hello";
let str2=" sanika";
console.log(str1+str2);

//conversions
console.log("1"+2);
console.log("1"+2+2);
console.log(1+"2");
console.log(1+3+"2");
console.log((3+4)*5%3);

//note
//js only automatically converts a string to number in arithmetic operations
