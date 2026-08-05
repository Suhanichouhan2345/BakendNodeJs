let express = require('express');
let app = express();
let students = [
    { id: 1, name: "Rahul", course: "MERN", marks: 80 },
    { id: 2, name: "Aman", course: "Java", marks: 70 },
    { id: 3, name: "Riya", course: "Python", marks: 90 }
];

app.delete('/students/:id',(req,res)=>{
let ID = Number(req.params.id);

let result = students.filter((val)=>{
    return val.id !== ID;
})
res.send(result);
})
app.listen(7070,()=>{
    console.log("port runn on 7070");
})

//http://localhost:7070/students/2