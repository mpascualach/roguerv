function Enemy() {
  this.posx = 0;
  this.posy = 0;
  this.mov = ["left", "right", "up", "down"];
  this.attack = 10;
  this.health = 3;
}

Enemy.prototype.enemyPos = function(table) {
  this.posx = (Math.floor(Math.random() * table.room1.length));
  this.posy = (Math.floor(Math.random() * table.room1.length));
  this.generateEnemy(table);
};

Enemy.prototype.generateEnemy = function(table) {
  if (table.room1[this.posy][this.posx] !== "." && table.room1[enemy.posy][enemy.posx] !== "#") {
    this.posx='';
    this.posy='';
    this.enemyPos(table);
  } else {
    $(".row" + this.posy + " >.cell" + this.posx).append("<div class='enemy'</div>");
  }
};

// Enemy.prototype.move = function(){
//   if (board.turn == true){
//     this.direction = this.mov[Math.floor(Math.random() * this.mov.length)];
//     switch(this.direction){
//       case 'left':
//         if (board.room1[this.posy][this.posx-1] !== "." && table.room1[enemy.posy][enemy.posx-1] !== "#"){
//           this.direction = this.mov[Math.floor(Math.random() * this.mov.length)];
//           this.move();
//         }
//         else {
//           this.posx--;
//           board.turn = false;
//         }
//         break;
//       case 'right':
//         if (board.room1[this.posy][this.posx+1] !== "." && table.room1[enemy.posy][enemy.posx+1] !== "#"){
//           this.direction = this.mov[Math.floor(Math.random() * this.mov.length)];
//           this.move();
//         }
//         else {
//           this.posx++;
//           board.turn = false;
//         }
//         break;
//       case 'up':
//         if (board.room1[this.posy-1][this.posx] !== "." && table.room1[enemy.posy-1][enemy.posx] !== "#"){
//           this.direction = this.mov[Math.floor(Math.random() * this.mov.length)];
//           this.move();
//         }
//         else {
//           this.posy--;
//           board.turn = false;
//         }
//         break;
//       case 'down':
//         if (board.room1[this.posy+1][this.posx] !== "." && table.room1[enemy.posy+1][enemy.posx] !== "#"){
//           this.direction = this.mov[Math.floor(Math.random() * this.mov.length)];
//           this.move();
//         }
//         else {
//           this.posy++;
//           board.turn = false;
//         }
//     }
//   }
// };
