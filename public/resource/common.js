/* 모바일 사이드 바 시작 */
function MobileSideBar__toggle() {
    var actived = $('.btn-toggle-mobile-side-bar').hasClass('active');

    if (actived) {
        $('.btn-toggle-mobile-side-bar').removeClass('active');
        $('.mobile-side-bar').removeClass('active');
        $('.mobile-side-bar-bg').removeClass('active');
        $('html').removeClass('mobile-side-bar-actived');
    } else {
        $('.btn-toggle-mobile-side-bar').addClass('active');
        $('.mobile-side-bar').addClass('active');
        $('.mobile-side-bar-bg').addClass('active');
        $('html').addClass('mobile-side-bar-actived');
    }
}

function MobileSideBar__init() {
    $('.btn-toggle-mobile-side-bar, .mobile-side-bar-bg').click(MobileSideBar__toggle);

    $('.mobile-side-bar .menu-box-1 > ul > li').click(function () {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }

        $(this).siblings('.active').removeClass('active');
    });
}
/* 모바일 사이드 바 끝 */

/* 슬라이더 시작 */
function Slider__init() {
    $('.slider > .side-bars > div').click(function () {
        var $this = $(this);
        var $slider = $this.closest('.slider');
        var $current = $slider.find(' > .slides > .active'); // 9
        var $post;

        var isLeft = $this.index() == 0;

        if (isLeft) {
            $post = $current.prev(); // 
            if ($post.length == 0) {
                $post = $slider.find(' > .slides > :last-child'); // 11
            }
        } else {
            $post = $current.next();
            if ($post.length == 0) {
                $post = $slider.find(' > .slides > :first-child'); // 9
            }
        }

        $current.removeClass('active');
        $post.addClass('active');
    });

    setInterval(function () {
        $('.top-bn-slider > .side-bars > div:first-child').click();
    }, 10000);
}
/* 슬라이더 끝 */

$(function () {
    MobileSideBar__init();
    Slider__init();
});

//siblings는 형제자매!