// rlavinsh_db_user
// igwAtnIXN2qrv3rW

// mongodb+srv://rlavinsh_db_user:igwAtnIXN2qrv3rW@cluster0.nt3pbun.mongodb.net/
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const connectDb = async () => {
  try {
    await mongoose.connect("");
    console.log("connected to Database");
  } catch (err) {
    console.log("Database not connected");
    console.log(err);
  }
};

const userSchema = mongoose.Schema({
  email: String,
  password: String,
});

const Users = mongoose.model("Users", userSchema);

connectDb();

// GetData

app.get("/user", async (req, res) => {
  const allUsers = await Users.find();
  return res.status(200).json({
    success: true,
    message: "All users fetched succesfully",
    allUsers,
  });
});

app.post("/user", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const newUser = await Users.create({
    email,
    password,
  });

  return res.status(201).json({
    success: true,
    message: "user created successfully",
    newUser,
  });
});

// delete

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await Users.findByIdAndDelete(id);
  if (!deletedUser) {
    return res.status(404).json({
      success: false,
      message: "User Not Found",
    });
  }
  return res.status(200).json({
    success: true,
    message: "User Deleted",
    deletedUser,
  });
});

app.listen(3000, () => {
  console.log(`server is running on 3000`);
});