function MobileSideBar__toggle() {
    var actived = $('.btn-toggle-mobile-side-bar').hasClass('active');

    if ( actived ) {
        $('.btn-toggle-mobile-side-bar').removeClass('active');
        $('.mobile-side-bar').removeClass('active');
        $('.mobile-side-bar-bg').removeClass('active');
        $('html').removeClass('mobile-side-bar-actived');
    }
    else {
        $('.btn-toggle-mobile-side-bar').addClass('active');
        $('.mobile-side-bar').addClass('active');
        $('.mobile-side-bar-bg').addClass('active');
        $('html').addClass('mobile-side-bar-actived');
    }
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar, .mobile-side-bar-bg').click(MobileSideBar__toggle);

    $('.mobile-side-bar .menu-box-1 > ul > li').click(function() {
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        }
        else {
            $(this).addClass('active');
        }

        $(this).siblings('.active').removeClass('active');
    });
}

$(function() {
    MobileSideBar__init();
})


//siblings는 형제자매!