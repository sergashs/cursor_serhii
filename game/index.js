// buttons start

document.getElementById("left-menu").addEventListener("change", (ev) => {
  let Leftmenubutton = ev.target;
  let Leftmainside = document.querySelector(".main__left-side-container");

  if (Leftmenubutton.checked) {
    document.querySelector(".icon-left-menu").innerHTML =
      '<i class="fa fa-angle-up" aria-hidden="true"></i>';

    Leftmainside.classList.toggle("open");
  } else {
    document.querySelector(".icon-left-menu").innerHTML =
      '<i class="fa fa-angle-down" aria-hidden="true"></i>';
    Leftmainside.classList.toggle("open");
  }
});

// buttons end

const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("nav")[0];
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

let modal = document.querySelector(".changer-theme");
let openButton = document.getElementById("changer-theme-icon");

openButton.onclick = function () {
  modal.classList.toggle("open");
};

let search = document.querySelector(".header__search-container");
let opensearch = document.querySelector(".search-icon");

opensearch.onclick = function () {
  search.classList.toggle("open");
};

// //colors switch

let default_color = document.querySelector(".default_color");

let first = document.querySelector(".first");

let second = document.querySelector(".second");

let fourth = document.querySelector(".fourth");

let fifth = document.querySelector(".fifth");

if (localStorage.getItem("--temple-main-color") == "#a83038") {
  document.documentElement.style.setProperty("--temple-main-color", "#a83038");
} else if (localStorage.getItem("--temple-main-color") == "#2776aa") {
  document.documentElement.style.setProperty("--temple-main-color", "#2776aa");
} else if (localStorage.getItem("--temple-main-color") == "#5e8351") {
  document.documentElement.style.setProperty("--temple-main-color", "#5e8351");
} else if (localStorage.getItem("--temple-main-color") == "#967294") {
  document.documentElement.style.setProperty("--temple-main-color", "#967294");
} else if (localStorage.getItem("--temple-main-color") == "#927b76") {
  document.documentElement.style.setProperty("--temple-main-color", "#927b76");
}

default_color.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#a83038");
  localStorage.setItem("--temple-main-color", "#a83038");
};

first.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#2776aa");
  localStorage.setItem("--temple-main-color", "#2776aa");
};

second.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#5e8351");
  localStorage.setItem("--temple-main-color", "#5e8351");
};

fourth.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#967294");
  localStorage.setItem("--temple-main-color", "#967294");
};

fifth.onclick = function () {
  document.documentElement.style.setProperty("--temple-main-color", "#927b76");
  localStorage.setItem("--temple-main-color", "#927b76");
};

document.getElementById("darkmode").addEventListener("change", (ev) => {
  let btn = ev.target;
  // если чекбокс включен
  if (btn.checked) {
    localStorage.setItem("darkmode", "on");
    document.documentElement.style.setProperty("--bg-block", "#22272b");
    document.documentElement.style.setProperty("--bg-body", "#171c20");
    document.documentElement.style.setProperty("--color-border", "#393d41");
    document.documentElement.style.setProperty(
      "--color-text-description",
      "rgb(139, 139, 139)"
    );
    document.documentElement.style.setProperty(
      "--color-text-title",
      "rgb(139, 139, 139)"
    );
    document.documentElement.style.setProperty(
      "--block-swadow",
      "0 0 0 rgba(0, 0, 0, 0.0)"
    );
  } else {
    localStorage.setItem("darkmode", "off");
    document.documentElement.style.setProperty("--bg-block", "#fff");
    document.documentElement.style.setProperty("--bg-body", "#f4f4f4");
    document.documentElement.style.setProperty(
      "--color-border",
      "rgb(230, 230, 230)"
    );
    document.documentElement.style.setProperty(
      "--color-text-description",
      "rgb(75, 75, 75)"
    );
    document.documentElement.style.setProperty(
      "--color-text-title",
      "rgb(75, 75, 75)"
    );
    document.documentElement.style.setProperty(
      "--block-swadow",
      "0 0 25px rgba(0, 0, 0, 0.1)"
    );
  }
});

