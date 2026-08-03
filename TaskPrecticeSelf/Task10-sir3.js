
const express = require("express");

const app = express();

// JSON body read karne ke liye
app.use(express.json());

app.post("/register", (req, res) => {
    const { name, email, age } = req.body;

    // Check if any field is missing
    if (!name || !email || age === undefined) {
        return res.json({
            message: "All fields are required"
        });
    }

    // Check age
    if (age < 18) {
        return res.json({
            message: "Age must be 18+"
        });
    }

    // Success
    res.json({
        message: "Registration Successful",
        user: {
            name,
            email,
            age
        }
    });
});

app.listen(2000, () => {
    console.log("Server started on port 2000");
});