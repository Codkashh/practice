const bcrypt = require("bcrypt");
const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { z } = require("zod");
const JWT_SECRET = "akash"
mongoose.connect("mongodb+srv://aakashsharma162000:9Mwbou3ZNxS4x00z@cluster0.tld8z.mongodb.net/todo-app?retryWrites=true&w=majority").then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
});
const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const requiredBody = z.object({
        email: z.string(),
        password: z.string(),
        name: z.string()
    })

    const parsedDataWithSuccess = requiredBody.safeParse(req.body);

    if(!parsedDataWithSuccess.success){
        res.json({
            message:"Incorrect format",
            error:parsedDataWithSuccess.error
        })
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    const hashedPassword = await bcrypt.hash(password,5);

    await UserModel.create({
        email: email,
        password: hashedPassword,
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
    });

    if(!response){
        res.status(403).json({
            message:"User doesn't exist"
        })
    }

    const passwordMatch = await bcrypt.compare(password, response.password);

    if (passwordMatch) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

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