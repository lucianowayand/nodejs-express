const express = require("express")
const router = express.Router()

router.get("/", function(req, res){
    res.render("main/index")
})

router.get("/about", function(req, res){
    res.render("about/index")
})

module.exports = router