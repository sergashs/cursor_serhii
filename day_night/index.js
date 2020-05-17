// // создаем <link rel="stylesheet" href="light|dark.css">
// let head = document.head,
//   link = document.createElement("link");
// link.rel = "stylesheet";
// // проверяем значение из localStorage если dark то темная тема
// if (localStorage.getItem("themeStyle") === "dark") {
//   document.querySelector(".button").style = "background: black;";
//   link.href = "dark.css"; // ссылка на темный стиль
//   document.getElementById("themer").setAttribute("checked", true); // переключаем чекбокс в положение "темная тема"
// }

// // по умолчанию светлая тема
// else {
//   link.href = "light.css"; // ссылка на светлый стиль
// }
// head.appendChild(link); // вставляем <link rel="stylesheet" href="light|dark.css"> в шапку страницы между темаги head

// // событие при переключении чекбокса
// document.getElementById("themer").addEventListener("change", (ev) => {
//   let btn = ev.target;
//   // если чекбокс включен
//   if (btn.checked) {
//     document.querySelector(".button").style = "background: black;";
//     document.querySelector(".icon").innerHTML =
//       '<i class="fa fa-sun-o" aria-hidden="true"></i>';

//     link.href = "dark.css"; // включаем темную тему
//     localStorage.setItem("themeStyle", "dark"); // записываем значение в localStorage
//   } else {
//     link.href = "light.css"; // включаем светлую тему
//     document.querySelector(".button").style = "background: black;";
//     document.querySelector(".icon").innerHTML =
//       '<i class="fa fa-moon-o" aria-hidden="true"></i>';

//     localStorage.setItem("themeStyle", "light"); // записываем значение в localStorage
//   }
// });

// $("a").magnificPopup({
//   type: "image",
//   closeBtnInside: false,
//   closeOnContentClick: true,
//   tLoading: "", // remove text from preloader

//   /* don't add this part, it's just to disable cache on image and test loading indicator */
//   callbacks: {
//     beforeChange: function () {
//       this.items[0].src = this.items[0].src + "?=" + Math.random();
//     },
//   },
// });
