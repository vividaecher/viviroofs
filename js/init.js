
$(".navbar-toggle").on("click", function() {
  $(".hamburger-nav").toggleClass("visible");
  $(this).toggleClass("close-navigation");
  $("body").toggleClass("navigation-open");
});

/*$(".partei-radio").on("click", function() {
  $(".submit button").removeAttr("disabled");
});*/

document.ontouchmove = function ( event ) {

    var isTouchMoveAllowed = true, target = event.target;

    while ( target !== null ) {
        if ( target.classList && target.classList.contains( 'disable-scrolling' ) ) {
            isTouchMoveAllowed = false;
            break;
        }
        target = target.parentNode;
    }

    if ( !isTouchMoveAllowed ) {
        event.preventDefault();
    }

};
