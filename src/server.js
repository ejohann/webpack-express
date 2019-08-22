const express = require('express');
const path = require('path');

const app = new express();

app.get('/', function(req, res){
    const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
    const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
    res.send(contentFromHtmlFile);
});

app.listen(3000, function(){
    console.log('Server is running on localhost 3000');
});