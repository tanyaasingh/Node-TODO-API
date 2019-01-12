const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to mongo server ')
    }
    console.log('connected to mongo server')
    const db=client.db('TodoApp')
    //  db.collection('Todos').findOneAndUpdate({
    //      _id:new ObjectId("5c3a1e6b4751b4399483c9a4"),
    //  },{
    //      $set:{
    //          completed:true
    //      }
    //  },{
    //      returnOriginal:false
    //  }
    //  ).then((result)=>{
    //      console.log(result)
    //  })
    db.collection('Users').findOneAndUpdate({
        _id:new ObjectId("5c39fd4135c0c10c28c169ed"),
    },{
        $set:{
            name:'Mia'
        },
        $inc:{
            age:1
        }
    },{
        returnOriginal:false
    }
    ).then((result)=>{
        console.log(result)
    })

})