const express = require("express");
const app = express();

app.get("/student/:id", (req, res) => {
    console.log(req.params.id);
  res.send("Hello");
});

app.listen(2015, () => {
    console.log("Server started on port 2015 :)");
});

//http://localhost:2015/student/101
