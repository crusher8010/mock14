const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: [true, "A User must have a Email"]
    },
    password: {
        type: String,
    }
});

const user = mongoose.model("User", userSchema);

module.exports = user;