const express = require('express');

var app = express();

app.use(express.static(__dirname +'/public'));



app.get('/hello', (req, res)=>{
    res.send("Hello Express");
});

app.listen(8080, ()=>{
    console.log("Server is up on port 8080");
});