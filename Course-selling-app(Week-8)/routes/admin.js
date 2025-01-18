// let express = require('express');
// Create a new Router instance for admin routes
// let router = express.Router();


// Import Router from express module
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { JWT_ADMIN_SECRET } = require("../config");
const { adminMiddleware } = require("../middleware/admin");
// Create a new Router instance for admin routes
const adminRouter = Router();

// Define the admin routes for signup 
adminRouter.post("/signup",async function (req, res) {
    const { email, password, firstName, lastName } = req.body;

    try {
        await adminModel.create({
            email,
            password,
            firstName,
            lastName
        })
        res.json({
            message: "Signup endpoint!",
        });
    } catch (error) {
        if(error.code === 11000){
            return res.status(400).json({
                message: "Admin already exist"
            }); 
        } else{
            res.status(500).json({
                message: "Internal server issue"
            });
        }
    }
});

// Define the admin routes for signin 
adminRouter.post("/signin",async function (req, res) {
    const { email, password } = req.body;
    const admin = await adminModel.findOne({
        email,
        password
    }) 

    if(admin){
        const token = jwt.sign({
            id: user._id
        }, JWT_ADMIN_SECRET);
        res.json({
            token: token
        });
    } else{
        res.status(403).json({
            message: "Invalid credentials!",
        });
    }
});

// Define the admin routes for purchases made by the admin
adminRouter.get("/course",adminMiddleware ,async function (req, res) {
    const adminId = req.userId;
    // Get title, description, imageUrl, and price from the request body
    const { title, description, imageUrl, price } = req.body;

    // Create a new course with the given title, description, imageUrl, price, and creatorId
    const course = await courseModel.create({
        title,
        description,
        imageUrl,
        price,
        creatorId: adminId,
    });

    // Respond with a success message if the course is created successfully
    res.status(201).json({
        message: "Course created!",
        courseId: course._id,
    });
});

adminRouter.put("/course",async function (req, res) {
    const adminId = req.userId;
    // Get title, description, imageUrl, and price from the request body
    const { title, description, imageUrl, price, courseId } = req.body;

    // Create a new course with the given title, description, imageUrl, price, and creatorId
    const course = await courseModel.updateOne({
        _id: courseId,
        creatorId: adminId
    },
        {
        title,
        description,
        imageUrl,
        price,
    });

    // Respond with a success message if the course is created successfully
    res.json({
        message: "Course Updated!",
        courseId: course._id,
    });
});

adminRouter.post("/course",async function (req, res) {
    const adminId = req.userId;
    // Get title, description, imageUrl, and price from the request body
    const { title, description, imageUrl, price, courseId } = req.body;

    // Create a new course with the given title, description, imageUrl, price, and creatorId
    const course = await courseModel.find({
        creatorId: adminId
    });

    // Respond with a success message if the course is created successfully
    res.json({
        message: "Course Updated!",
        course
    });
});

// Export the adminRouter so that it can be used in other files
module.exports = {
    adminRouter: adminRouter,
};