// dropdown
let dropdownListOpen = document.querySelector(
	".user-setting-dropdown__open-link"
);
let dropdownList = document.querySelector(".user-setting-dropdown__menu");

dropdownListOpen.onclick = function () {
	dropdownList.classList.toggle("user-setting-dropdown__menu--open");
};

// checkbox checked
let checkbox = document.querySelector(".toggle-checkbox__input");
let checkboxToggle1 = document.querySelector(".checkbox-wrapper__title--1");
let checkboxToggle2 = document.querySelector(".checkbox-wrapper__title--2");

checkboxToggle1.onclick = function () {
	document.querySelector(".toggle-checkbox__input").checked = false;
};

checkboxToggle2.onclick = function () {
	document.querySelector(".toggle-checkbox__input").checked = true;
};

// header burger right

let burgerRightButton = document.querySelector(".header__burger");
let burgerRightContent = document.querySelector(".header__dropdown-right");

burgerRightButton.onclick = function () {
	burgerRightButton.classList.toggle("header__burger--open");
	burgerRightContent.classList.toggle("header__dropdown-right--open");
};
