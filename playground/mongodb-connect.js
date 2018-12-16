//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return console.log('unable to connect');

    }
    console.log('connectted to omngo bd');
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //   text: 'Something to do',
    //   completed: false
    // },(err,result)=>{
    //   if(err){
    //     return console.log('unable to insert to do',err);
    //   }
    //   console.log(JSON.stringify(result.ops,undefined,2));
    // });
    // db.collection('Users').insertOne({
    //   _id: 2128,
    //   name: "Nikhil",
    //   age: 21,
    //   location: "New delhi"
    //
    // },(err,result)=>{
    //   if(err){
    //     return console.log('unable to insert',err);
    //   }
    //   console.log(result.ops);
    // });
    client.close();
});
