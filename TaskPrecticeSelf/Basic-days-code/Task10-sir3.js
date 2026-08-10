const express = require("express");
const app = express();

app.use(express.json());

app.post("/register", (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let age = req.body.age;

    if (!name || name.trim() === "") {
        return res.send({
            message: "Name is required"
        });
    }
    if (!email || email.trim() === "") {
        return res.send({
            message: "Email is required"
        });
    }

    if (age === undefined || age === null || age.toString().trim() === "") {
        return res.send({
            message: "Age is required"
        });
    }

    age = Number(age);

    if (isNaN(age)) {
        return res.send({
            message: "Age must be a valid number"
        });
    }

    if (age < 18) {
        return res.send({
            message: "Age must be 18+"
        });
    }

    res.send({
        message: "Registration Successful",
        users: {
            name,
            email,
            age
        }
    });

});

app.listen(3000, () => {
    console.log("running");
});