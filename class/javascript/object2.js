//singleton object
const user=new Object();
console.log(user);

//non singleton object
const user2={};
user2.id=123;
user2.name="sanika";
user2.email="abc@gmail.com",
user2.city="mugali";
user2.islogin=true;
console.log(user2);

//object inside object---->nested object
const regularuser={
    email:"abc@gmail.com",
    user:{
        fullname:"sanika sathe",
        age:20

    }
}
console.log(regularuser);

console.log(regularuser.user.fullname);//to access particular 

