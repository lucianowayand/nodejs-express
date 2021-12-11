// Importing modules
const express = require('express')
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
//const mongoose = require("mongoose")

//Configs
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

const dir = __dirname

//Routes
const routes = require("./routes/routes")
app.use("/", routes)


//Server callback
const PORT = 1909
app.listen(PORT, () => {
    console.log("Server running in the url: http://localhost:1909")

})
    

