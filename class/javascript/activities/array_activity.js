// 1. split() → String ➝ Array
const str = "a,b,c";
const splitResult = str.split(",");
console.log(splitResult); // ["a", "b", "c"]


// 2. slice() → Copy part (Array/String)
const arr1 = [1, 2, 3, 4, 5];
const sliceResult = arr1.slice(1, 4);
console.log(sliceResult); // [2, 3, 4]
console.log(arr1);        // original unchanged


// 3. splice() → Modify original array
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(1, 2);
console.log(arr2); // [1, 4, 5]


// 4. toSpliced() → Safe version of splice
const arr3 = [1, 2, 3, 4];
const toSplicedResult = arr3.toSpliced(1, 2);
console.log(toSplicedResult); // [1, 4]
console.log(arr3);            // original unchanged