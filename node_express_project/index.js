const express = require("express")

const app = express()

//Routes
app.get("/", function(req, res){
    res.send("Hi there!")
})

app.get("/about_us", function(req, res){
    res.send("Hi About!")
})



//Server callback
app.listen(1909, function(){
    console.log("Server running in the url: http://localhost:1909")
})

