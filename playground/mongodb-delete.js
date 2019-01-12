const {MongoClient,ObjectId}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('Unable to connect to mongo server ')
    }
    console.log('connected to mongo server')
    const db=client.db('TodoApp')
    //delete many
    // db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
    //     console.log(result)       
    // })

    //delete one
    // db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
    //     console.log(result)       
    // })


    //find one and delete
    db.collection('Todos').findOneAndDelete({compeleted:false}).then((result)=>{
        console.log(result)
    })    

})