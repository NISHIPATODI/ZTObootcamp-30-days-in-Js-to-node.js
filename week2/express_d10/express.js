const express= require ("express");
const app= express();
const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({
    extended:true
}));

app.get("/",function(req,res){
    res.send("welcome to home page(/)");
});

app.get("/about",function(req,res){
    res.send("welcome to about page");
});
app.get("/contact",function(req,res){
    res.send("<h1>welcome to contact page</h1>");
});

app.post("/calculator", function(req,res){
   // res.send("thank you ");
    console.log(req.body);
    let n1 =Number(req.body.v1);
    let n2=Number(req.body.v2);
    let sum= n1+n2;
    res.send("sum is new "+ sum);
})
app.get("/calculator",function(req,res){
   // res.send("welcome to calculator page");
   res.sendFile(__dirname+"/index.html"); 
    console.log(__dirname);
});

app.get("/bmi",function(req,res){
    // res.send("welcome to calculator page");
    res.sendFile(__dirname+"/bmi.html"); 
     console.log(__dirname); 
    // var nishi= 56;

 });
 app.post("/bmi", function(req,res){
    // res.send("thank you ");
     console.log(req.body);
     let n1 =Number(req.body.mass);
     let n2=Number(req.body.height);
     let sum= n1/(n2*n2);
    res.send("mass/height index is "+ sum+" kg/m^2");
 })
 
 

app.listen(5000, function(req,res){
    console.log("server is running at port 5000");
});
