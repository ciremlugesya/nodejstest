const assert = require('assert');
const MarioChar = require('../models/mariocharactar');

// describe tests
describe('finding records', function(){

  var char;

  beforeEach(function(done){
    // create a record
    char = new MarioChar({
      name: 'MarioFind'
    });

    // mongoose will create an id for each char.

    char.save().then(function(){
        //assert(char.isNew === false);
        done();
    });
  });
  // create tests
  it('finds one record from the database', function(done){

    MarioChar.findOne({
      name: 'MarioFind'
    }).then(function(result){
      assert(result.name === 'MarioFind');
      done();
    });

  });

  // next tests

  it('finds one record by id from the database', function(done){

    MarioChar.findOne({
      _id: char._id
    }).then(function(result){
      assert(result._id.toString() === char._id.toString());
      done();
    });

  });

});
