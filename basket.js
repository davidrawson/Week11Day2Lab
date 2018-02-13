const Basket  = function(){
  this.contents = [];
}

Basket.prototype.numberOfItems = function(){
  return this.contents.length;
}

Basket.prototype.addItem = function(item){
  this.contents.push(item);
}

Basket.prototype.removeItem = function(item){
  index = this.contents.indexOf(item);
  this.contents.splice(index, 1);
}

Basket.prototype.totalCost = function(){
  let total=0;
  for ( item of this.contents){
    // console.log(item.price);
    total += item.price;
  }
  // console.log(total);
  return total.toFixed(1);
}

module.exports = Basket;
