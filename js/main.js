const btn = document.querySelector(".menu-btn");
const inner = document.querySelector(".header__inner");

btn.addEventListener("click", () => {
  inner.classList.toggle("menu-open");
});

$(document).ready(function () {
  $(".complete__img").slick({
    arrows: false,
    infinite: false,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
        },
      },
      {
        breakpoint: 414,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
        },
      },
    ],
  });
});
