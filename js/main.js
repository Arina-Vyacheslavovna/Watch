$(function () {
  $(".like").click(function () {
    $(".like").toggleClass("active");
  });
});

$(document).ready(function () {
  $(".owl-carousel").owlCarousel();
});


$(".slide-one").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 4000,
  autoplaySpeed: 1000,
  autoplayHoverPause: true,
  slideTransition: "linear",
  items: 1,
  nav: false,
});

$(".slide-two").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplaySpeed: 1500,
  autoplayHoverPause: true,
  slideTransition: "linear",
  items: 2,
  nav: true,
  navText: ["◀ Prev ","Next ▶"],
  
  responsive: {
    0: {
      items: 1.2,
    },
    320: {
      items: 1.3,
    },
    480: {
      items: 1.4,
    },
    768: {
      items: 2.2,
    },
    1199: {
      items: 3.5,
    },
  },
});
