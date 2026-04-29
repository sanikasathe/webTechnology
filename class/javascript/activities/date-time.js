
let newDate = new Date();                // creates current date & time object
console.log(newDate);                   // prints full date-time
console.log(newDate.getDate());         // prints day of month 
console.log(newDate.getDay());          // prints day of week 
console.log(newDate.getFullYear());     // prints full year 

let myDate = new Date();                // creates another date object
console.log(myDate);                    // prints full date-time
console.log(typeof(myDate));            // type is "object"
console.log(myDate.toString());         // converts date to readable string
console.log(myDate.toLocaleDateString());// prints date in local format (dd/mm/yyyy)
console.log(myDate.toDateString());     // prints only date part 
console.log();                          // prints empty line (no output)


//timestamp when we create poll in applications then we use timeStamp
let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date.now()); //this compare time in miliseconds 
console.log(Date.now()/1000); //convert in second
console.log(Math.floor(Date.now()/1000));
console.log();

