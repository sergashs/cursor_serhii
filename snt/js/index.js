// dropdown
let dropdownListOpen = document.querySelector(
	".user-setting-dropdown__open-link"
);
let dropdownList = document.querySelector(".user-setting-dropdown__menu");

dropdownListOpen.onclick = function () {
	dropdownList.classList.toggle("user-setting-dropdown__menu--open");
};
