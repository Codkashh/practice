const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "randomsecret"
const app = express();
app.use(express.json());
const user = [];

function generateToken() {
    let options = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9'];

    let token ="";
    for(let i=0; i<32; i++){
        token = token + options[Math.floor(Math.random() * options.length)];
    }

    return token;
}

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/signup", function(req, res){
    const username = req.body.username;
    const password = req.body.password;

    user.push({
        username:username,
        password:password
    })

    res.json({
        message:"You are signed in"
    })
})

app.post("/signin", function(req, res){

    const username = req.body.username;
    const password = req.body.username;

    
    let foundUser = user.find(function(u) {
        if(u.username == username && u.password == password) {
            return true;
        } else {
            return false;
        }
    })

    if(foundUser){
        const token = jwt.sign({
            username:username
        }, JWT_SECRET)
        res.json({
            message: token
        })
    } else{
        res.status(403).send({
            message:"Invalid username or password"
        })
    }
})

function auth(req, res, next) {
    const token = req.header.token;
    const decodedData = jwt.verify(token, JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next();
    } else{
        res.json({
            message:"You are not Logged in"
        })
    }
}

app.get('/me', auth, function(req, res){
    let foundUser = null;

    for(let i=0; i<user.length; i++){
        if(user[i].username == req.username){
            foundUser = user[i];
        }
    }

    if(foundUser){
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    } else{
        res.json({
            message:"Invalid token"
        })
    } 
})

app.listen(3000); 
 