let express = require('express');
const app = express();

const pizzas = [
  {
    id: 1,
    pizzaName: "Margherita",
    category: "Veg",
    price: 249
  },
  {
    id: 2,
    pizzaName: "Farmhouse",
    category: "Veg",
    price: 349
  },
  {
    id: 3,
    pizzaName: "Pepperoni",
    category: "Non-Veg",
    price: 499
  },
  {
    id: 4,
    pizzaName: "Cheese Burst",
    category: "Veg",
    price: 399
  },
  {
    id: 5,
    pizzaName: "Chicken Dominator",
    category: "Non-Veg",
    price: 599
  }
];

app.post('/pizza/:id',(req,res)=>{
    let id = Number(req.params.id);
   let findId = pizzas.find((val)=>{
    return val.id === id;
   })
   res.send(findId)
})

app.listen(4000,()=>{
    console.log(" server start :) ")
})