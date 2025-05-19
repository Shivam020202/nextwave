function isElementInViewport($el) {
  var top = $el.offset().top;
  var bottom = top + $el.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return bottom > viewportTop && top < viewportBottom;
}

$(window).on("scroll", function () {
  if (isElementInViewport($(".odometer"))) {
    setTimeout(function () {
      $(".style-1-1").html(20);
      $(".style-1-2").html(1.8);
      $(".style-1-3").html(1800);
      $(".style-1-4").html(3);
    }, 0);
  }
});
