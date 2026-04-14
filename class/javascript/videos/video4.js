//arrays===collection of items
// Array - A single variable that stores multiple values in an ordered list.

// Array Element -An individual value stored at a specific index in an array.

// Index - The position of an element in an array, starting from 0.

// Array Literal - A way to create an array using square brackets, e.g., [1, 2, 3].

// Array Constructor - A way to create an array using new Array().

// Accessing Elements - Retrieving a value from an array using its index, e.g., arr[0].

// Looping Through Array - Using loops like for or forEach to process each element.

// push() - Adds one or more elements to the end of an array.

// pop() - Removes the last element from an array.

// shift() -Removes the first element from an array.

// unshift() -Adds one or more elements to the beginning of an array.

// splice() - Adds/removes elements at a specific position in an array.

// slice() -Returns a portion of an array without modifying the original.

// indexOf() - Returns the index of a specified element in an array.

// Dynamic Nature of Arrays – Arrays can grow, shrink, and contain different data types.

let marks=[96,70,67,90,56];
console.log(marks);
console.log(typeof(marks));

console.log(marks[4]);//to access elements
console.log(marks.length);//size of array


//display all elements
for(let i=0;i<marks.length;i++)
{
    console.log(marks[i]);
    
}

//activities
//1.creating array to store companies
let companies=['Bloomberg','Microsoft','Uber','Google','IBM','Netflix']
console.log(companies);

//a)remove first company from array---use shift
companies.shift();
console.log(companies);

//b)remove lastccompany from array---use pop
companies.pop();
console.log(companies);

//c)remove uber and add ola---use splice
companies.splice(1,1,"ola");//1 element at index 1
console.log(companies);

//d)add amazon at end--->push
companies.push("Amazon");
console.log(companies);