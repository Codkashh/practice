const express = require('express');
const users = require("./MOCK_DATA.json");
const fs = require('fs');
const app = express();
const PORT = 8000;

app.use(express.json());

app.post("/todo", function(req,res){

})

app.get("/todo", function(req,res){
    
})

app.put("/todo", function(req,res){
    
})