const express = require("express")

const app = express()
const dir = __dirname

//Routes
app.get("/", function(req, res){
    res.send("Home")
})

app.get("/about_us", function(req, res){
    res.send("About us")
})


//Server callback
app.listen(1909, function(){
    console.log("Server running in the url: http://localhost:1909")
})

