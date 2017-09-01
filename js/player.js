function Player(health, attack, armor) {
  this.x = 2;
  this.y = 10;
  this.score = 0;
  this.pos = [];
  this.health = health;
  this.attack = attack;
  this.armor = armor;
  this.weapons = [];
}

Player.prototype.drawPlayer = function() {
  $(".row" + this.y + " > .cell" + this.x).append("<div class='player'></div>");
  console.log(this.x + "," + this.y);
};

Player.prototype.movePlayer = function() {
  $(".player").remove();
};

Player.prototype.updatePlayer = function() {
  $(".row" + this.y + " > .cell" + this.x).append("<div class='player'></div>");
};

Player.prototype.gotoNextLevel = function() {
  if ($(".row" + this.y + " > .cell" + this.x).hasClass("door")) {
    this.x = 2;
    this.y = 10;
    this.drawPlayer();
  }
};

Player.prototype.moveUp = function(board, enemy) {
  if (board.room1[player.y - 1][player.x] == "=" || board.room1[player.y - 1][player.x] == "C") {
    console.log("You ran into a wall!");
    return false;
  }
  this.y = this.y - 1;
  if (this.y == enemy.posy && this.x == enemy.posx) {
    player.collide();
    this.health = this.health - this.collide();
    alert("You have lost 10 health");
  } else {
    this.movePlayer();
    console.log(this.x + "," + this.y);
    this.updatePlayer();
  }
  return true;
};

Player.prototype.moveDown = function(board, enemy) {
  if (board.room1[player.y + 1][player.x] == "=" || board.room1[player.y + 1][player.x] == "C") {
    console.log("You ran into a wall!");
    return false;
  }
  this.y = this.y + 1;
  if (this.y == enemy.posy && this.x == enemy.posx) {
    console.log("coliso");
    player.collide();
    alert("You have lost 10 health");
    this.health = health;
  } else {
    this.movePlayer();
    console.log(this.x + "," + this.y);
    this.updatePlayer();
  }
};

Player.prototype.moveLeft = function(board, enemy) {
  if (board.room1[player.y][player.x - 1] == "|" || board.room1[player.y][player.x - 1] == "C" || board.room1[player.y][player.x - 1] == "=") {
    console.log("You ran into a wall!");
    return false;
  }
  this.x = this.x - 1;
  if (this.y == enemy.posy && this.x == enemy.posx) {
    player.collide();
    this.health = this.health - this.collide();
    alert("You have lost 10 health");
  } else {
    this.movePlayer();
    this.updatePlayer();
  }
};

Player.prototype.moveRight = function(board, enemy) {
  if (board.room1[player.y][player.x + 1] == "|" || board.room1[player.y][player.x + 1] == "C" || board.room1[player.y][player.x + 1] == "=") {
    console.log("You ran into a wall!");
    return false;
  }
  this.x = this.x + 1;
  if (this.y == enemy.posy && this.x == enemy.posx) {
    this.collide();
    this.health = this.health - 10;
    alert("You have lost 10 health");
  } else {
    this.movePlayer();
    console.log(this.x + "," + this.y);
    this.updatePlayer();
  }
};

Player.prototype.collide = function() {
  console.log("atacar o defender");
};


// Player.prototype.pickUpCoins = function(coins){
//   this.score += coins;
// };
//
// Player.prototype.pickUpHealth = function(food){
//   this.health = health + food;
// };
