$(function ImgSlider__Init(){
    $('.img-slider > .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        navText: [
        '<img src="https://tjswjd2990.github.io/img1/pf/PUBG/ico_slick_button.png" alt="">',
        '<img src="https://tjswjd2990.github.io/img1/pf/PUBG/ico_slick_button.png" alt="">'
        ],
        navContainer: '.img-slider > .nav-icon',
        loop: true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
});
