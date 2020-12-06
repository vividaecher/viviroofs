$(window).scroll(function(e){
    var amount = $(window).scrollTop();

    if( amount > 100 ){
        $('header').addClass('header-fixed');
    }else {
        $('header').removeClass('header-fixed');
    }
});