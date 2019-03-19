let express = require("express");
let app = express();
var path = require("path");


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname,"index.html"));
})

app.listen(7000, (req,res) => {
    console.log("Server Started...")
})