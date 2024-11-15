var mongoose = require("mongoose");

var noticeSchema = new mongoose.Schema({
    title: String,
    description: String,
    emergencyLevel : Number
});

module.exports = mongoose.model("Notice", noticeSchema);