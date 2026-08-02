const express = require("express");
const app = express();

app.use(express.json());

let students = [
    { id: 1, name: "Rahul", course: "Node" },
    { id: 2, name: "Aman", course: "React" }
];

// GET - All Students
app.get("/allStudents", (req, res) => {
    res.json(students);
});

// POST - Create Student
app.post("/createStudents", (req, res) => {
    students.push({ id: 3, name: "Priya", course: "Java" });
    res.send("Student Added");
});

// PATCH - Update Student Detail
app.patch("/updateStudentDetail", (req, res) => {
    students[1].course = "MERN";
    res.send("Student Course Updated");
});

// PUT - Replace Student
app.put("/updateStudent", (req, res) => {
    students[1] = { id: 2, name: "Aman", course: "MERN Stack" };
    res.send("Student Replaced");
});

// DELETE - Delete Student
app.delete("/deleteStudent", (req, res) => {
    students.pop();
    res.send("Student Deleted");
});

// Route Not Found
app.use((req, res) => {
    res.status(404).send("Route Not Found");
});

// Server
app.listen(2007, () => {
    console.log("Server running on port 2007");
});