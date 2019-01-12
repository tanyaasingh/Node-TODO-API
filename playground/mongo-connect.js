// const MongoClient=require('mongodb').MongoClient;
//or
const {MongoClient,ObjectId}=require('mongodb');
// var obj=new ObjectID();
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to mongo server ')
    }
    console.log('connected to mongo server')
    const db=client.db('TodoApp')
    db.collection('Todos').find({
        _id: new ObjectId('5c39fc39b3586e15647b2f30')
    }).toArray().then((docs)=>{
        console.log('TODOS')
        console.log(JSON.stringify(docs,undefined,2))
    }),(err)=>{
        console.log('Unable to fetch todos',err)
    }
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed:false

    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert todo',err)
    //     }
    //     console.log(JSON.stringify(result.ops))
    // }
    // )
    // db.collection('Users').insertOne({
    //     name:'Tanyaa',
    //     age:21,
    //     location:'New Delhi'

    // },(err,result)=>{
    //     if(err){
    //         return console.log('unable to insert user',err)
    //     }
    //     console.log(JSON.stringify(result.ops))
    // }
    // )
    client.close()
})