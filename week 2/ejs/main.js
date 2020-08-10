
var express = require('express');
var app= express();
app.set('view engine', 'ejs')
app.set('views','./views');


/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'serverexpress' });
});
app.listen(9000,function(req,res){
    console.log("running...")
  });

//module.exports = router;
