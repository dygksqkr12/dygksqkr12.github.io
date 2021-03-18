window.addEventListener("load", () => {
  $(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    $("section").css({
      "background-position-x": +scroll_position + "px",
    });
  })();
});
