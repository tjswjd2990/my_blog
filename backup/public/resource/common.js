function LeftTopBar__init() {
    $('.top-bar > .left-side-icon').click(function (){
        var $leftSideBar = $('.left-side-bar');
        var $leftSideIcon = $('.left-side-icon');

        if ($leftSideIcon.hasClass('active')){
            $leftSideIcon.removeClass('active');
            $leftSideBar.removeClass('active');
        }
        else{
            $leftSideIcon.addClass('active');
            $leftSideBar.addClass('active');
        }
    })
}

$(function() {
    LeftTopBar__init();
});
