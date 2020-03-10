function generatecolor() {
  result = (Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase();
  return "#" + result;
}

function generateBlocks() {
  for (i = 1; i < 26; i++) {
    let board = document.createElement("div");

    board.style = "background-color: " + generatecolor();

    // "background-color: " +
    // "#" +
    // (Math.random().toString(16) + "000000").substring(2, 8).toUpperCase();

    board.className = "block";
    document.getElementById("container-blocks").appendChild(board);
  }
}

generateBlocks();

// function generateColor() {
//   return '#' + Math.floor(Math.random()*16777215).toString(16)
// }
