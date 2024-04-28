const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: { type: String, unique: true, trim: true },
    password: String,
});

module.exports = mongoose.model("User", userSchema);