const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://akankshasinghmas:Akarshit256742@cluster0.m0iylx7.mongodb.net/todos")
const todoSchema=mongoose.Schema({
    title: String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model('todos',todoSchema);
module.exports={
    todo
}