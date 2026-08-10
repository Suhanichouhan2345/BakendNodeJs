const express = require("express");
const app = express();

app.use(express.json());

let users1 = [
    { id: 1, firstname: "Rahul", salary: 1000 },
    { id: 2, firstname: "Rohit", salary: 4000 },
    { id: 3, firstname: "Palak", salary: 5000 }
];


// ================= GET =================

// 1. Sabhi first names return kare
app.get("/firstnames", (req, res) => {

    let names = users1.map((user) => {
        return user.firstname;
    });

    res.json(names);
});


// 2. Salary 4000 ya usse jyada wale users return kare
app.get("/salary", (req, res) => {

    let result = users1.filter((user) => {
        return user.salary >= 4000;
    });

    res.json(result);
});


// ================= POST =================

// Naya user add kare
app.post("/add-user", (req, res) => {

    users1.push(req.body);

    res.json({
        message: "User Added Successfully",
        data: users1
    });

});

app.listen(2000, () => {
    console.log("Server Started on Port 2000");
});

//==========================================
app.get("/subject/:name", (req, res) => {

    let subjectName = req.params.name;

    let result = students.filter((student) => {
        return student.subject.toLowerCase() === subjectName.toLowerCase();
    });

    res.json(result);
});