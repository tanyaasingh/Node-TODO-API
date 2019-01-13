const {ObjectId}=require('mongodb')


const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

const {User}=require('./../server/models/user');
// var id="5c3a35d8c6955300e8cbccb9";

// if(!ObjectId.isValid(id)){
//     console.log('ID not valid')
// }
// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos)
// })

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo)
// })

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found')
//     }
//     console.log('Todo by id',todo)
// }).catch((e)=>console.log(e))

User.findById("5c3a3f0fc54c6c5118de6fb7").then((user)=>{
    if(!user){
        return console.log('Unable to find user')
    }
    console.log(JSON.stringify(user,undefined,2))
},(e)=>{
    console.log(e)
})
