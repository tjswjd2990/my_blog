function Slides() {
  $('.slick-items').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    dots: true, // 스크롤바 아래 점으로 페이지네이션 여부
    prevArrow: "<div class='btn-prev'><div class='icon-case'><i class='fas fa-chevron-left'></i></div></div>", // 이전 화살표 모양 설정
    nextArrow: "<div class='btn-next'><div class='icon-case'><i class='fas fa-chevron-right'></i></div></div>",
    dotsClass: "slick-dots", //아래 나오는 페이지네이션(점) css class 지정
    draggable: true, //드래그 가능 여부 
  });
}

$(function () {
  Slides();
})