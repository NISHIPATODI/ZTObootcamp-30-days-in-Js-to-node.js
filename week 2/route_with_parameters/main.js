// to show image on server via express


const express = require('express')
const app = express();
const path= require('path');


app.get ('/',function(req,res){
  res.send("welcome page");
})

app.get ('/users',function(req,res){
    res.send('welcome nishi here');
})

app.get ('/users/:Id',function(req,res){
  res.send('routing with parameters id is -'+ req.params.Id);
})
// to make optional parameter use ?
app.get ('/data/:Id?',function(req,res){
  res.send('routing with parameters id is - '+ req.params.Id);
})

app.get ('/info/:Id?',function(req,res){
  if(req.params.Id==undefined){
  res.send('all data accesed');
}
else{
  res.send('routing with parameters id is - '+ req.params.Id);

}
})

app.get ('/flights/:from-:to?',function(req,res){
  res.send('search for- '+ req.params.from+ req.params.to);
})


app.listen(9002, function(req,res){
  console.log("running...")
});

const extension= path.extname(__filename);
console.log(extension);