let express = require('express');
let app = express();

app.use(express.json());
app.post('/register',(req,res)=>{
let name = req.body.name;
let email = req.body.email;
let age = req.body.age;
console.log(age,name,email)
if(!name || !email || !age){
    return res.send( "All fiels are reaquare ");
}
if(age >18){
    res.send('need age  18++');
} 
res.send('done');
})

app.listen(2007,()=>{
    console.log("server is done ");
})