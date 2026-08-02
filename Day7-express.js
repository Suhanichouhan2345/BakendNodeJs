const express = require("express");
const app = express();
let user = {
    firstName: "Hello",
    age: 20
}
app.get("/", (req, res) => {
  res.send(user);
});
app.get("/about", (req, res) => {
  res.send("This is a about Page");
});
app.get("/contact",(req,res)=>{
    res.send("This is a contact Page")
});
app.listen(3000, () => {
  console.log("server running on port 3000");
});