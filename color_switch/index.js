const Color1 = "#6992ff";
const Color2 = "#707399";
const Color3 = "#137557";
const Color4 = "#CC8390";
const Color5 = "#CC823E";

function Color1toLocal() {
  localStorage.clear();
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color1
  );
  return localStorage.setItem("mainColor1", Color1);
}

function Color2toLocal() {
  localStorage.removeItem;
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color2
  );
  localStorage.setItem("mainColor2", Color2);
}

function Color3toLocal() {
  localStorage.clear();
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color3
  );
  localStorage.setItem("mainColor3", Color3);
}

function Color4toLocal() {
  localStorage.clear();
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color4
  );
  localStorage.setItem("mainColor4", Color4);
}

function Color5toLocal() {
  localStorage.clear();
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color5
  );
  localStorage.setItem("mainColor5", Color5);
}

if (localStorage.getItem("mainColor1")) {
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color1
  );
} else if (localStorage.getItem("mainColor2")) {
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color2
  );
} else if (localStorage.getItem("mainColor3")) {
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color3
  );
} else if (localStorage.getItem("mainColor4")) {
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color4
  );
} else if (localStorage.getItem("mainColor5")) {
  localStorage.mainColor = document.documentElement.style.setProperty(
    "--main-color",
    Color5
  );
}

document.getElementById("color1").style.backgroundColor = Color1;
document.getElementById("color2").style.backgroundColor = Color2;
document.getElementById("color3").style.backgroundColor = Color3;
document.getElementById("color4").style.backgroundColor = Color4;
document.getElementById("color5").style.backgroundColor = Color5;

let modalSwtichColor = document.querySelector(".modal-colorswitch");
let openmodalSwtichColor = document.querySelector(".button-open-colorswitch");

openmodalSwtichColor.onclick = function () {
  modalSwtichColor.classList.toggle("open");
};
