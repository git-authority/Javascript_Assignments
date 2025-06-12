const express = require("express");
const router = express.Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const { username, password } = req.body;

    // Check if the admin with this username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.status(403).json({ message: 'User already exists' });
    }

    // Create new admin if not exists
    await User.create({ username, password });

    res.json({ message: 'User created successfully' });
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic

    const response = await Course.find({})

    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const { username, password } = req.headers;

    const courseId = req.params.courseId;

    const user = await User.findOne({ username, password });

    const course = await Course.findById(course._id);

    if(!course){
        return res.status(403).json({
            message: "No such courses found"
        })
    }

    user.purchasedCourses.push(courseId);
    await user.save();

    res.json({ message: 'Course purchased successfully' });

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const { username, password } = req.headers;

    const user = await User.findOne({ username, password }).populate('purchasedCourses');

    if (!user) {
        return res.status(403).json({ message: "User not found" });
    }

    res.json({
        purchasedCourses: user.purchasedCourses
    });

});


module.exports = router