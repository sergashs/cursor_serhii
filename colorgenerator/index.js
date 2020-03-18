function generatecolor() {
  result = (Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase();
  return "#" + result;
}

function printcolor() {
  document.body.style.backgroundColor = generatecolor();
  document.getElementById("scriptColor").innerText =
    document.body.style.backgroundColor;
  const color = document.createElement("p");
  color.className = "color";
}

let match = "rgb(111, 103, 178)";

function rgb2hex(rgb) {
  var rgb = rgb.match(
    /^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i
  );

  return rgb && rgb.length === 4
    ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2)
    : "";
}

document.addEventListener("keypress", function(event) {
  if (event.keyCode == 13) {
    printcolor();
  }
});
