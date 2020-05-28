document.getElementById("darkmode").addEventListener("change", (ev) => {
  let btn = ev.target;

  if (btn.checked) {
    localStorage.setItem("darkmode", "on");
    document.querySelector(".icon-moon").innerHTML =
      ' <img src="./img/moon-on.svg" />';
    document.documentElement.style.setProperty("--body-background", "#222325");
    document.documentElement.style.setProperty("--text", "#adadad");
    document.documentElement.style.setProperty("--grey-text", "#6b6b6b");
    document.documentElement.style.setProperty("--input--border", "#6b6b6b");
  } else {
    localStorage.setItem("darkmode", "off");
    document.querySelector(".icon-moon").innerHTML =
      ' <img src="./img/moon.svg" />';
    document.documentElement.style.setProperty("--body-background", "#f2f2f2");
    document.documentElement.style.setProperty("--text", "#000000");
    document.documentElement.style.setProperty("--grey-text", "#979797");
    document.documentElement.style.setProperty("--input--border", "#cfcfcf");
  }
});

if (localStorage.getItem("darkmode") == "on") {
  document.querySelector(".icon-moon").innerHTML =
    ' <img src="./img/moon-on.svg" />';
  document.documentElement.style.setProperty("--body-background", "#222325");
  document.documentElement.style.setProperty("--text", "#adadad");
  document.documentElement.style.setProperty("--grey-text", "#6b6b6b");
  document.documentElement.style.setProperty("--input--border", "#6b6b6b");
}

// по умолчанию светлая тема
else {
  localStorage.setItem("darkmode", "off");
  document.querySelector(".icon-moon").innerHTML =
    ' <img src="./img/moon.svg" />';
  document.documentElement.style.setProperty("--body-background", "#f2f2f2");
  document.documentElement.style.setProperty("--text", "#000000");
  document.documentElement.style.setProperty("--grey-text", "#979797");
  document.documentElement.style.setProperty("--input--border", "#cfcfcf");
}

document.getElementById("menu").addEventListener("change", (ev) => {
  let btn = ev.target;

  if (btn.checked) {
    document.querySelector(".nav-1").classList.add("active");
    document.querySelector(".nav-2").classList.add("active");
  } else {
    document.querySelector(".nav-1").classList.remove("active");
    document.querySelector(".nav-2").classList.remove("active");
  }
});
