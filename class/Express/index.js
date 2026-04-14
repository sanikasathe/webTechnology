//activity1 -->diff between pakage.json and pacakge-lock.json
//activity2--->diff between dev dependency and dependency
//activity3---->study http requests like get,put,post ,delete
//activity 4--->

const express = require('express')
const app = express()
const port = 3000

//simpler way
app.use((req,res,next) => {
  console.log("middleware executed",new Date());
  next();
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about me!')
})

app.get('/contact', (req, res) => {
  res.send('Hello World!')
})

app.get('/project', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//nodemon-
//components of routing -->url path,http methods,handler functions

//middle ware
// middleware
// function CheckRoute(req, res, next) {
//   console.log(req.url);
//   next(); 
// }

// app.use(CheckRoute);

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

//activity---
// what is middleware
// where use middle ware funcn in company /real time examples
// what is types of middleware
//2 or 3 coding examples of middleware fucn



