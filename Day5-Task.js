let http = require('http');
let server = http.createServer((req,res)=>{
    if(req.url == "/allbooks" && req.method == "GET"){
        res.end("All book");
    } else  if(req.url == "/createbook" && req.method == "POST"){
        res.end("Create Book");
    }else if(req.url == "/updatebook" && req.method  == "PUT"){
        res.end("update book");
    } else if(req.url == "/autherupdate"  && req.method == "PATCH"){
        res.end("Auther name update");
    } else if(req.url == "/deletebook" && req.method == "DELETE"){
        res.end("delete book ");
    }else{
        res.end(" book are not found ");
    }
})

server.listen(2007,()=>{
    console.log("Server on post 2007");
})



