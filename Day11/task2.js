let express = require('express');
const app = express();

let products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 50000,
    brand: "HP",
    city: "Bhopal"
  },
  {
    id: 2,
    name: "Mobile",
    category: "Electronics",
    price: 25000,
    brand: "Samsung",
    city: "Indore"
  },
  {
    id: 3,
    name: "Chair",
    category: "Furniture",
    price: 5000,
    brand: "Nilkamal",
    city: "Bhopal"
  },
  {
    id: 4,
    name: "Laptop",
    category: "Electronics",
    price: 60000,
    brand: "Dell",
    city: "Pune"
  }
];

app.use(express());

app.get('/products',(req,res)=>{
    return res.status(200).json({
     succes : true,
     products
    })
})

app.get('/products',(req,res)=>{
    let id = Number(req.params.id);
    let idVal = products.find((val)=>{
        return id == val.id;
    })

    if(isNaN(idVal)){
    return  res.status(401).json({
            succes : false,
            message : "invalid"
        })
    }
 return res.status(400).json({
    suees : true,
    id
 })
    
})

app.listen('7000',()=>{
    console.log("port on in 7000");
})