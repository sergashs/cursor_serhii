const Color1 = "#6992ff";
const Color2 = "#707399";
const Color3 = "#137557";
const Color4 = "#CC8390";
const Color5 = "#CC823E";

function getcolorfromLocalstorage() {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("mainColor")
  );
}
getcolorfromLocalstorage();

function Color1toLocal() {
  document.documentElement.style.setProperty("--main-color", Color1);
  return localStorage.setItem("mainColor", Color1);
}

function Color2toLocal() {
  document.documentElement.style.setProperty("--main-color", Color2);
  localStorage.setItem("mainColor", Color2);
}

function Color3toLocal() {
  document.documentElement.style.setProperty("--main-color", Color3);
  localStorage.setItem("mainColor", Color3);
}

function Color4toLocal() {
  document.documentElement.style.setProperty("--main-color", Color4);
  localStorage.setItem("mainColor", Color4);
}

function Color5toLocal() {
  document.documentElement.style.setProperty("--main-color", Color5);
  localStorage.setItem("mainColor", Color5);
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
