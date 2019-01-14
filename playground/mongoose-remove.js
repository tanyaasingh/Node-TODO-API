const {ObjectId}=require('mongodb')


const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');

const {User}=require('./../server/models/user');

//removes all
// Todo.remove().then((result)=>{
//     console.log(result)
// })

//Todo.findOneAndRemove()


// Todo.findByIdAndRemove('some id').then((todo)=>{
//     console.log(todo)
// })

// Todo.findOneAndRemove({_id:' '}).then((todo)=>{

// })