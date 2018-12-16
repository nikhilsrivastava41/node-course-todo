//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return console.log('unable to connect');

    }
    console.log('connectted to omngo bd');
    const db = client.db('TodoApp');
    db.collection('Users').find({name: 'Nikhil'}).toArray().then((docs) => {
      console.log(JSON.stringify(docs, undefined, 2));
    });
    client.close();
});
