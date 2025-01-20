const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json())

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh"
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh"
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari"
  }
];

function userExists(username, password) {
  let userFound = ALL_USERS.find(element => element.username === username && element.password === password)
  if (userFound !== undefined){
    return true;
  }
  else{
    return false;
  }
}


app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;


  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }
  else {
    var token = jwt.sign({ username: username }, jwtPassword);
    return res.json({ token });
  }
});


app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    return res.json({
      users: ALL_USERS.filter((value)=>{
        if(value.username === username)
        {
          return false;
        }
        else{
          return true;
        }
      })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000, () => {
  console.log("Server is running on Port 3000");

})