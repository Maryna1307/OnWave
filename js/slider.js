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

        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  infinite: true,

              }
          },
          {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
          },
          {
            breakpoint: 562,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
          },
        ]
      });
  })
  
  $(document).ready(function(){
    $('.partners__slider').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        centerMode: true,

        responsive: [
          {
              breakpoint: 992,
              settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  infinite: true,
              }
          },
          {
            breakpoint: 562,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        ]
      });
  })

