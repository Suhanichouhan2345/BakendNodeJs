/*
Create

POST /student

Body

{
   "name":"Rahul",
   "course":"MERN",
   "marks":85
}

Rules

If any field is missing

Return

{
   "message":"All fields are required"
}

If marks is less than 33

Return

{
   "message":"Student Failed"
}

Otherwise

Return

{
   "message":"Student Added Successfully",
   "student":{
      "name":"Rahul",
      "course":"MERN",
      "marks":85
   }
}
*/


let express = require('express');
const app = express();

app.use(express.json());

app.post("/students",(req,res)=>{
    let name = req.body.name;
    let courese = req.body.course;
    let marks = req.body.marks;


    if(!name || !courese|| marks === undefined){
       return res.send({
            message:"All fields are required"
        })
    }
    if(marks < 33){
        return res.send({
           message:"Student Failed"
        })
    }
    return res.send({
        message :"Resgister Succesfull",
        student :{
            name,courese,marks
        }
    })
})



app.listen(2007,()=>{
    console.log(" port on ");
})