jQuery(document).ready(function () {
  let reveal = document.querySelectorAll(".reveal");

  reveal.forEach((el) => {
    let headings = el.querySelectorAll(".animated-text");

    let tl = gsap.timeline().from(headings, {
      y: -40,
      stagger: 0.1,
      opacity: 0,
      duration: 1,
      speed: 400,
      
    });
    if (window.innerWidth < 768) {
      ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        end: "top 40%",
        markers: false,
        animation: tl,
      });
    }
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

  $(window).width(function () {
    if ($(window).width() > 768) {
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
            '.slider .slick-track div[data-slick-index="' +
              progressBarIndex +
              '"]'
          ).attr("aria-hidden") === "true"
        ) {
          progressBarIndex = $(
            '.slider .slick-track div[aria-hidden="false"]'
          ).data("slickIndex");
          startProgressbar();
        } else {
          percentTime += 1 / (time + 5);
          $(".inProgress" + progressBarIndex).css({
            height: percentTime + "%",
          });
          jQuery(".item" + progressBarIndex).addClass("active");

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
          jQuery(this).removeClass("active");
        });

        $(".inProgress").css({
          height: 0 + "%",
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
    } else {
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
            '.slider .slick-track div[data-slick-index="' +
              progressBarIndex +
              '"]'
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
          jQuery(this).removeClass("active");
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
    }
  });

  $(".testimonial_slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    variableWidth: false,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    pauseOnHover: false,
  });
  $(".award-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 6000,
    arrows: false,
    slidesToShow: 1,
    variableWidth: false,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    pauseOnHover: false,
  });

  // cashflo advantage slider
  // $(".advantage-slider").slick({
  //   arrows: true,
  //   dots: false,
  //   autoplay: false,
  //   centerMode: true,
  //   centerPadding: "190px",
  //   speed: 900,
  //   infinite: true,
  //   cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 575,
  //       settings: {
  //         slidesToShow: 1,
  //         centerPadding: "60px",
  //       },
  //     },
  //   ],
  // });

  $(".coral-wrapper").mousemove(function (ev) {
    var gradient = this;
    gradient.style.background =
      "radial-gradient( circle at " +
      ev.clientX +
      "px " +
      ev.clientY +
      "px, " +
      "rgb(255 241 227) -90%, " +
      "rgb(239 112 101) 39.27%)";
  });
  $(".coral-wrapper").mouseout(function () {
    $(".coral-wrapper").css(
      "background",
      "linear-gradient(52.86deg, #EF7065 0%, #FF9A85 109.94%)"
    );
  });

  // var horizontal_scroll_tl = gsap.timeline({
  //   scrollTrigger: {
  //     trigger: ".wrapper",
  //     scrub: 0.3,
  //     start: "bottom bottom",
  //     end: "bottom left",
  //   }})
  // horizontal_scroll_tl
  //   .to(".marquee", {xPercent: -66.666,})
  $(".line-highlight").hover(
    function () {
      var date = $(this).data("date");
      var x = parseFloat($(this).attr("x"));
      var y = parseFloat($(this).attr("y"));
      var width = parseFloat($(this).attr("width"));
      var height = parseFloat($(this).attr("height"));

      $('.line-highlight[data-date="' + date + '"]').addClass("highlight");
      $(this).addClass("highlight-hover");

      $(".line-highlight")
        .not('.highlight-hover, [data-date="' + date + '"]')
        .each(function () {
          var rectX = parseFloat($(this).attr("x"));
          var rectY = parseFloat($(this).attr("y"));
          var rectWidth = parseFloat($(this).attr("width"));
          var rectHeight = parseFloat($(this).attr("height"));
          console.log(width, "width");
          console.log(height, "width");
          if (rectX + rectWidth == x && rectY == y) {
            $(this).addClass("highlight");
          } else if (rectX == x + width && rectY == y) {
            $(this).addClass("highlight");
          } else if (rectY + rectHeight == y && rectX == x) {
            $(this).addClass("highlight");
          } else if (rectY == y + height && rectX == x) {
            $(this).addClass("highlight");
          }
        });
    },
    function () {
      $(".line-highlight").removeClass("highlight highlight-hover");
    }
  );
});





// Motion animation


document.addEventListener('DOMContentLoaded', function() {
  const twoWayCurve = document.querySelector('#two_way_curve');
  const threeWayCurve = document.querySelector('#three_way_curve');
  
// Set the initial dash offset to the total length of the path
const totalLengthTwoWay = twoWayCurve.getTotalLength();
const totalLengthThreeWay = threeWayCurve.getTotalLength();

// Set up the animation
gsap.set([twoWayCurve, threeWayCurve], {
  strokeDasharray: totalLengthTwoWay,
  strokeDashoffset: totalLengthTwoWay,
  'stroke-dashoffset': -totalLengthTwoWay
});

gsap.to(twoWayCurve, {
  strokeDashoffset: -totalLengthTwoWay,
  duration: 7,
  repeat: -1,
  ease: 'none',
  delay: 1,
});

gsap.to(threeWayCurve, {
  strokeDashoffset: -totalLengthThreeWay,
  duration: 7,
  repeat: -1,
  ease: 'none',
  delay: 3.5, 
});

});


// motion Second animation
// Select the paths
document.addEventListener('DOMContentLoaded', function() {
  const twoWayCurves = document.querySelector('#two_way_curves');
  const threeWayCurves = document.querySelector('#three_way_curves');
  const oneWayCurves = document.querySelector('#one_way_curves');
  // Set the initial dash offset to the total length of the path
  const totalLengthTwoWays = twoWayCurves.getTotalLength();
  const totalLengthThreeWays = threeWayCurves.getTotalLength();
  const totalLengthOneWays = oneWayCurves.getTotalLength();
  // Set up the animation
  gsap.set([twoWayCurves, threeWayCurves, oneWayCurves], {
    strokeDasharray: totalLengthTwoWays,
    strokeDashoffset: totalLengthTwoWays,
    'stroke-dashoffset': -totalLengthTwoWays,
  });
  gsap.to(twoWayCurves,  {
    strokeDashoffset: -totalLengthTwoWays,
    duration: 7,
    repeat: -1,
    ease: 'none',
    delay: 1,
  });
  gsap.to(oneWayCurves,  {
    strokeDashoffset: -totalLengthOneWays,
    duration: 7,
    repeat: -1,
    ease: 'none',
    delay: 2,
  });
  gsap.to(threeWayCurves, {
    strokeDashoffset: -totalLengthThreeWays,
    duration: 7,
    repeat: -1,
    ease: 'none',
    delay: 3.5,
  });
  });


  window.addEventListener("load", function () {
    let horizontalSections = gsap.utils.toArray(".section-pin");
    horizontalSections.forEach((section) => {
      let wrap = section.querySelector(".pin-wrap");
      let wrapWidth = wrap.offsetWidth;
      let horizontalScrollLength = wrapWidth - window.innerWidth;

      // const scrolled = gsap
      //   .timeline({
      //     scrollTrigger: {
      //       trigger: horizontalSections,
      //       scrub: true,
      //       start: "top center",
      //       end: "bottom center",
      //     },
      //   })
      //   .to(wrap, { autoAlpha: 1, left: 0 }, 0);

      const main = gsap
        .timeline({
          scrollTrigger: {
            scrub: true,
            trigger: section,
            pin: true,
            start: "top top",
          },
        })
        .to(wrap, {
          x: -horizontalScrollLength,
          ease: "none",
        });
    });
  });