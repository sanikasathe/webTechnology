let myarr=[2,1,2,3,4,"sit"];
console.log(myarr);//check why ???

const myarr1=new Array(20,22,24,26);
console.log(myarr1);
console.log(myarr[1]);

//array methods
myarr1.push(25);//add element in array
console.log(myarr1);
myarr1.pop(25);//remove last  element in array
console.log(myarr1);
myarr1.unshift(9);//shift other elemnt and add  element at first pos
console.log(myarr1);
myarr1.shift(9);//remove 1st element
console.log(myarr1);
myarr1.includes(9);//check numbers in arr
console.log(myarr1);
myarr1.indexOf(24);
console.log(myarr1);


//join method--->gives output in string
const newarr=myarr.join();
console.log(newarr);
console.log(typeof(newarr));