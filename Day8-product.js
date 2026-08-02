const express = require("express");
const app = express();
app.get("/student", (req, res) => {
 console.log(req.query.productName);
    console.log(req.query.price);  
    console.log(req.query.brand); 
    console.log(req.query.price);
  res.send("Done");
});

app.listen(2006, () => {
    console.log("Server started on port 2006 :)");
});

//http://localhost:2006/student?productName=Laptop&price=50000&brand=HP&maxprice=9006
