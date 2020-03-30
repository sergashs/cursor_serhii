function generatecolor() {
  result = (Math.random().toString(16) + "000000")
    .substring(2, 8)
    .toUpperCase();
  return "#" + result;
}

function pickTextColorBasedOnBgColorSimple(bgColor, lightColor, darkColor) {
  var color = bgColor.charAt(0) === "#" ? bgColor.substring(1, 7) : bgColor;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  result = r * 0.399 + g * 0.687 + b * 0.214 > 186 ? darkColor : lightColor;
  return result;
}

function printcolor() {
  document.getElementById(
    "scriptColor"
  ).innerText = color = document.body.style.backgroundColor = generatecolor();
  document.body.style.color = pickTextColorBasedOnBgColorSimple(
    color,
    "#FFFFFF",
    "#000000"
  );
}

if (document.documentElement.clientWidth < 868) {
  document.getElementById("scriptColor").innerHTML = "Touch to <b>screen</b>";
  document.getElementById("scriptColor").onclick = function() {
    document.getElementById(
      "scriptColor"
    ).innerText = color = document.body.style.backgroundColor = generatecolor();

    document.body.style.color = pickTextColorBasedOnBgColorSimple(
      color,
      "#FFFFFF",
      "#000000"
    );
  };
} else {
  document.addEventListener("keypress", function(event) {
    if (event.keyCode == 13) {
      printcolor();
    }
  });
}
