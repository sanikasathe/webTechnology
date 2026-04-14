let another_id=Symbol("123");//for unique id
console.log(another_id);

const id1=123
console.log(id1===another_id);

//non-premitive datatypes

//array declaration                                                                             
const a=[1,2,3,4];
console.log(a);

//object declaration
const myObject={
    name:"sanika",
    email:"sanikasathe@gmail.com",
    age:20
}
console.log(myObject);
console.log(myObject.name);
console.log(myObject.email);
console.log(myObject.age);

// Function name: The name used to identify and call a function

// Function definition: Writing a function using the 'function' keyword
// and defining what the function should do
function call() {
    console.log("Sanika");
}

// Function definition: Function that performs calculation
// and returns a value using return keyword
function add() {
    return 5 + 4;
}

// Function calling: Using the function name with () to execute the function
let result = add();

// Printing output
console.log(result);

// Function calling: Executing the call() function
call();

//memory 
//there are 2 types of memory--->stack and heap
//stack --->primitive datatypes
//heap --->non-primitive datatypes

//stack example
let myYoutubeName="SSS";
let newYoutubeChann=myYoutubeName;
console.log(myYoutubeName);
console.log(newYoutubeChann);//when we assigned one variable to another a copy is made 

newYoutubeChann="JS";
console.log(newYoutubeChann);//changing one doesnt affect another variable


//heap example
let myObj={
    fname:"sanika",
    age:20,
    id:101
}
let myObj2=myObj;
myObj2.id=25;
console.log(myObj.id);
console.log(myObj2.id);//obj are stored in heap memory ...when we assigned one obj to another ,reference is copied not the value so when we change 
                        //one obj so both value change


