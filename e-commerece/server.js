
const express = require('express');
const app = express();
app.use(express.json());

let products = [{id:1,name:'Laptop',price:50000}];
let orders = [];

app.get('/api/products',(req,res)=>res.json(products));

app.post('/api/products',(req,res)=>{
  products.push(req.body);
  res.json({message:'Product added'});
});

app.post('/api/orders',(req,res)=>{
  orders.push(req.body);
  res.json({message:'Order placed'});
});

app.get('/api/orders',(req,res)=>res.json(orders));

app.listen(3000,()=>console.log('Server running on port 3000'));
