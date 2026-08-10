let express = require('express');
const app = express();

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2500 },
  { id: 4, name: "Monitor", price: 12000 },
];

app.get("/product/:id",(req,res)=>{
    let ID = Number(req.params.id);
let product = products.find((val)=>{
    return val.id === ID
})
if(!product){
    res.send("not there ");
}
let discount = product.price - product.price*0.10;
res.send({
    ...product,
    discount
})
})


app.listen(4000,()=>{
    console.log("Server On")
})