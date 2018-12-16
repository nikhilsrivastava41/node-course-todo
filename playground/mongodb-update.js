//const MongoClient = require('mongodb').MongoClient;

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
      return console.log('unable to connect');

    }
    console.log('connectted to omngo bd');
    const db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectID('57bc4b15b3b6a3801d8c47a2')
    // }, {
    //   $set: {
    //     completed: true
    //   }
    // }, {
    //   returnOriginal: false
    // }).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectID('57abbcf4fd13a094e481cf2c')
    }, {
      $set: {
        name: 'Nikhil'
      },
      $inc: {
        age: 1
      }
    }, {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
    });

    //client.close();
});