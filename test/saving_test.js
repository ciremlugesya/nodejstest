//const mocha = require('mocha');
// ignore require

const assert = require('assert');

const MarioChar = require('../models/mariocharactar');

// describe tests
describe('saving records', function(){
  // create tests
  it('saves a record to the database', function(done){

    // create a record
    var char = new MarioChar({
      name: 'MarioSave'
    });

    char.save().then(function(){
        assert(char.isNew === false);
        done();
    });
  });

  // next tests
});
