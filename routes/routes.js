const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Strings")
const Strings = mongoose.model("strings")

router.get("/", function(req, res){
    res.render("main/index")
})

router.get("/about", function(req, res){
    res.render("about/index")
})

router.get("/forms", function(req, res){
    res.render("forms/index")
})

router.post("/forms/new", (req, res) => {
    new Strings({string: req.body.string}).save().then(() => {
        console.log("Data added to the database, new string "+req.body.string+" was added.")
        res.render("about/index")
    }).catch((err) => {
        console.log("Something went wrong: "+err)
    })
})


module.exports = router