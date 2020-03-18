const mongoose = require("mongoose");


const AuthorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        require: [true, "you fucked up"],
        minlength:[2, "not enough letters"]
    },
    lastName:{
        type: String,
        require:[true, "you fucked up"],
        minlength:[3, "not enough letters"]
    }

})
module.exports.Author = mongoose.model("Author", AuthorSchema);
