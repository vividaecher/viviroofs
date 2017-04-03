
$(".navbar-toggle").on("click", function() {
  $(".hamburger-nav").toggleClass("visible");
  $(this).toggleClass("close-navigation");
  $("body").toggleClass("navigation-open");
});

$(window).scroll(function(e){
  var amount = $(window).scrollTop();

  if( amount > 100 ){
    $('.logo').addClass('color-logo');
  }else {
    $('.logo').removeClass('color-logo');
  }

  if( amount > 100 ){
    $('.navbar-toggle').addClass('color-navbar');
  }else {
    $('.navbar-toggle').removeClass('color-navbar');
  }

  if( amount > 100 ){
    $('.navbar-toggle span').addClass('color-span');
  }else {
    $('.navbar-toggle span').removeClass('color-span');
  }

});
