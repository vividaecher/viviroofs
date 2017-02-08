
$(".navbar-toggle").on("click", function() {
  $(".hamburger-nav").toggleClass("visible");
  $(this).toggleClass("close-navigation");
  $("body").toggleClass("navigation-open");
});

$(".partei-radio").on("click", function() {
  $(".submit button").removeAttr("disabled");
});
