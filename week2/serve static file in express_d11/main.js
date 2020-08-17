// to show image on server via express


const express = require('express')
const app = express();
const path= require('path');

//or to normally render with original path
app.use(express.static('public'))

// to create virtual path
app.use('/static',express.static('public'))

app.get ('/',function(req,res){
  res.sendFile(__dirname+'/index.html');
})

app.get ('/users',function(req,res){
    res.send('welcome nishi here');
})
app.listen(9002, function(req,res){
  console.log("running...")
});

const extension= path.extname(__filename);
console.log(extension);