function Enemy() {
  this.posx = 0;
  this.posy = 0;
  this.mov = ["left", "right", "up", "down"];
  this.attack = 10;
  this.health = 3;
  this.move = function(board){
    if (board.turn == true){
      var d = this.mov[Math.floor(Math.random()*this.mov.length)];
      if (d == "left"){
        if (board.room1[enemy.y - 1][enemy.x] == "=" || board.room1[enemy.y-1][enemy.x] == "C"){
          return false;
        }
        else {
          this.pos[0] = (this.pos[0])+1;
        }
      board.turn = false;
      }
    }
  };
}

Enemy.prototype.enemyPos = function(table) {
  this.posx = (Math.floor(Math.random() * table.room1.length));
  this.posy = (Math.floor(Math.random() * table.room1.length));
  this.generateEnemy(table);
};

Enemy.prototype.generateEnemy = function(table) {
  if (table.room1[enemy.posy][enemy.posx] !== "." && table.room1[enemy.posy][enemy.posx] !== "#") {
    this.posx='';
    this.posy='';
    this.enemyPos(table);
  } else {
    $(".row" + this.posy + " >.cell" + this.posx).append("<div class='enemy'</div>");
  }
};
