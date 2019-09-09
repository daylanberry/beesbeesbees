var ForagerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'find pollen'
  this.canFly = true;
  this.treasureChest = [];

};

Grub.prototype.forage = function(treasure){
  this.treasureChest.push(treasure)
}


ForagerBee.prototype = Object.create(Grub.prototype)
ForagerBee.prototype.constructor = ForagerBee

