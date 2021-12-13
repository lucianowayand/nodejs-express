const mongoose = require("mongoose")
const Schema = mongoose.Schema

const Strings = new Schema({
    string:{
        type: String,
        required: true
    },
    date_stamp: {
        type: Date,
        required: true,
        default: Date.now()
    }

})

mongoose.model("strings", Strings)