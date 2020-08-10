const express = require('express')
const app = express();
app.set('view engine', 'pug')
app.set('views','./public/views');

app.get('/',(req,res)=>{
    res.render('index',{title:"first", msg:"hello world"})
})


app.listen(9000,function(req,res){
    console.log("running...")
  });
