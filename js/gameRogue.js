var board;
var player;
$(document).ready(function() {
  // $("#game").hide();
  // $(".input-name").on("keydown", function(e) {
  //   var code = e.keyCode;
  //   if (code == 13) {
  //     var val = $(".input-name").val();
  //     if (!val) {
  //       alert("Hello Ronald!");
  //     } else {
  //       alert("Hello " + "" + val);
  //     }
  //     $("#start-screen").hide();
  //     $("#first-entry-field").hide();
  //     $("#game").show();
      $("game-over").hide()
      board = new Board();
      player = new Player(20, 80, 30);
      enemy = new Enemy();
      coins = new Coins(20);
      generateRooms(board);
      player.drawPlayer();
      setScore();
      // lightRooms(board);
      board.setDoor();
      enemy.enemyPos(board);
      coins.coinsPos(board);
      $(document).keydown(function(e) {
        var code = e.keyCode;
        if (code == 37) {
          player.moveLeft(board, enemy);
          board.nextTurn();
        } else if (code == 38) {
          player.moveUp(board, enemy);
          board.nextTurn();
        } else if (code == 39) {
          player.moveRight(board, enemy);
          board.nextTurn();
        } else if (code == 40) {
          player.moveDown(board, enemy);
          board.nextTurn();
        } else if (code == 78) {
          removeRooms(board);
          board.nextLevel();
          generateRooms(board);
          player.drawPlayer();
          lightRooms(board);
          board.setDoor();
          enemy.enemyPos(board);
          coins.coinsPos(board);

          // player.gotoNextLevel();
        }
      });
    });
  // });
// });
