const assert = require('assert');
const MarioChar = require('../models/mariocharactar');

// describe tests
describe('updating records', function(){

  var char;

  beforeEach(function(done){
    // create a record
    char = new MarioChar({
      name: 'MarioUpdate',
      weight: 50
    });

    // mongoose will create an id for each char.

    char.save().then(function(){
        //assert(char.isNew === false);
        done();
    });
  });

  // create tests

  it('updates one record in the database', function(done){

    MarioChar.findOneAndUpdate({name: 'MarioUpdate'}, {name: 'Luigi'})
    .then(function(){
      MarioChar.findOne({_id: char._id})
      .then(function(result){
        assert(result.name === 'Luigi');
        done();
      });
    });

  });

  it('Increments the weight by 1', function(done){

    //MarioChar.update({}, {weight: 51});

    MarioChar.update({}, {$inc: { weight: 1} }).then(function(){
        MarioChar.findOne({name: 'MarioUpdate'}).then(function(record){
          assert(record.weight === 51);
          done();
        });
      });
  });

});
