/*
Create

POST /order

Body

{
   "customer":"Rahul",
   "item":"Pizza",
   "quantity":3
}

Rules

If any field is missing

Return

{
   "message":"All fields are required"
}

If quantity is less than or equal to 0

Return

{
   "message":"Invalid Quantity"
}

If quantity is greater than 5

Return

{
   "message":"You can order maximum 5 items"
}

Otherwise

Assume price of one Pizza = 200

Calculate total amount.

Return

{
   "message":"Order Placed Successfully",
   "order":{
      "customer":"Rahul",
      "item":"Pizza",
      "quantity":3,
      "total":600
   }
}
*/

let express = require('express');
let app = express();

app.use(express.json());
app.post('/order',(req,res)=>{
let customer = req.body.customer;
let item = req.body.item;
let quantity = req.body.quantity;
//let total = req.body.total;

if(!customer || !item || quantity === undefined ){
    return res.send({
         message : " All field  requare"
    })
}

if(quantity <= 0){
    return res.send({
        message:"invalid Quantity"
    })
}
if(quantity > 5){
    return res.send({
    message : " your oder is maximum 5 items"
    })
}
let total = 200 * quantity;
res.send(total);

return res({
    message : " Done Succesfull work ",
    customer,
    item,
    quantity,
    total,
})

})

app.listen(9090,()=>{
    console.log("port on 9090");
})


// current value is the value are commit form the side of valuesfor converstion and through the vales from conversion values form the contry values and through the functions of formulalization form of the throw contribution .