const express = require("express");
const app = express();
const pizzas = [
  {
    id: 1,
    pizzaName: "Margherita",
    category: "Veg",
    price: 249,
    availability: true
  },
  {
    id: 2,
    pizzaName: "Farmhouse",
    category: "Veg",
    price: 349,
    availability: true
  },
  {
    id: 3,
    pizzaName: "Veggie Paradise",
    category: "Veg",
    price: 399,
    availability: false
  },
  {
    id: 4,
    pizzaName: "Pepper Barbecue ",
    category: "Non-Veg",
    price: 499,
    availability: true
  },
  {
    id: 5,
    pizzaName: " Dominator",
    category: "Non-Veg",
    price: 599,
    availability: true
  },
  {
    id: 6,
    pizzaName: " Sausage",
    category: "Non-Veg",
    price: 449,
    availability: false
  },
  {
    id: 7,
    pizzaName: "Cheese n Corn",
    category: "Veg",
    price: 299,
    availability: true
  },
  {
    id: 8,
    pizzaName: "Mexican Green Wave",
    category: "Veg",
    price: 429,
    availability: true
  },
  {
    id: 9,
    pizzaName: "Indi  Tikka",
    category: "Non-Veg",
    price: 549,
    availability: true
  },
  {
    id: 10,
    pizzaName: "Paneer Makhani",
    category: "Veg",
    price: 459,
    availability: false
  }
];

// getAllPizza  -> poora data aa jaye.
// getSinglePizza/3 -> mere pass woh pizza aana chaiye jiski id 3 ho.
// category -> ager veg bhej rhe toh veg hi ana chaiye.
app.get("/getAllPizza", (req, res) => {
  const category = req.query.category;
  if (category) {
    let vegPizza = pizzas.filter((pizza) => {
      return category == pizza.category;
    });
    res.send(vegPizza);
  }
});
app.get("/getAllPizza/:id", (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  // mujhe pata hein ki mere pass array of objects
  let result = pizzas.find((item) => {
    return id == item.id;
  });
  res.send(result);
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});