const assert = require('assert');
const Item = require('../item');

describe('Item', function(){

  let item;

  beforeEach(function(){
    item = new Item('chum', 0.80, true);
  })

  it('should have a name', function(){
    const actual = item.name;
    assert.equal(actual, 'chum');
  });

  it('should havea price', function(){
    const actual = item.price;
    assert.strictEqual(actual, 0.80);
  });

  it("should have bogof value", function(){
    const actual = item.bogof;
    assert.strictEqual(actual, true);
  });
  
});
