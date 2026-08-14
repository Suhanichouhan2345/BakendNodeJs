
let http = require('http');

let server = http.createServer((req,res)=>{
    if(req.url == "/student" && req.method == "GET"){
        res.end("Get Method Working on there");
    } else  if(req.url == "/student" && req.method == "POST"){
        res.end("POST method working now ");
    }else if(req.url == "/student" && req.method  == "PUT"){
        res.end("PUT mehtod are there going on");
    } else if(req.url == "/student"  && req.method == "PATCH"){
        res.end("PATCH method is there");
    } else if(req.url == "/student" && req.method == "DELETE"){
        res.end("DELETE method ");
    }else{
        res.end(" not method are found ");
    }
})

server.listen(3000,()=>{
    console.log("Server on post 3000");
})
   