// Importing modules
const express = require('express')
const app = express()
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")
const path = require("path")

//Configs
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars');
app.set('views', './views');

mongoose.Promise = global.Promise
mongoose.connect("mongodb://localhost/node_project").then(() => {
    console.log("Connected to MongoDB!")
}).catch((err) => {
    console.log("Couldn't connect: "+err)
})

app.use(express.static(path.join(__dirname,"public")))

const dir = __dirname

//Routes
const routes = require("./routes/routes")
app.use("/", routes)


//Server callback
const PORT = 1909
app.listen(PORT, () => {
    console.log("Server running in the url: http://localhost:1909")

})
    

