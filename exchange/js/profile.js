$("li.open-tab").on("click", function () {
  $(this).addClass("li").find(".down-arrow").addClass("open");
  if ($(this).hasClass("open")) {
    $(this).removeClass("open");
    $(this).closest("li").find(".open-tab--content").hide();
    $(this).closest("li").find(".down-arrow").removeClass("open");
  } else {
    $(this).addClass("open");
    $(this).closest("li").find(".open-tab--content").show();
  }
});
