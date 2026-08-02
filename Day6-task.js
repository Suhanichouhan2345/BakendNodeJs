let http = require('http');
let students = [ 
    { id: 1, name: "Rahul", course: "Node", }, 
    { id: 2, name: "Aman", course: "React", },
 ];

 let server = http.createServer((req,res)=>{
     if(req.url == "/allStudents" && req.method === "GET"){
         res.end(JSON.stringify(students));
     }  if(req.url == "/createStudents" && req.method === "POST"){
        students.push( { id: 3, name: "Priya", course: "Java" });
         res.end("Student Added");
     } if(req.url == "/updateStudentDetail" && req.method === "PATCH"){
       students[1].course = 'MERN';
     } if(req.url == "/updateStudent" && req.method === "PUT"){
         if(students.name == "Aman");{
      students.replace({ id: 3, name: "Priya", course: "Java" }); }
        res.end( "Student Replaced" );
     }if(req.url == "/deleteStudent" && req.method === "DELETE"){
            students.pop();
        res.end( "Student deleted" );
     }
     else{
         res.end( "Route Not Found" );
     }
 })
 server.listen(2007,()=>{
     console.log("Server on post 2007 done");
 })
 
 
//http://localhost:2007/allStudents










