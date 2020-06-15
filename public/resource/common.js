function MobileSideBar__toggle() {
    var actived = $('.btn-toggle-mobile-side-bar').hasClass('active');

    if ( actived ) {
        $('.btn-toggle-mobile-side-bar').removeClass('active');
        $('.mobile-side-bar').removeClass('active');
        $('.mobile-side-bar-bg').removeClass('active');
    }
    else {
        $('.btn-toggle-mobile-side-bar').addClass('active');
        $('.mobile-side-bar').addClass('active');
        $('.mobile-side-bar-bg').addClass('active');
    }
}

function MobileSideBar__init() {
    $('.mobile-top-bar .btn-toggle-mobile-side-bar').click(MobileSideBar__toggle);
}

$(function() {
    MobileSideBar__init();
})