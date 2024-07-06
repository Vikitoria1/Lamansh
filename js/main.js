const btn = document.querySelector(".menu-btn");
const inner = document.querySelector(".header__inner");

btn.addEventListener("click", () => {
  inner.classList.toggle("menu-open");
});

$(document).ready(function () {
  $(".complete__img").slick({
    arrows: false,
    infinity: true,
    initialSlide: 1,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          centerMode: true,
          variableWidth: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          infinite: false,
          centerMode: false,
          variableWidth: true,
        },
      },
    ],
  });
});
