const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://abhrasnataray:abhra123@cluster0.a9oqo.mongodb.net/user_app");

const User = mongoose.model("users", {
    name: String,
    email: String,
    password: String
});

app.use(express.json());

app.post("/signup", async function(req, res){

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    const existingUser = await User.findOne({email: email});
    if(existingUser){
        return res.status(400).send("Username already exists")
    }

    const user = new User({
        name: name,
        email: email,
        password: password
    });

    user.save();
    res.json({
        "msg":"User created succesfully"
    })
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");

})

