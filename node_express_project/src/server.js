const express = require("express")

const app = express()
const dir = __dirname

//Routes
app.get("/", function(req, res){
    res.sendFile(dir+"/views/main/index.html")
})

app.get("/about_us", function(req, res){
    res.sendFile(dir+"/views/about/index.html")
})


//Server callback
app.listen(1909, function(){
    console.log("Server running in the url: http://localhost:1909")
})

