const express=require("express");
const app=express();
app.use(express.json())

app.post("/register",(req,res)=>{
  // console.log(req.body);
  let name = req.body.name;
  let email = req.body.email;
  let age = Number(req.body.age);

  if(!name || !email || !age){
    return res.send({
       "message":"All fields are required"
    })
  }
  if(age=="age"){
    return res.send({
        "message":"Age must be a number"
    })

  if(age<18){
    return res.send({
        "message":"Age must be 18+"
    })
  }
    if (isNaN(age)) {
        return res.send({
            message: "Age must be a valid number"
        });
    }

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
