const express=require("express");
const app=express();
app.use(express.json())
app.post("/register",(req,res)=>{
  // console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let age = req.body.age

  console.log(name,email,age);

if (!name || !email || req.body.age === undefined) {
    return res.send({
        message: "All fields are required"
    });
}
if (isNaN(age)) {
    return res.send({
        message: "Age must be a number"
    });
}

if (age <= 0) {
    return res.send({
        message: "Age must be greater than 0"
    });
}

  res.send({
    message: "Registration Successful",
    users:{
      name,email,age
    }
  })
  
})

app.listen(3000,()=>{
  console.log("running")
})