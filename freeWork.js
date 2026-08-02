const express = require("express");
const app = express();

const students = [
  { id: 1, name: "Rahul", course: "MERN", city: "Bhopal" },
  { id: 2, name: "Aman", course: "Java", city: "Indore" },
  { id: 3, name: "Priya", course: "MERN", city: "Delhi" },
  { id: 4, name: "Neha", course: "Python", city: "Delhi" },
  { id: 5, name: "Rohit", course: "Java", city: "Bhopal" }
];

app.get("/students", (req, res) => {

    let { course, city } = req.query;

    let result = students;

    if (course) {
        result = result.filter((student) => {
            return student.course === course;
        });
    }
    
    if (city) {
        result = result.filter((student) => {
            return student.city === city;
        });
    }

    res.send(result);
});

app.listen(2000, () => {
    console.log("Server started on port 2000");
});




