const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const JWT_SECRET = "akash"
mongoose.connect("mongodb+srv://aakashsharma162000:9Mwbou3ZNxS4x00z@cluster0.tld8z.mongodb.net/todo-app");
const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.create({
        email: email,
        password: password,
        name: name
    });
    
    res.json({
        message: "You are signed up"
    })
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email,
        password: password,
    });

    if (response) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET)

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});

function auth(req, res, next){
    const token = req.header.token;

    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData){
        req.userId = decodedData.id;
        next();
    } else{
        res.status(403).json({
            message:"Wrong credentials"
        })
    }
}

app.post("/todo", auth, function(req, res) {
    const userId = req.userId;

    res.json({
        userId: userId
    })
});

app.get("/todos", auth, function(req, res) {
    const userId = req.userId;

    res.json({
        userId: userId
    }) 
})

app.listen(3000);