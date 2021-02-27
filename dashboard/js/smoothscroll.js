const scrolls = document.querySelectorAll(".smoothscroll");

for (const scroll of scrolls) {
  scroll.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const dataScroll = this.getAttribute("data-scroll");
  const offsetTop = document.getElementById(dataScroll).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });


const focusInputTwoSection = () => {
  if (dataScroll == "section2"){
    document.querySelector(".focus-input").focus();
}
}

setTimeout(focusInputTwoSection, 650);




}