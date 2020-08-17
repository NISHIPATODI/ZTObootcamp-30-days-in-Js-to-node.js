const { x } = require("joi");

const express = require('express')
const Joi = require('@hapi/joi')
const app = express();
app.use(express.json());
const customers =[

    {
        title:'nishi', id:1
    },
    {
        title:'ishita', id:2
    },
    {
        title:'aashi', id:3
    }
]
app.get('/',(req,res)=>{
    res.send('welcome to api')
})
app.get('/api/customers',(req,res)=>{
    res.send(customers)
})

app.get('/api/customers/:id',(req,res)=>{
    const customer = customers.find(c=> c.id===parseInt(req.params.id))
    console.log(customer);
    if(!customer) res.status(404).send('ooppsss...........not find data')
    
    res.send(customer)
})

app.put('/api/customers/:id',(req,res)=>{
    const customer = customers.find(c=> c.id===parseInt(req.params.id))
    console.log(customer);
    if(!customer) res.status(404).send('ooppsss...........not find data')
    const{ error}= validateCustomer(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    
    res.send(customer)
})


app.post('/api/customers', (req,res)=>{
    const{ error}= validateCustomer(req.body);
    if(error){
        res.status(400).send(error.details[0].message)
        return;
    }
    const customer ={
        id: customers.length+1,
        title: req.body.title
    }
    customers.push(customer);
    res.send(customer);
})

function validateCustomer(customer){
    const schema={
        title: Joi.string().min(3).required()
    };
    return Joi.validate(customer,schema);
}

const port= process.env.PORT || 8082;
app.listen(port, ()=>console.log(`running on ${port}`))