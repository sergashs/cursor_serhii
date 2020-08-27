// scroll in blocks

if (document.documentElement.clientWidth < 568) {
  console.log("off script");
} else {
  let isDown = false;
  let startX;
  let scrollLeft;

  document.querySelectorAll(".scroll").forEach((item) => {
    item.addEventListener("mousedown", (e) => {
      isDown = true;
      item.classList.add("active");
      startX = e.pageX - item.offsetLeft;
      scrollLeft = item.scrollLeft;
    });
    item.addEventListener("mouseleave", () => {
      isDown = false;
      item.classList.remove("active");
    });
    item.addEventListener("mouseup", () => {
      isDown = false;
      item.classList.remove("active");
    });
    item.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - item.offsetLeft;
      const walk = x - startX;
      item.scrollLeft = scrollLeft - walk;
    });
  });
}

// scroll in blocks

// mobile menu open

let menu = document.querySelector(".moibile__navigation--menu");
let openmenu = document.querySelector(".hamburger-menu");
let menuclose = document.querySelector(".menu-close-button");
openmenu.onclick = function () {
  menu.classList.toggle("active");
  document.body.style = "overflow:hidden;";
};
menuclose.onclick = function () {
  menu.classList.toggle("active");
  document.body.style = "overflow:y;";
};

//// drop down for mobil menu

$("i.down-arrow").on("click", function () {
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(this).closest("li").find(".moibile__drop-down--menu").hide();
  } else {
    $("span.open").each(function () {
      $(this).removeClass("open");
      $(this).closest("li").find(".moibile__drop-down--menu").hide();
    });
    $(this).addClass("open");
    $(this).closest("li").find(".moibile__drop-down--menu").show();
  }
});

// menu end
