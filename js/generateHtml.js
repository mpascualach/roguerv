function generateRooms(board) {
  for (var i = 0; i < board.room1.length; i++) {
    $(".rooms").append("<div class=row" + i + " style='width:620px;display:inherit'></div>");
    for (var j = 0; j < board.room1[0].length; j++) {
      var ri = "row" + i;
      var ci = "cell" + j;
      switch (board.room1[i][j]) {
        case '=':
          $(".row" + i).append("<div class='cell" + j + " wall' style='height:30px;width:30px'></div>");
          break;
        case '|':
          $(".row" + i).append("<div class='cell" + j + " wall2' style='height:30px;width:30px'></div>");
          break;
        case '+':
          $(".row" + i).append("<div class='cell" + j + " entrance' style='height:30px;width:30px'></div>");
          break;
        case '#':
          $(".row" + i).append("<div class='cell" + j + " entrance' style='height:30px;width:30px'></div>");
          break;
        case '.':
          $(".row" + i).append("<div class='cell" + j + " space' style='height:30px;width:30px'></div>");
          break;
        case "C":
          $(".row" + i).append("<div class='cell" + j + "' style='height:30px;width:30px'></div>");
      }
    }
  }
}

function removeRooms(board) {
  for (var i = 0; i < board.room1.length; i++) {
    $(".rooms > .row" + i).remove();
  }
}
