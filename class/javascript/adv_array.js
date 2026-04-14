//array of array

const superhero=["shaktiman","spiderman","ironman","krish"];

const a =["ram","shiv","bheem"]

superhero.push(a);
console.log(superhero);

console.log(superhero[3]);//indexing
console.log(superhero[2][2]);//letter accessing
console.log(superhero.concat(a));//return all in one array

const arr2=[1,2,3,[4,5,6],7[6,7,[4,5]]];
// const realarr2=arr2.flat(Infinity);
// console.log(realarr2);

 const realarr2=arr2.flat(1);//nested array
 console.log(realarr2);

 //data scripting methods
// console.log(Array.isArray("sanika"));//used to ask que to array
// console.log(realarr2.from());

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));



