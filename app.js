let express = require("express");
let app = express();
let path = require("path");

app.set("view engine","ejs");
app.get("/", (req,res) => {
    res.render("home");
})

app.listen(8000, (req,res) => {
    console.log("Server Started...")
})