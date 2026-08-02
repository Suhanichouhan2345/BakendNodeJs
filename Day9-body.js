/*
req.params → URL ke path se data leta hai.
req.query → URL ke ? ke baad wala data leta hai.
req.body → POST/PUT/PATCH request ke andar bheja gaya actual data receive karta hai.
*/

const express = require("express");
const app = express();

app.use(express.json()); // Body ka data read karega

app.post("/student", (req, res) => {
    console.log(req.body);       // Pura data
    console.log(req.body.name);  // Sirf name

    res.send("Data Received");
});

app.listen(2007, () => {
    console.log("Server Started");
});