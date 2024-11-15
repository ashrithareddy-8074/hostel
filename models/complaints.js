var mongoose = require("mongoose");

var complaintSchema = new mongoose.Schema({
    type: String,
    description: String,
    level: Number,
    status: {
        type: String,
        enum: ["resolved", "pending"],
        default: "pending"
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
});

module.exports = mongoose.model("Complaint", complaintSchema);