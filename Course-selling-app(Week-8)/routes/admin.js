// let express = require('express');
// Create a new Router instance for admin routes
// let router = express.Router();


// Import Router from express module
const { Router } = require("express");
const jwt = require("jsonwebtoken");
const JWT_ADMIN_SECRET = "asasasasas";

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
adminRouter.get("/course", function (req, res) {
    res.json({
        message: "Purchases endpoint!",
    });
});

adminRouter.put("/course", function (req, res) {
    res.json({
        message: "Purchases endpoint!",
    });
});

adminRouter.post("/course", function (req, res) {
    res.json({
        message: "Purchases endpoint!",
    });
});

// Export the adminRouter so that it can be used in other files
module.exports = {
    adminRouter: adminRouter,
};