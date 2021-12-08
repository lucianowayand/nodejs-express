const express = require("express")

const app = express()


app.get("/", function(req, res){
    res.send("Hi there!")
})


app.listen(1909, function(){
    console.log("Server running in the url: http://localhost:1909")
})

