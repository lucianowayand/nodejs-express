const express = require("express")
const router = express.Router()
const dir = __dirname.replace("/routes","")

router.get("/", function(req, res){
    res.sendFile(dir+"/views/main/index.html")
})

router.get("/about_us", function(req, res){
    res.sendFile(dir+"/views/about/index.html")
})

module.exports = router