const express = require("express");
const mongoose = require("mongoose");
const dns = require("dns");

const app = express();

dns.setServers([
    "8.8.8.8",
    "1.1.1.1"
]);

const connectToDB = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://suhanichouhan967_db_user:DxQT45G0Xn6eOeqL@cluster0.q27cbvm.mongodb.net/"
        );

        console.log("database connected :)");

    } catch (err) {
        console.log(err);
    }
};

connectToDB();

app.listen(3000, () => {
    console.log("server running");
});