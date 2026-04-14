//loops and strings

//for loop

let i=0;
for(i=0;i<=5;i++)
{
    console.log(i);
    
}

let sum=0;
for (let i=1;i<=5;i++)
{
    sum+=i
}
console.log("sum"+sum);

//while

let num=2;
while(num<=20)
{
    console.log(num);
    num+=2;
}

//do-while
let a=1;
do{
    console.log("a=",a);
    a++;
}while(a<=5);

//for-of loop
let str="hello";
for(let i of str)
{
    console.log(i);

}

//size...
let size=0;
for(let i of str)
{
    console.log(i);
    size++;

}
console.log(size);

//for-in loop---for obj and array
let student={
    name:"sanika",
    age:20
};
for (let key in student)
{
    console.log(key);//gives keys only
    console.log("keys="+key+"value="+student[key]);//gives keys and values both 
    
}
//activities
//1st..
for(let num=0;num<=100;num++)
{
    if(num%2==0)
    {
    console.log(num);
    }
     
}
//strings
let str1="javascript";
let str2="hello"
console.log(str1);
console.log(str2);

//methods
console.log(str1.length);
console.log(str1[0]);
console.log(str1.startsWith("g"));// Checks if string starts with given value

console.log(str1.endsWith("t"));// Checks if string ends with given value

console.log(str1.slice(0, 4));// Extracts part of string

console.log(str1.substring(1, 5));// Extracts characters between indexes

console.log(str1.substr(1, 3));// Extracts characters from position with given length

console.log(str1.replace("a", "@"));// Replaces one character with another

//template literals---special type of string
let sentence=`this is a template literal`
console.log(typeof(sentence));

let obj={
    item:"pen",
    price:10
}
console.log("cost of",obj.item,"is",obj.price);

//string interpolation
let str3="sanika";
console.log(`my name is ${str3}`);

