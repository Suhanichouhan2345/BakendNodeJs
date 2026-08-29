let express = require('express');
const app = express();

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
    name: "Inspiron 15",
    category: "Laptop",
    brand: "Dell",
    price: 60000,
    rating: 4.2
  }
]

app.use(express.json());

//Task 1)  Return all products.
app.get('/allProduct',(req,res)=>{
    return res.status(200).json({
        massage : "done..",
        products

    })
})


// Task 2) Filter products using Query Parameters.
app.get('/product',(req,res)=>{
    let price = Number(req.query.price);
    let name = req.query.name;
    let rating = Number(req.query.rating);
    let category = req.query.category;

     let result = products; 

    if(price){
        result = result.filter((val)=>{
            return val.price === price;
        })
    }
    if(name){
        result = result.filter((val)=>{
            return val.name === name;
        })
    } 
    if(rating){
        result = result.filter((val)=>{
            return val.rating === rating;
        })
    }
    if(category){
        result = result.filter((val)=>{
            return val.category === category;
        })
    }    
    return res.status(200).json({
        result
    })

})

// Task3)  GET /product/:id
app.get('/productId/:id',(req,res)=>{
let id = Number(req.params.id);

let result = products.find((val)=>{
    return val.id === id;
})

if(!result){
    return res.status(401).json({
        message : "invalid id"
    })
}
return res.status(200).json({
    result
})
})

//Task 4) POST /createProduct
app.post('/createProducts',(req,res)=>{
    let newProduct = {
        id:products.length+1,
        name : req.body.name,
        category : req.body.category,
        brand : req.body.brand,
        price : req.body.price,
        rating : req.body.rating
    }

    products.push(newProduct);
    return res.status(200).json({
        massage : "Done ...."
    })
})
// Task 5) Update Product Price
app.patch("/updateProductPrice/:id/:price", (req, res) => {

    let id = Number(req.params.id);
    let price = Number(req.params.price);

    let value = products.find((val) => {
        return val.id === id;
    });

    if (!value) {
        return res.status(404).json({
            message: "Invalid product id"
        });
    }

    value.price = price;

    return res.status(200).json({
        message: "Price updated successfully",
        product: value
    });
});
app.listen(5050,()=>{
    console.log("server on at 5050");
})