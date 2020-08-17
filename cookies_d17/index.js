var express= require('express')
var cookieParser = require('cookie-parser')
//var cookieValidator = require('./cookieValidator')
var app= express()
app.use(cookieParser());

app.get("/",function(req,res){
    res.cookie("cookie1","nishi").send('cookies has been set')
})
app.listen(3000);