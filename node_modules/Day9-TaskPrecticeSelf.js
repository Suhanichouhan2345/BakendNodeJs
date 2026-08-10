const express = require('express');
const app = express();

console.log("==========================Task-1========================");
const students = [
    { id: 1, name: "Rahul", course: "MERN", city: "Bhopal" },
    { id: 2, name: "Aman", course: "Java", city: "Indore" },
    { id: 3, name: "Priya", course: "MERN", city: "Delhi" },
    { id: 4, name: "Neha", course: "Python", city: "Bhopal" },
    { id: 5, name: "Rohit", course: "Java", city: "Delhi" }
];

app.get('/students', (req, res) => {
    let result = students.filter((val) => {
        let course = req.query.course;
        let city = req.query.city;
        if (course && city) {
            return (val.course === req.query.course &&
                val.city === req.query.city)
        } else if (course) {
            return val.course === course;
        } else if (city) {
            return val.city === city;
        } else {
            return val;
        }
    })

    res.send(result)
})


/*
Questions
Return all students.
Return MERN students.
Return Java students.
Return students from Bhopal.
Return students from Delhi.
Return MERN students from Bhopal.
Return Java students from Delhi.
Return Python students from Bhopal.
Return MERN students from Delhi.
Return Java students from Indore.
*/




app.listen(2000, () => {
    console.log("server is onn");
})