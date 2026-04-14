let MyDate=new Date()
console.log(MyDate);
console.log(MyDate.toString());
console.log(MyDate.toDateString());
console.log(MyDate.toLocaleDateString());
console.log(typeof(MyDate));

console.log(MyDate.getDate());
console.log(MyDate.getDay());
console.log(MyDate.getFullYear());
console.log(MyDate.getHours());
console.log(MyDate.getMonth());
console.log(MyDate.getUTCDate());

//timestamp
let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(Date.now());//time in millisec
console.log(Date.now()/1000);//convert in seconds

