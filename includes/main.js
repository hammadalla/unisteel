$(document).ready(function () {
    $("#owl-carousels").owlCarousel({
        loop: true,
        touchDrag: true,
        margin: 5,
        dots: false,
        nav: true,
        center: true,
        autoWidth: true,
        autoplay: true,
        responsive: {
            0: {
                items: 2,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 1,
            },
            1200: {
                items: 1,
            }

        },
    });
});

// $(document).ready(function () {
//     $(".loading").fadeOut(3000);
//   });

new PureCounter();



// $(".nav-link.dropdown-item.go-to").on("click", function () {
// 	window.location.href = $(this).attr("href");
// })

//   ------------------------------


$(".nav-link").click(function () {
    $(this).addClass("active")
    $(".nav-link").not(this).removeClass("active")

})
/*=========================    Active link     =========================*/


jQuery(document).ready(function ($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});

let sectionTop = $(".change").offset().top;

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();

  if (scrollTop > sectionTop) {
    $(".header-area").addClass("bg-white");
    $(".nav-link").addClass("text-dark");
    $(".navbar").addClass("shadow");
    $(".header-area-social i").addClass("text-muted");
  } else {
    $(".header-area").removeClass("bg-white");
    $(".nav-link").removeClass("text-dark");
    $(".navbar").removeClass("shadow");
    $(".header-area-social i").removeClass("text-muted");
  }
});


new WOW().init();



