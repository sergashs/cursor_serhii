function today() {
  var mydate = new Date();
  var dayarray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var montharray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  document.getElementById("today-script").innerHTML =
    "" +
    dayarray[mydate.getDay()] +
    ", " +
    montharray[mydate.getMonth()] +
    " " +
    mydate.getDate() +
    ", " +
    mydate.getFullYear();
}

today();

$("a").attr("target", "_blank");
$("#sidebar").scrollToFixed({ marginTop: 43 });

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var start = +new Date();
var people = random(9000, 11000);
var DISCOUNTs_start = random(400, 600);
var DISCOUNTs = DISCOUNTs_start;

var pr = $("#people-reading");
var tl = $("#DISCOUNTs-left");
var fb = $("#flash-banner");

function data() {
  people += random(200, 500);

  if (shown) {
    if (DISCOUNTs > 50) DISCOUNTs -= random(10, 200) / 100;
    else DISCOUNTs -= random(10, 30) / 100;

    DISCOUNTs = Math.max(5, DISCOUNTs);
    tl.text(Math.floor(DISCOUNTs));
  }

  pr.text(people);

  if (DISCOUNTs < 50) fb.addClass("flashing");
}

var shown = false;
var ts = $("#trails-start");
var hT = ts.offset().top;
var hH = ts.outerHeight();
var wH = $(window).height();

var elH =
  $(".container").css("position") === "fixed" ? $(".container") : $(window);

elH.scroll(function () {
  if (shown) return;

  var wS = elH.scrollTop();

  if (wS > hT + hH - wH) {
    shown = true;
    $("#trending").removeClass("hidden-DISCOUNTs");
  }
});

data();
window.setInterval(data, 1000);
