const assert = require('assert');
const MarioChar = require('../models/mariocharactar');

// describe tests
describe('deleting records', function(){

  var char;

  beforeEach(function(done){
    // create a record
    char = new MarioChar({
      name: 'MarioDelete'
    });

    // mongoose will create an id for each char.

    char.save().then(function(){
        //assert(char.isNew === false);
        done();
    });
  });

  // create tests

  it('deletes one record from the database', function(done){

    MarioChar.findOneAndRemove({
      name: 'MarioDelete'
    }).then(function(result){
      MarioChar.findOne({
        name: 'MarioDelete'
      }).then(function(result){
        assert(result === null);
        done();
      });


    });

  });

});
