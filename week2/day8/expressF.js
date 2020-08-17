const express = require('express')
//const { add } = require('./add')
const app = express();
/*app.get('/',function(req,res){
   res.send('hello world');
})*/
app.get ('/',function(req,res){
    res.send('welcome nishi here');
})
app.listen(9002, function(req,res){
  console.log("running...")
});

