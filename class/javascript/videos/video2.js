//link---https://www.youtube.com/watch?v=Zg4-uSjxosE
//operators and contional statements

//operators
//1.arithmetic operators
let a=3;
let b=9;
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
console.log(a**b);//exponential

//2.unary operators

console.log(a++);
console.log(a--);
console.log(--a);
console.log(++a);

//3.assignment operators
let p=4;
console.log(p+=4);
console.log(p-=4);
console.log(p*=4);
console.log(p/=4);
console.log(p%=4);
console.log(p**=4);

//4.comparison operators

let m=30;
let n=20;
console.log(m==n);
console.log(m<=n);
console.log(m>=n);

//5.logical opeartors
let y=6;
let z=9;

let cond1=y>z;
let cond2=y==z;
console.log(cond1 && cond2);
console.log(cond1 || cond2);
console.log(cond1!=cond2);

//conditional statements
let age=34;
if(age>=18){
    console.log("can vote");
}
else{
    console.log("cant vote");
    
}



let mode="dark";
let color;
if(mode=="dark")
{
    color="black"
}
else if(mode=="blue")
{
    color="blue";
}
else{
    color="white"
}
console.log(color);

//ternary opeartors
let age1;
let result=age1>18 ? "adult":"not adult";
console.log(result);

//activities
//1st....
let num=35;
if (num%5==0)
{
    console.log("multiple of 5");
    
}
else{
    console.log("not multiple of 5");
    
}
//2nd....
let marks=76;
if (marks>=80){
    console.log("A grade");
    
}
else if(marks>=70 && marks<80)
{
    console.log("B grade");
    
}
else if(marks>=60 && marks<70)
{
    console.log("C grade");
    
}
else if(marks>=50 && marks<60)
{
    console.log("B grade");
    
}
else{
    console.log("fail");
    
}






