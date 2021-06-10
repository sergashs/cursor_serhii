// // dropdown
// let dropdownListOpen = document.querySelector(".user-setting-dropdown__open-link");
// let dropdownList = document.querySelector(".user-setting-dropdown__menu");

// dropdownListOpen.onclick = function () {
// 	dropdownList.classList.toggle("user-setting-dropdown__menu--open");
// };

// // checkbox checked
// let checkbox = document.querySelector(".toggle-checkbox__input");
// let checkboxToggle1 = document.querySelector(".checkbox-wrapper__title--1");
// let checkboxToggle2 = document.querySelector(".checkbox-wrapper__title--2");

// checkboxToggle1.onclick = function () {
// 	document.querySelector(".toggle-checkbox__input").checked = false;
// };

// checkboxToggle2.onclick = function () {
// 	document.querySelector(".toggle-checkbox__input").checked = true;
// };

// // header burger right

// let burgerRightButton = document.querySelector(".header__burger");
// let burgerRightContent = document.querySelector(".header__dropdown-right");

// burgerRightButton.onclick = function () {
// 	burgerRightButton.classList.toggle("header__burger--open");
// 	burgerRightContent.classList.toggle("header__dropdown-right--open");
// };

// // header left dropdown adaptive menu

// let OpenHeaderDropdownMenu = document.querySelector(".open-header-menu");
// let HeaderDropdownMenu = document.querySelector(".header-menu");
// let HeaderDropdownMenuIcon = document.querySelector(".open-header-menu__dropdown-icon");

// OpenHeaderDropdownMenu.onclick = function () {
// 	HeaderDropdownMenu.classList.toggle("header-menu--open");
// 	HeaderDropdownMenuIcon.classList.toggle("open-header-menu__dropdown-icon--open");
// };

$(document).ready(function () {
	$(".slider-main").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		speed: 500,

		cssEase: "linear",
	});
});

$(document).ready(function () {
	$(".slider-second").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: true,
		speed: 500,

		prevArrow: $(".slider-second__prev"),
		nextArrow: $(".slider-second__next"),

		customPaging: function (slider, i) {
			return (
				'<button class="tab">' + $(slider.$slides[i]).attr("title") + '<i class="fa fa-sort-asc"></i></button>'
			);
		},
		appendDots: $(".slider-second__dots"),
	});
});

// open menu header

let openMenuButton = document.querySelector(".open-menu");
let menuHeader = document.querySelector(".menu");

openMenuButton.onclick = function () {
	menuHeader.classList.toggle("open");
};
