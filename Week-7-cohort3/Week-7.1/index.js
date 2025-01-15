const express = require("express");
const { UserModel, TodoModel } = require("./db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "akash"
const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    await UserModel.insert({
        email:email,
        password:password,
        name:name
    })
    
    res.json({
        message:"You are Logged In"
    })
});

app.post("/signin", function(req, res) {
    const email = req.body.email;
    const password = req.body.email;

    const user = UserModel.findOne({
        email: email,
        password: password
    })

    if(user){
        const token = jwt.sign({
            id: user._id
        })
        res.json({
            token: token
        });
    } else{
        res.status(403).json({
            message: "Incorrect Credentials"
        })
    }
});

app.post("/todo", function(req, res) {
    
});

app.get("/todos", function(req, res) {
    
})

app.listen(3000);