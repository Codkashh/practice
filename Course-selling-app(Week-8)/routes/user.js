const { Router } = require("express");

const userRouter = Router();


userRouter.post("/signup", function(req, res) {
    res.json({
        message:"You are signed up"
    })
})

userRouter.post("/signin", function(req, res) {
    res.json({
        message:"You are signed up"
    })
})

userRouter.get("/purchases", function(req, res) {
    res.json({
        message:"You are signed up"
    })
}) 

module.exports = {
    userRouter : userRouter
}