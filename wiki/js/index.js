// accordion wiki

$(function () {
	$(".wiki__accordion-item-header").on("click", function (e) {
		e.preventDefault();
		var $this = $(this);

		$this.toggleClass("active");
		$this.next().slideToggle();
		// $(".accordion__item-arrow", this).toggleClass("rotate");
	});
});

//  off input in header

$("input#headerfirst").on("change", function () {
	$("input#headersecond").prop("checked", false);
});
$("input#headersecond").on("change", function () {
	$("input#headerfirst").prop("checked", false);
});

$("input#rain").on("change", function () {
	$("input#radiation").prop("checked", false);
});
$("input#radiation").on("change", function () {
	$("input#rain").prop("checked", false);
});

// tabs for informer

if ($(".informer-tabs").length) {
	$(".informer-tabs__nav span").on("click", function () {
		$([$(this).parent()[0], $($(this).data("href"))[0]])
			.addClass("active")
			.siblings(".active")
			.removeClass("active");
	});
}

// dropdown menu in header

const $menu = $(".dropdown");

$(document).mouseup((e) => {
	if (!$menu.is(e.target) && $menu.has(e.target).length === 0) {
		$menu.removeClass("is-active");
	}
});

$(".toggle").on("click", () => {
	$menu.toggleClass("is-active");
});

// change of header animation effect

document.getElementById("rain").addEventListener("click", function () {
	let htmlClasses = document.querySelector("html").classList;
	htmlClasses.remove("radiation");
	localStorage.removeItem("radiation");
	if (localStorage.rain == "rain") {
		htmlClasses.remove("rain");
		localStorage.removeItem("rain");
	} else {
		htmlClasses.add("rain");
		localStorage.rain = "rain";
	}
});

if (localStorage.rain === "rain") {
	document.querySelector("html").classList.add("rain");
	document.getElementById("rain").setAttribute("checked", "checked");
} else if (localStorage.rain === "rain") {
	document.querySelector("html").classList.add("rain");
}

document.getElementById("radiation").addEventListener("click", function () {
	let htmlClasses = document.querySelector("html").classList;
	htmlClasses.remove("rain");
	localStorage.removeItem("rain");
	if (localStorage.radiation == "radiation") {
		htmlClasses.remove("radiation");
		localStorage.removeItem("radiation");
	} else {
		htmlClasses.add("radiation");
		localStorage.radiation = "radiation";
	}
});

if (localStorage.radiation === "radiation") {
	document.querySelector("html").classList.add("radiation");
	document.getElementById("radiation").setAttribute("checked", "checked");
} else if (localStorage.radiation === "radiation") {
	document.querySelector("html").classList.add("radiation");
}

document.getElementById("headerfirst").addEventListener("click", function () {
	let htmlClasses = document.querySelector("html").classList;
	htmlClasses.remove("headersecond");
	localStorage.removeItem("headersecond");
	if (localStorage.headerfirst == "headerfirst") {
		htmlClasses.remove("headerfirst");
		localStorage.removeItem("headerfirst");
	} else {
		htmlClasses.add("headerfirst");
		localStorage.headerfirst = "headerfirst";
	}
});

if (localStorage.headerfirst === "headerfirst") {
	document.querySelector("html").classList.add("headerfirst");
	document.getElementById("headerfirst").setAttribute("checked", "checked");
} else if (localStorage.headerfirst === "headerfirst") {
	document.querySelector("html").classList.add("headerfirst");
}

document.getElementById("headersecond").addEventListener("click", function () {
	let htmlClasses = document.querySelector("html").classList;
	htmlClasses.remove("headerfirst");
	localStorage.removeItem("headerfirst");
	if (localStorage.headersecond == "headersecond") {
		htmlClasses.remove("headersecond");
		localStorage.removeItem("headersecond");
	} else {
		htmlClasses.add("headersecond");
		localStorage.headersecond = "headersecond";
	}
});

if (localStorage.headersecond === "headersecond") {
	document.querySelector("html").classList.add("headersecond");
	document.getElementById("headersecond").setAttribute("checked", "checked");
} else if (localStorage.headersecond === "headersecond") {
	document.querySelector("html").classList.add("headersecond");
}