if (localStorage.getItem("darkmode") == "on") {
  document.getElementById("darkmode").setAttribute("checked", "checked");
  localStorage.setItem("darkmode", "on");
  document.documentElement.style.setProperty("--bg-block", "#22272b");
  document.documentElement.style.setProperty("--bg-body", "#171c20");
  document.documentElement.style.setProperty("--color-border", "#393d41");
  document.documentElement.style.setProperty(
    "--color-text-description",
    "rgb(139, 139, 139)"
  );
  document.documentElement.style.setProperty(
    "--color-text-title",
    "rgb(139, 139, 139)"
  );
  document.documentElement.style.setProperty(
    "--block-swadow",
    "0 0 0 rgba(0, 0, 0, 0.0)"
  );
}

// по умолчанию светлая тема
else {
  localStorage.setItem("darkmode", "off");
  document.documentElement.style.setProperty("--bg-block", "#fff");
  document.documentElement.style.setProperty("--bg-body", "#f4f4f4");
  document.documentElement.style.setProperty(
    "--color-border",
    "rgb(230, 230, 230)"
  );
  document.documentElement.style.setProperty(
    "--color-text-description",
    "rgb(75, 75, 75)"
  );
  document.documentElement.style.setProperty(
    "--color-text-title",
    "rgb(75, 75, 75)"
  );
  document.documentElement.style.setProperty(
    "--block-swadow",
    "0 0 25px rgba(0, 0, 0, 0.1)"
  );
}

!(function (e) {
  "function" != typeof e.matches &&
    (e.matches =
      e.msMatchesSelector ||
      e.mozMatchesSelector ||
      e.webkitMatchesSelector ||
      function (e) {
        for (
          var t = this,
            o = (t.document || t.ownerDocument).querySelectorAll(e),
            n = 0;
          o[n] && o[n] !== t;

        )
          ++n;
        return Boolean(o[n]);
      }),
    "function" != typeof e.closest &&
      (e.closest = function (e) {
        for (var t = this; t && 1 === t.nodeType; ) {
          if (t.matches(e)) return t;
          t = t.parentNode;
        }
        return null;
      });
})(window.Element.prototype);

document.addEventListener("DOMContentLoaded", function () {
  /* Записываем в переменные массив элементов-кнопок и подложку.
      Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
  var modalButtons = document.querySelectorAll(".open-modal"),
    overlay = document.querySelector(".overlay"),
    closeButtons = document.querySelectorAll(".close-modal-icon");

  /* Перебираем массив кнопок */
  modalButtons.forEach(function (item) {
    /* Назначаем каждой кнопке обработчик клика */
    item.addEventListener("click", function (e) {
      /* Предотвращаем стандартное действие элемента. Так как кнопку разные
            люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
            Нужно подстраховаться. */
      e.preventDefault();

      /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
            и будем искать модальное окно с таким же атрибутом. */
      var modalId = this.getAttribute("data-modal"),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      /* После того как нашли нужное модальное окно, добавим классы
            подложке и окну чтобы показать их. */
      modalElem.classList.add("active");
      overlay.classList.add("active");
    }); // end click
  }); // end foreach

  closeButtons.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var parentModal = this.closest(".modal");

      parentModal.classList.remove("active");
      overlay.classList.remove("active");
    });
  }); // end foreach

  document.body.addEventListener(
    "keyup",
    function (e) {
      var key = e.keyCode;

      if (key == 27) {
        document.querySelector(".modal.active").classList.remove("active");
        document.querySelector(".overlay").classList.remove("active");
      }
    },
    false
  );

  overlay.addEventListener("click", (e) => {
    if (e.target == overlay) {
      document.querySelector(".overlay").classList.remove("active");
    }
  });
}); // end ready
