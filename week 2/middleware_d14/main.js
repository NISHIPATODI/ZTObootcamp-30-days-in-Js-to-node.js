const express = require('express')
const app = express();
const path= require('path');
/*var mw = require('./my-middleware.js')

const { nextTick } = require('process');

let n;
var Validation = function(req,res,next){
    console.log("middleware working");
    next();
}

var Validation2 = function(req,res,next){
    if(req.params.id=="nishi"){
        console.log("succesfully login");
    n="succesfully login";
    }
    else{
     n="not authorized";
        console.log("not authorized");
    }
    next();
}

app.use(mw({ option1: '1', option2: '2' }))

//app.use(Validation2);

app.get ('/',Validation,function(req,res){
    res.send('hello first page');
  })
  
  app.get ('/users/:id?' ,Validation2,function(req,res){

     res.send(n);
    //console.log("in get method");
    
    console.log(req.params.id);
    
  })
*/
app.get('/user/:id', function (req, res, next) {
    // if the user ID is 0, skip to the next route
    if (req.params.id === '0') 
    {next("route")
console.log("in if body", req.originalUrl)
 
}
    // otherwise pass the control to the next middleware function in this stack
    else next()
  }, function (req, res, next) {
    console.log("in f1 body")

    // send a regular response
    res.send('regular')
  })
  
  // handler for the /user/:id path, which sends a special response
  app.get('/user/:id', function (req, res, next) {
    res.send('special')
    console.log("in f2 body")

  })






app.listen(9000,function(req,res){
    console.log("running...")
  });
  