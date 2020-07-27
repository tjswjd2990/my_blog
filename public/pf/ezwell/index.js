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

$(function() {
  $.scrollify({
      section: ".panel",
      scrollbars: false,
      interstitialSection:".header,.footer",
      before: function(i, panels) {
          var ref = panels[i].attr("data-section-name");

          $(".pagination .active").removeClass("active");

          $(".pagination")
              .find('a[href="#' + ref + '"]')
              .addClass("active");
      },
      afterRender: function() {
          var pagination = '<ul class="pagination">';
          var activeClass = "";
          $(".panel").each(function(i) {
              activeClass = "";
              if (i === 0) {
                  activeClass = "active";
              }
              pagination +=
                  '<li><a class="' +
                  activeClass +
                  '" href="#' +
                  $(this).attr("data-section-name") +
                  '"><span class="hover-text">' +
                  $(this)
                  .attr("data-section-name")
                  .charAt(0)
                  .toUpperCase() +
                  $(this)
                  .attr("data-section-name")
                  .slice(1) +
                  "</span></a></li>";
          });

          pagination += "</ul>";

          $(".pagination a").on("click", $.scrollify.move);
      }
  });
});