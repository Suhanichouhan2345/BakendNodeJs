let express = require('express');
const app = express();
const employees = [
  { id: 1, name: "Rahul", department: "IT", city: "Bhopal", salary: 50000, experience: 2, active: true },
  { id: 2, name: "Aman", department: "HR", city: "Indore", salary: 35000, experience: 5, active: false },
  { id: 3, name: "Neha", department: "IT", city: "Delhi", salary: 65000, experience: 7, active: true },
  { id: 4, name: "Priya", department: "Sales", city: "Bhopal", salary: 45000, experience: 3, active: true },
  { id: 5, name: "Rohit", department: "HR", city: "Delhi", salary: 55000, experience: 8, active: false }
];

/*
Return employees whose salary is greater than the salary given by the user 40000.
Return employees whose experience is greater than the experience given by the user 3 year.
Return employees whose department is given by the user AND whose salary is greater than the salary given by the user /employees?department=IT&salary=50000
Return employees whose city is given by the user AND who are active.
Handle all these cases in one route:

No query → Return all employees.
Only department.
Only city.
Only salary.
Department + City.
Department + Salary.

⚠️ Rule: Ek hi route banana hai.
*/


app.get("/employes",(req,res)=>{
let result = employees.filter((val)=>{
    let salary = req.query.salary;
     let name = req.query.name;
     let dep = req.query.department;
     let exp = req.query.experience;
     if(salary){
     return val.salary > salary;
     }if(exp && dep){
        return val.experience > Number(exp) && val.department === dep;
     }
      if(exp){
        return val.experience > exp;
     } 
})
res.send(result)
})



app.listen(2000,()=>{
    console.log("Server On Donnnneeee Is Khushi Main JAI SHREE RAAM Bolna toh banata h JAI SHREE RAAM :)");
})

//acha matalab url main se value chaiye toh parama or url ain value dame h or dekhte h toh quare esa kuch  