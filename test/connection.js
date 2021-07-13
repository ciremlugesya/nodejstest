const mongoose = require('mongoose');

//ES6 Promises
mongoose.Promise = global.Promise;

// connect to the db before tests run
before(function(done){
  // connect to mongodb
  mongoose.connect('mongodb://localhost:27017/testaroo');

  mongoose.connection.once('open', function(){
    console.log('Connection has been made, now make fireworks...');
    done();
  }).on('error', function(error){
    console.log('Connection error: ', error)
  });

});

// drop the characters collection before each tests
beforeEach(function(done){
  // drop the collection
  mongoose.connection.collections.mariochars.drop(function(){
    done();
  });
});
