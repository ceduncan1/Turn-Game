let GoodGuy = function(name, minHP, maxHP, defeatMsg, imgSrc) {

  this.health = 100;

  this.hit = function(num){
    let hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };

  this.name = name;
  this.minHP = minHP;
  this.maxHP = maxHP;
  this.defeatMsg = defeatMsg;
  this.imgSrc = imgSrc;

};

export default GoodGuy;