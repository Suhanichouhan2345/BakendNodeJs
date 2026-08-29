let express = require('express');
let app = express();

let products = [
  {
    id: 1,
    name: "iPhone 15",
    category: "Mobile",
    brand: "Apple",
    price: 70000,
    rating: 4.6
  },
  {
    id: 2,
    name: "Galaxy S24",
    category: "Mobile",
    brand: "Samsung",
    price: 65000,
    rating: 4.5
  },
  {
    id: 3,
    name: "MacBook Air",
    category: "Laptop",
    brand: "Apple",
    price: 95000,
    rating: 4.8
  },
  {
    id: 4,
    name: "Dell Inspiron",
    category: "Laptop",
    brand: "Dell",
    price: 60000,
    rating: 4.2
  }
];


app.use(express.json());
app.get('/allproducts',(req,res)=>{
    return res.status(200).json({
        products,
        massage : "doneeeee"
    })
})

app.get("/products",(req,res)=>{
    let {category,brand,price,rating} = req.query.products;
    
})
app.listen(9098,()=>{
    console.log("done server is on ;)");
})