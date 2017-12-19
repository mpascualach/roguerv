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
  // $(".row" + (this.y) + " > .cell" + (this.x)).css({"border-color": "#C1E0FF", "border-width":"1px", "border-style":"solid"});
  if (this.y == enemy.posy && this.x == enemy.posx) {
    this.health = this.health - enemy.attack;
    if (this.health === 0){
      $("#game").hide();
      $("#game-over").show();
    }
    else {
      alert("You have lost 10 health");
      $("#health").html("Health: " + this.health);
    }
  } else {
    this.movePlayer();
    this.updatePlayer();
    if (this.y == coins.posy && this.x == coins.posx){
      $(".coins").remove();
      this.score += coins.score;
      $("#score").html("Score: " + this.score);
      board.turn = false;
    }
  }
  return true;
};

Player.prototype.moveDown = function(board, enemy) {
  if (board.room1[player.y + 1][player.x] == "=" || board.room1[player.y + 1][player.x] == "C") {
    console.log("You ran into a wall!");
    return false;
  }
  this.y = this.y + 1;
  // $(".row" + (this.y) + " > .cell" + (this.x)).css({"border-color": "#C1E0FF", "border-width":"1px", "border-style":"solid"});
  if (this.y == enemy.posy && this.x == enemy.posx) {
    this.health -= enemy.attack;
    if (this.health === 0){
      $("#game").hide();
      $("#game-over").show();
    }
    else {
      alert("You have lost 10 health");
      $("#health").html("Health: " + this.health);
    }
  } else {
    this.movePlayer();
    this.updatePlayer();
    if (this.y == coins.posy && this.x == coins.posx){
      $(".coins").remove();
      this.score += coins.score;
      $("#score").html("Score: " + this.score);
      board.turn = false;
    }
  }
};

Player.prototype.moveLeft = function(board, enemy) {
  if (board.room1[player.y][player.x - 1] == "|" || board.room1[player.y][player.x - 1] == "C" || board.room1[player.y][player.x - 1] == "=") {
    console.log("You ran into a wall!");
    return false;
  }
  this.x = this.x - 1;
  // $(".row" + (this.y) + " > .cell" + (this.x)).css({"border-color": "#C1E0FF", "border-width":"1px", "border-style":"solid"});
  if (this.y == enemy.posy && this.x == enemy.posx) {
    this.health = this.health - enemy.attack;
    if (this.health === 0){
      $("#game").hide();
      $("#game-over").show();
    }
    else {
      alert("You have lost 10 health");
      $("#health").html("Health: " + this.health);
    }
  } else {
    this.movePlayer();
    this.updatePlayer();
    if (this.y == coins.posy && this.x == coins.posx){
      $(".coins").remove();
      this.score += coins.score;
      $("#score").html("Score: " + this.score);
      board.turn = false;
    }
  }
};

Player.prototype.moveRight = function(board, enemy) {
  if (board.room1[player.y][player.x + 1] == "|" || board.room1[player.y][player.x + 1] == "C" || board.room1[player.y][player.x + 1] == "=") {
    console.log("You ran into a wall!");
    return false;
  }
  this.x = this.x + 1;
  // $(".row" + (this.y) + " > .cell" + (this.x)).css({"border-color": "#C1E0FF", "border-width":"1px", "border-style":"solid"});
  if (this.y == enemy.posy && this.x == enemy.posx) {
    this.health = this.health - enemy.attack;
    if (this.health === 0){
      $("#game").hide();
      $("#game-over").show();
    }
    else {
      alert("You have lost 10 health");
      $("#health").html("Health: " + this.health);
    }
  } else {
    this.movePlayer();
    this.updatePlayer();
    if (this.y == coins.posy && this.x == coins.posx){
      $(".coins").remove();
      this.score += coins.score;
      $("#score").html("Score: " + this.score);
      board.turn = false;
    }
  }
};


// Player.prototype.pickUpCoins = function(coins){
//   this.score += coins;
// };
//
// Player.prototype.pickUpHealth = function(food){
//   this.health = health + food;
// };
