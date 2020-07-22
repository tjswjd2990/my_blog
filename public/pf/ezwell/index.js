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

//슬라이더 자바스크립트 사용 시 지금 이런 형태를 해줘야 작동가능 **그냥암기**
