var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = 'make honey'
  this.canFly = true;
  this.treasureChest = [];
  this.honeyPot = 0;

};

Grub.prototype.makeHoney = function(){
  this.honeyPot++
}

Grub.prototype.giveHoney = function(){
  this.honeyPot--
}

HoneyMakerBee.prototype = Object.create(Grub.prototype)
HoneyMakerBee.prototype.constructor = HoneyMakerBee