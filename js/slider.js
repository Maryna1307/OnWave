$(document).ready(function(){
    $('.first-screen').slick({
        dots: true,
        arrows: false,

        autoplay: true,
        autoplaySpeed: 4500,
        speed: 1500,
        slideToShow: 1,
        swipe: true,
    });
  });

  $(document).ready(function(){
    $('.slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
      });
  })
  
  $(document).ready(function(){
    $('.partners__slider').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        centerMode: true
      });
  })

