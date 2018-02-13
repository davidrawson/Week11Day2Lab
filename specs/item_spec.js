const assert = require('assert');
const Item = require('../item');

describe('Item', function(){

  let item;

  beforeEach(function(){
    item = new Item();
  })
