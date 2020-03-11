function generatecolor() {
  result = (Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase();
  return "#" + result;
}

function generateBlocks() {
  const container = document.getElementById("container-blocks");
  container.innerHTML = "";
  for (let i = 1; i < 26; i++) {
    const board = document.createElement("div");
    board.style.backgroundColor = generatecolor();
    board.className = "block";
    container.appendChild(board);
  }
}

setInterval(() => {
  generateBlocks();
}, 5000);
