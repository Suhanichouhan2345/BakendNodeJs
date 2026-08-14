
let express = require('express');
let app = express();

let employees = [
    {
        id: 1,
        name: "Rahul Sharma",
        department: "Development",
        designation: "Frontend Developer",
        salary: 55000,
        experience: 2,
        city: "Indore",
    },
    {
        id: 2,
        name: "Priya Verma",
        department: "Development",
        designation: "Backend Developer",
        salary: 65000,
        experience: 3,
        city: "Bhopal",
    },
    {
        id: 3,
        name: "Amit Singh",
        department: "HR",
        designation: "HR Executive",
        salary: 42000,
        experience: 1,
        city: "Delhi",
    },
    {
        id: 4,
        name: "Sneha Patel",
        department: "Testing",
        designation: "QA Engineer",
        salary: 50000,
        experience: 2,
        city: "Ahmedabad",
    },
    {
        id: 5,
        name: "Rohit Jain",
        department: "Development",
        designation: "Full Stack Developer",
        salary: 80000,
        experience: 5,
        city: "Pune",
    },
];

app.use(express.json());

app.get("/employe", (req, res) => {
    return res.status(200).json({
        success: true,
        message: "all employes",
        employees
    });
})

app.get("/employe/:id", (req, res) => {
    let Id = Number(req.params.id);
    //console.log(Id);
    if (isNaN(Id) || Id <= 0) {
        return res.status(400).json({
            succes: false,
            massage: "invalid"
        })
    }
    let user = employees.find((val) => Id === val.id);
    if (!user) {
        return res.status(404).json({
            succes: false,
            message: "user not find"
        });1
    }

    return res.status(200).json({
        succes: true,
        message: "user found",
        user,
    })
})
    app.post("/employes", (req, res) => {
        const { name, department, designation, salary, experience, city } = req.body;


        if (!name || !department || !designation || salary === undefined || experience === undefined || !city) {
            return res.status(400).json({
                succes: false,
                message: "all feilds are requared"
            })
        }
        let newemp = {
            id: employees[employees.length - 1].id + 1,
            name,
            department,
            designation,
            salary,
            experience,
            city,
        }
        employees.push(newemp);
        return res.status(201).json({
            succes:true,
            massage:"User created",
            newemp

        });
    })
app.delete("/employes/:id", (req, res) => {
    let Id = Number(req.params.id);

    let index = employees.findIndex((val) => Id === val.id);

    if (index === -1) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }

    employees.splice(index, 1);

    res.status(200).json({
        message: "Employee deleted successfully"
    });
});

app.get("/employees", (req, res) => {
    let department = req.query.department;

    if (department) {
        let result = employees.filter((val) => {
            return val.department === department;
        });

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Department not found"
            });
        }

        return res.status(200).json({
            success: true,
            data: result
        });
    }

    res.status(200).json({
        success: true,
        data: employees
    });
});
app.get("/employees", (req, res) => {
    let department = req.query.department;
    let city = req.query.city;

    let result = employees.filter((val) => {
        return val.department === department && val.city === city;
    });

    if (result.length === 0) {
        return res.status(404).json({
            success: false,
            message: "Employee not found"
        });
    }

    res.status(200).json({
        success: true,
        data: result
    });
});

app.listen(9000, () => {
    console.log("server stareted at 9000");
})