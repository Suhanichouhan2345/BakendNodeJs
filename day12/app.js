const express = require("express");
const app = express();

const user = (req,res,next)=>{
    req.userName="Divyansh";
    next();
}

const getuser = (req,res,next)=>{
    res.message="Divyansh";
    next();
}

app.use(user)
app.use(getuser)

app.get("/user" , (req,res)=>{
    res.send("hello " + req.userName);
})

app.get("/getuser" , (req,res)=>{
    res.send(res.message);
})


app.listen(3000, ()=>{
    console.log("server stated");
})