const assert = require('assert');
const Item = require('../item');
const Basket = require('../basket');

describe('Basket', function(){

  let basket;

  beforeEach(function(){
    basket = new Basket();
    item = new Item("chum", 0.80, true);
    item2 = new Item("whiskas", 0.90, true);
  });

  it('should start empty', function(){
    const actual = basket.numberOfItems();
    assert.deepStrictEqual(actual, 0);
  });

  it('should add items', function(){
    basket.addItem(item);
    const actual = basket.numberOfItems();
    assert.deepStrictEqual(actual, 1);
  });

  it('should remove item', function(){
    basket.addItem(item);
    basket.addItem(item2);
    basket.removeItem(item);
    const actual = basket.numberOfItems();
    assert.deepStrictEqual(actual, 1);
  })

});
