
var express = require('express');
var app= express();
var bodyParser= require('body-parser');
app.set('view engine', 'twig')
app.set('views','./views');

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/* GET home page. */
app.get('/', function(req, res) {
    res.render('about', { title: 'Login form', message:"enter user name"});
  });

app.post('/', (req, res)=> {if(req.body.username ==="nishi"){
    res.render('login', { title: 'hello', username:req.body.username , password:req.body.password});
}
    else{
        res.render('index', { title: 'hello', message:"Fail login"});
     
    }
  });
  
app.get('/about/:a-:b', function(req, res) {
    res.render('about', { title: 'Login form', message:"enter user name"});
  });
  
app.listen(9000,function(req,res){
    console.log("running...")
  });

//module.exports = router;
