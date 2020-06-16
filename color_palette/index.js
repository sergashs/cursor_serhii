function generatecolor() {
  let result = (Math.random().toString(16) + "100000")
    .substring(2, 8)
    .toUpperCase();
  return "#" + result;
}

function putColorinBlock() {
  let color1 = generatecolor();
  let color2 = generatecolor();
  let color3 = generatecolor();
  let color4 = generatecolor();

  document.querySelector(
    ".color__title1"
  ).innerHTML = color1 = document.querySelector(
    ".color1"
  ).style.backgroundColor = generatecolor();

  document.querySelector(
    ".color__title2"
  ).innerHTML = color2 = document.querySelector(
    ".color2"
  ).style.backgroundColor = generatecolor();

  document.querySelector(
    ".color__title3"
  ).innerHTML = color3 = document.querySelector(
    ".color3"
  ).style.backgroundColor = generatecolor();

  document.querySelector(
    ".color__title4"
  ).innerHTML = color4 = document.querySelector(
    ".color4"
  ).style.backgroundColor = generatecolor();
}

const colorTitles = document.querySelectorAll(".color-block");
for (const color of colorTitles) {
  color.onclick = function () {
    document.execCommand("copy");
  };

  color.addEventListener("copy", function (event) {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", color.textContent);
      console.log(event.clipboardData.getData("text"));
      document.getElementById("coppied__color").style.opacity = "1";
      document.getElementById("coppied__color").innerHTML =
        "Color" + color.textContent + "copied to your clipboard";
    }
  });
}

document.addEventListener("keypress", function (event) {
  if (event.keyCode == 13) {
    putColorinBlock();
  }
});
