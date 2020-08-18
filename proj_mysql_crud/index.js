const mysql = require('mysql');
const express = require('express');
const app= express();

const bodyparser = require('body-parser');
app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'employeedb'
});
//console.log('out of the boxdb connect succesfiul');
app.get('/', (req,res)=>{

    res.send('hghgdhshdshjgd hello');
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log('db connect succesfiul');
    }
    else{
        console.log('db connection failed'+JSON.stringify(er,undefined,2));
    }
    
    app.get('/employees', (req,res)=>{
         
        mysqlConnection.query('select * from employee',(err,rows, fields)=>{
            if(!err){
                res.send(rows);
                console.log(rows);
            }
            else{
                console.log(err);
            }
        })
    })

    app.get('/employees/search/:id', (req,res)=>{
         
        mysqlConnection.query('select * from employee where empid=?',[req.params.id],(err,rows, fields)=>{
            console.log(req.params.id);
            
            if(!err){
                res.send(rows);
                console.log(rows);
            }
            else{
                console.log(req.params.id);
            
                console.log('fail');
            }
        })
    })
  
    app.get('/employees/delete/:id', (req,res)=>{
         
        mysqlConnection.query('delete from employee where empid=?',[req.params.id],(err,rows, fields)=>{
            if(!err){
                res.send('data deleted');
               // console.log(rows);
            }
            else{
                
                console.log(err);
            }
        })
    })
    app.delete('/employees/deletereq/:_id', (req,res)=>{
         
        mysqlConnection.query('delete from employee where empid=?',[req.params._id],(err,rows, fields)=>{
            if(!err){
                res.send('data deleted');
               console.log(rows);
            }
            else{
                
                console.log(err);
            }
        })
    })
   
    app.put('/employees/addreq/:id/:name/:code', (req,res)=>{
        let id = req.params.id;
        let name = req.params.name;
        let empcode= req.params.empcode;;
        const sql ='insert into employee(empid,name,empcode) value(?,?,?)';
        //mysqlConnection.query('insert into employee(empid,name,location) value(?,?,?)",[id,name,location],(err,rows, fields){
            mysqlConnection.query(sql,[id,name , empcode],(err,rows, fields)=>{
          
        if(!err){
                res.send('data updated');
              // console.log(rows);
            }
            else{

                
                console.log(err);
            }
        })
    })
   
})
app.listen(3000,()=>console.log('express server runing at 3000 port '));
