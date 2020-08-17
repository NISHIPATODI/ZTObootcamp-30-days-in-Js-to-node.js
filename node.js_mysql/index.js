const mysql = require('mysql');
const express = require('express');
const bodyparser = require('body-parser');
app.use(bodyparser.json());
var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    dataabse:'employeedb'
});
//console.log('out of the boxdb connect succesfiul');
    
mysqlConnection.connect((err)=>{
    if(!err){
        console.log('db connect succesfiul');
    }
    else{
        console.log('db connection failed'+JSON.stringify(er,undefined,2));
    }
    app.listen(3000,()=>console.log('express server runing at 3000 port '));

    app.get('/employees', (res,req)=>{
        mysqlConnection.query('select * from empoloyee',(err,rows, fields)=>{
            if(!err){
                console.log(rows);
            }
            else{
                console.log(err);
            }
        })
    })
})