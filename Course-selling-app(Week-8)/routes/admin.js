// let express = require('express');
// Create a new Router instance for admin routes
// let router = express.Router();


// Import Router from express module
const { Router } = require("express");

// Create a new Router instance for admin routes
const adminRouter = Router();

// Define the admin routes for signup 
adminRouter.post("/signup", function (req, res) {
    res.json({
        message: "Signup endpoint!",
    });
});

// Define the admin routes for signin 
adminRouter.post("/signin", function (req, res) {
    res.json({
        message: "Signin endpoint!",
    });
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