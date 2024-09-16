const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://aakashsharma162000:gAgO7n5vBPrSqbb6@cluster0.vy3hrj1.mongodb.net/")
const todSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todo',todoschema); 

model.exports = {
    todo
}