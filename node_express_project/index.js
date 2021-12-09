const express = require("express")

const app = express()

//Routes
app.get("/", function(req, res){
    res.send("Hi there you sonna of a bitch!")
})

app.get("/name_with_params/:name", function(req, res){
    res.send("Hi "+req.params["name"]+"!")
})



//Server callback
app.listen(1909, function(){
    console.log("Server running in the url: http://localhost:1909")
})

