/*
Create

POST /store

Body

{
  "products": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 50000,
      "quantity": 2,
      "category": "Electronics"
    },
    {
      "id": 2,
      "name": "Mouse",
      "price": 1000,
      "quantity": 5,
      "category": "Electronics"
    },
    {
      "id": 3,
      "name": "Pizza",
      "price": 300,
      "quantity": 3,
      "category": "Food"
    },
    {
      "id": 4,
      "name": "Burger",
      "price": 200,
      "quantity": 0,
      "category": "Food"
    }
  ],
  "searchId": 2,
  "category": "Electronics"
}

Rules

1. If products array is missing or empty
Return
{
   "message":"No Products Available"
}

2. Find the product whose id is equal to searchId.

3. Return only the products of the given category.

4. Ignore all products whose quantity is 0.

5. Add a new field "totalPrice" in every remaining product.
Formula:
price * quantity

6. Calculate the grand total of all remaining products.

Return

{
   "message":"Success",
   "searchedProduct": {...},
   "categoryProducts":[...],
   "grandTotal": ...
}
*/

let express = require("express");
let app = express();

app.use(express.json());

app.post("/store", (req, res) => {

    let products = req.body.products;
    let searchId = req.body.searchId;
    let category = req.body.category;

    if (!products || products.length === 0) {
        return res.send({
            message: "No Products Available"
        });
    }

    // Find Product
    let searchedProduct = products.find((product) => {
        return product.id === searchId;
    });

    // Category + Quantity Filter
    let categoryProducts = products.filter((product) => {
        return product.category === category && product.quantity > 0;
    });

    // Add totalPrice
    categoryProducts = categoryProducts.map((product) => {
        return {
            ...product,
            totalPrice: product.price * product.quantity
        };
    });

    // Grand Total
    let grandTotal = categoryProducts.reduce((acc, product) => {
        return acc + product.totalPrice;
    }, 0);

    return res.send({
        message: "Success",
        searchedProduct,
        categoryProducts,
        grandTotal
    });

});

app.listen(8080, () => {
    console.log("Server running on 8080");
});