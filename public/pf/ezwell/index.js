function Siler_1(){
  var mySwiper = new Swiper('.swiper-container', {
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next',
    },
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2000,
    }
  });
}
$(function(){
  Siler_1();
})


