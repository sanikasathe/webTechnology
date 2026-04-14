//funcn and methods
//funcn--block of code that perform specific task
//fucn defn-->fucn fucn_name(){}
//funcn call=>fucnname();
function myfun()
{
    console.log("welcome to dkte");
    
}
//fucn calling
myfun();

//2nd example using return
function add(a,b){
    s=a+b;
    return s;
}
val=add(3,5);//funcn calling
console.log(val);

//arrow funcn--compact way of writing a fucntion
const arrowsum=(a,b)=>{
    console.log(a+b);
    
}
result=arrowsum(4,6);
console.log(result);

//activities
//1.create funcn take string as argument and return no.of vowels 

// 1. Create function that takes string as argument and returns number of vowels

function vowels(s) {
    let count = 0;
    let str = s.toLowerCase();  

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || 
            str[i] === 'e' || 
            str[i] === 'i' || 
            str[i] === 'o' || 
            str[i] === 'u') {
            count++;
        }
    }

    return count;
}

// Example
console.log(vowels("sanika")); 
