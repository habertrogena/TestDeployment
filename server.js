// import the required modules
const express = require('express');

//create an express application
const app = express();

//define the hostname and port
const hostname = '0.0.0.0';
const port = 3000;

//define a simple route 

app.get('/',(req,res)=>{
res.send('Hello world by....Habert doe\n');
});

//start the server
app.listen(port,hostname,()=>{
    console.log(`server is running on at http://${hostname}:${port}/`);
})