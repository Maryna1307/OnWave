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
        slidesToShow: 4,
        slidesToScroll: 1,
      });
  })
  
 