var express = require('express');
const path = require('path');
app = express();
var myLogger = function (req, res, next) {
    console.log('LOGGED')
    next()
}
var hello = function (req, res, next) {
    console.log('LOGGED')
    next()
}
//app.use(myLogger);
app.get('/',[myLogger,hello],function(req,res){
    console.log("I am Here");
    res.send("Hello I am Here");
});
app.get('/hello',function(req,res){
    console.log("I am Here");
    res.send("This Is My Way");
});
app.post('/login',function(req,res){
    console.log("I am Login");
   // res.send("This Is My Way");
});
app.listen(3000,function()
{
  console.log("Listening at Port 3000");    
});