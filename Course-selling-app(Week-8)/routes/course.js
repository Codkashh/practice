// Import express module 
// let express = require('express');
// Create a new Router instance for course routes
// let router = express.Router();


// Import Router from express module
const { Router } = require("express");

const { courseModel } = require("../db");

// Create a new Router instance for course routes
const courseRouter = Router();

// Define the course routes for previewing a course
courseRouter.get("/preview", function (req, res) {
    // you would expect the user to pay money to purchase a course

    res.json({
        message: "Priview endpoint!",
    });
});

// Define the course routes for getting all courses
courseRouter.get("/courses", function (req, res) {
    res.json({
        message: "Pourses endpoint!",
    });
});

// Export the courseRouter so that it can be used in other files
module.exports = {
    courseRouter: courseRouter,
};