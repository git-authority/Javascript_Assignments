const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db")

// Create a new router instance to define admin/user-specific routes separately from the main app
const router = express.Router();


router.post('/signup', async (req, res) => {
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