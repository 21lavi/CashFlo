$(document).ready(function () {

  let reveal = document.querySelectorAll(".reveal");

  reveal.forEach((el) => {
    let headings = el.querySelectorAll(".animated-text");
    let btn = el.querySelector(".btn");

    let tl = gsap
      .timeline()
      .from(headings, {
        y: -40,
        stagger: 0.3,
        opacity: 0,
        duration: 1,
        
      })
      .from(
        btn,
        { y: -40, opacity: 0, duration: 1.5,  },
        "-=0.6"
      );    

    ScrollTrigger.create({
      trigger: el,
      start: "center 100%",
      end: "top 50%",
      markers: false,
      toggleActions: "play none none reverse ",
      animation: tl,
    });
  });



  $(".slider").slick({
    arrows: false,
    dots: false,
    autoplay: true,
    fade: true,
    speed: 900,
    infinite: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  //ticking machine
  var percentTime;
  var tick;
  var time = 0.1;
  var progressBarIndex = 0;

  $(".progressBarContainer .progressBar").each(function (index) {
    var progress = "<div class='inProgress inProgress" + index + "'></div>";
    $(this).html(progress);
  });

  $(".progressBarContainer h3").each(function (index) {
    jQuery(this).addClass("slideText" + index);
  });

  $(".progressBarContainer .item").each(function (index) {
    jQuery(this).addClass("item" + index);
  });


  function startProgressbar() {
    resetProgressbar();
    percentTime = 0;
    tick = setInterval(interval, 10);
  }

  function interval() {
    if (
      $(
        '.slider .slick-track div[data-slick-index="' + progressBarIndex + '"]'
      ).attr("aria-hidden") === "true"
    ) {
      progressBarIndex = $(
        '.slider .slick-track div[aria-hidden="false"]'
      ).data("slickIndex");
      startProgressbar();
    } else {
      percentTime += 1 / (time + 5);
      $(".inProgress" + progressBarIndex).css({
        width: percentTime + "%",
      });
      jQuery(".item" + progressBarIndex).addClass("active");
      // $(".slideText" + progressBarIndex).css({
      //   opacity: percentTime + "%",
      // });
      if (percentTime >= 100) {
        $(".single-item").slick("slickNext");
        progressBarIndex++;
        if (progressBarIndex > 2) {
          progressBarIndex = 0;
        }
        startProgressbar();
      }
    }
  }

  function resetProgressbar() {
    $(".progressBarContainer .item").each(function (index) {
      jQuery(this).removeClass('active');
    });

    $(".inProgress").css({
      width: 0 + "%",
    });
    clearInterval(tick);
  }
  startProgressbar();
  // End ticking machine

  $(".item").click(function () {
    clearInterval(tick);
    var goToThisIndex = $(this).find("span").data("slickIndex");
    $(".single-item").slick("slickGoTo", goToThisIndex, false);
    startProgressbar();
  });

  $(".testimonial_slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    variableWidth: false,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
  });
  // cashflo advantage slider
  $(".advantage-slider").slick({
    arrows: true,
    dots: false,
    autoplay: true,
    centerMode: true,
    centerPadding: "190px",
    speed: 900,
    infinite: true,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          centerPadding: "60px",
        },
      },
    ],
  });
  $(".technique-slider").slick({
    slidesToShow: 1,
    infinite:true,
    dots:true,
    arrows:false,
    slidesToScroll: 1,
    autoplay:false
   });
  // card hover gradient
  // $(".advantage-slider-inner .item").mouseover(function (e) {
  //   $('.advantage-slider-inner .item').css('background', 'transparent')
  //   var w = $('.item').width();
  //   var h = $('.item').height();
  //   $(this).css('background','radial-gradient(ellipse at '+e.pageX+'px '+e.pageY+'px, #ef7065 50%, #ff9a85 100%)');
  // });
  // $(".advantage-slider-inner .item").mouseout(function(){
  //   $(".advantage-slider-inner .item").css("background", "transparent");
  // });
});







