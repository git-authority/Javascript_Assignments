const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic

    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    if(decodedValue.username){
        next()
    }
    else{
        res.status(403).json({
            message: "You are not authenticated"
        })
    }

}

module.exports = adminMiddleware;