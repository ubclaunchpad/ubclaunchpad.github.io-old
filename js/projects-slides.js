(function () {
  $('.contain').slick({
    autoplay: true,
    autoplaySpeed: 2000,

    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 1,

    arrows: true,
    speed: 500,

    responsive: [
      {
        breakpoint: 1336,
        settings: {
          autoplaySpeed: 1500,
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 900,
        settings: {
          autoplaySpeed: 1000,
          arrows: false,
          centerMode: true,
          centerPadding: '20px',
          slidesToShow: 1
        }
      },
    ]
  });
}());
