(function () {
    $('.contain').slick({
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        arrows: true,

        responsive: [
          {
            breakpoint: 1336,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          },
        ]
    });
}());
