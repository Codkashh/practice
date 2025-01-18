// let express = require('express');
// Create a new Router instance for user routes
// let router = express.Router();


// Import Router from express module
const { Router } = require("express");
const { userModel } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
// Create a new Router instance for user routes
const userRouter = Router();

// Define the user routes for signup 
userRouter.post("/signup", async function (req, res) {
    const { email, password, firstName, lastName } = req.body;

    try {
        await userModel.create({
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
                message: "User already exist"
            }); 
        } else{
            res.status(500).json({
                message: "Internal server issue"
            });
        }
    }
});

// Define the user routes for signin 
userRouter.post("/signin",async function (req, res) {
    const { email, password } = req.body;
    const user = await userModel.findOne({
        email,
        password
    }) 

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);
        res.json({
            token: token
        });
    } else{
        res.status(403).json({
            message: "Invalid credentials!",
        });
    }
});

// Define the user routes for purchases made by the user
userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "Purchases endpoint!",
    });
});

// Export the userRouter so that it can be used in other files
module.exports = {
    userRouter: userRouter,
};