let express = require("express");
let app = express();
var path = require("path");

app.set("view engine","ejs");
app.get("/", (req,res) => {
    res.render("index");
})

app.listen(7000, (req,res) => {
    console.log("Server Started...")
})