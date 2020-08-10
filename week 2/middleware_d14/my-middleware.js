const express = require('express')
const app = express();
const path= require('path');


module.exports = function (options) {
    return function (req, res, next) {
      // Implement the middleware function based on the options object
      console.log("middleware external")
      app.get ('/users/:id?',function(req,res){
        res.send('hello middleware page');
      })
    
      next()
    }
  }
  
  