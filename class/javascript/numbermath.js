let myNum=new Number(100);
console.log(myNum);
console.log(myNum.toString());
console.log(myNum.toFixed(2));
console.log(myNum.toString().length);
//when we built ecommerce website and precision value is so long --->use tofixed method

let h=1000000000;
console.log(h);
console.log(h.toLocaleString('en-IN'));//bydefault give comma format to read effectively---en-IN=>LANG=INDIA=>US standard

//math
console.log(Math);
console.log(Math.abs(-4));//when we take negative value then it convert to +ve value and +ve to +ve value

console.log(Math.round(4.6));
console.log(Math.ceil(4.6));//chooses top value
console.log(Math.floor(4.6));//chooses lowest value

console.log(Math.min(1,2,3,4,5));
console.log(Math.max(1,2,5,6,9));

//home activity--->math.random