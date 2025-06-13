const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db")
const jwt = require("jsonwebtoken")
const { JWT_SECRET } = require("../config.js")

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    const { username, password } = req.body;

    // Check if the admin with this username already exists
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
        return res.status(403).json({ message: 'Admin already exists' });
    }

    // Create new admin if not exists
    await Admin.create({ username, password });

    res.json({ message: 'Admin created successfully' });

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    const { username, password } = req.body;

    const admin = await Admin.find({
        username,
        password
    })

    if(admin){
        const token = jwt.sign({username}, JWT_SECRET);

        res.json({
            token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect Username and Password"
        })
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = await Course.create({
        title,
        description,
        price,
        imageLink
    });

    res.json({
        message: 'Course created successfully',
        courseId: newCourse._id
    })

});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const response = await Course.find({})

    res.json({
        courses: response
    })

});

module.exports = router;