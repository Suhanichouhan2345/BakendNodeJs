const express = require("express");
const app = express();

const mongoose = require("mongoose");

// Database connection
const connectToDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017");

        console.log("database connected");
    } catch (err) {
        console.log(err);
    }
};

// Schema
const bookSchema = new mongoose.Schema({
    Bookname: String,
    price: Number
});

// Model
const Book = mongoose.model("Book", bookSchema);

// GET all books
app.get("/book", async (req, res) => {
    try {
        const allBook = await Book.find({});

        return res.status(200).json(allBook);
    } catch (err) {
        return res.status(500).json({
            message: "Error fetching books",
            error: err.message
        });
    }
});

// Server
app.listen(3000, () => {
    connectToDB();
    console.log("server running on port 3000");
});