const express = require('express');
const app = new express();

app.get('/', function(req, res){
    res.send('Hello world it is Johanne');
});

app.listen(3000, function(){
    console.log('Server is running on localhost 3000');
});