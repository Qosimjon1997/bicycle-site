var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows : true,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

function slowScroll(id) {
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
}

$(document).on("scroll", function () {
  if($(window).scrollTop() === 0)
    $("header").removeClass("fixed");
  else
    $("header").attr("class", "fixed");
});