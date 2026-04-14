//handling request and response--
//express applicn handles http req and response
//req object contains--->info an=bout client req---ex-->url,headers,req body ,query parameters
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res=>{
    console.log(req.query.name);
    
}))
//query parameter-->to get user from name when we dont have id.-->localhost:3000/user?name="sanika"

//activity-->
//write 2 or 4 examples of query parameters
//proper concept of query parameter and why we use it in real world examples


//response obj sends data back to the client 
//common res method-->response.send=>send text, response.json=>send json ,response.status=>sends http status ,response.sendfile=>sends file=>check exp5