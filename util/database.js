const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
  MongoClient.connect(
    'mongodb+srv://Louli:DgAJS9BpmTjFHkVl@cluster0.3f6kq.mongodb.net/loulibase?retryWrites=true&w=majority'
  )
    .then(client => {
      console.log('Connected');
      callback(client);
    })
    .catch(err => console.log(err));
}

module.exports = mongoConnect;