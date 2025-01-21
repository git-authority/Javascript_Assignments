const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhrasnataray:abhra123@cluster0.a9oqo.mongodb.net/user_app");

const User = mongoose.model("users", {
    name: String,
    email: String,
    password: String
});

const user = new User({
    name: "Abhrasnata Ray",
    email: "abhrasnataray@gmail.com",
    password: "123123"
});

user.save();
