const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email: String,
    password: String,
    name: String
})

const Todo = new Schema({
    userId: ObjectId,
    tittle: String,
    done: Boolean
})

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
    UserModel,
    TodoModel
}