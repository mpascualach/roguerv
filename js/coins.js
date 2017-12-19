function Coins(score){
  this.posx = 0;
  this.posy = 0;
  this.score = score;
}

Coins.prototype.coinsPos = function(table) {
  this.posx = (Math.floor(Math.random() * table.room1.length));
  this.posy = (Math.floor(Math.random() * table.room1.length));
  this.generatecoins(table);
};

Coins.prototype.generatecoins = function(table) {
  if (table.room1[coins.posy][coins.posx] !== "." && table.room1[coins.posy][coins.posx] !== "#") {
    this.posx='';
    this.posy='';
    this.coinsPos(table);
  } else {
    $(".row" + this.posy + " >.cell" + this.posx).append("<div class='coins'</div>");
  }
};
