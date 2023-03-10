$( document ).ready(function() {
  // text animation
  // gsap.from(".animated-text", {
  //   ease:"power3.out",
  //   autoAlpha: 0,
  //   duration: 1.5,
  //   start: "center 100%", 
  //     end:"top 50%",
	// 		markers: true,
  //   y: -80,
  //   stagger: 0.3,
  // });
  let reveal = document.querySelectorAll(".reveal") 

  reveal.forEach( (el) => {
    let headings = el.querySelectorAll(".animated-text")
    let btn = el.querySelector(".btn")

    let tl = gsap.timeline ()
    .from(headings, {y:-80, stagger:0.3, opacity:0, duration:1, ease:"power3.out"})
    .from(btn, {y:-80, opacity:0, duration:1.5, ease:"power3.out"},'-=0.6')

    ScrollTrigger.create ({
        trigger: el,
        start: "center 100%", 
        end:"top 50%",
        markers: false,
        toggleActions: "play none none reverse ",
        animation:tl
        })
  })

  
  // video button popup animation
  var tradeButton = document.getElementById("tradeButton");
  var modalOverlayNew = document.querySelector(".modalOverlayNew");
  var modal = document.querySelector(".messageWrapper");
  var toggleTradeButton = false;

  TweenMax.set([modalOverlayNew, modal], { autoAlpha: 0 });

  tradeButton.addEventListener("click", function () {
    var newRect = getPosition(modal, tradeButton);
    TweenMax.set(modal, {
      x: newRect.center,
      y: newRect.top,
      width: newRect.width,
      height: newRect.height,
    });
    toggleTradeButton = true;
    var tl = new TimelineMax();
    tl.to(modalOverlayNew, 0.5, { autoAlpha: 0.75 });
    tl.to(modal, 0.5, {
      x: 0,
      y: 0,
      width: 800,
      height: 400,
      autoAlpha: 1,
    });

    document.querySelector(".message").innerHTML = 'CashFlo';
  });

  modalOverlayNew.addEventListener("click", function () {
    if (toggleTradeButton == true) {
      var newRect = getPosition(modal, tradeButton);
      var tl = new TimelineMax();

      tl.to(modal, 0.5, {
        autoAlpha: 0,
        x: newRect.center,
        y: newRect.top,
        height: newRect.height,
        width: newRect.width,
      });
      tl.to(".modalOverlayNew", 0.5, { autoAlpha: 0 });
    }
  });
  function getPosition(elem, target) {
    var targetRect = target.getBoundingClientRect();
    var elemRect = elem.getBoundingClientRect();

    TweenLite.set(elem, {
      x: 0,
      y: 0,
      width: targetRect.width,
      height: targetRect.height,
    });
    var newRect = elem.getBoundingClientRect();
    TweenLite.set(elem, { width: elemRect.width, height: elemRect.height });
    return {
      left: targetRect.left - newRect.left,
      top: targetRect.top - newRect.top,
      width: newRect.width,
      height: newRect.height,
    };
  }
  // video popup js end

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
    jQuery(this).addClass('slideText'+index);
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
      $(".slideText" + progressBarIndex).css({
        opacity: percentTime + "%",
      });
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
  autoplay: false,
  centerMode: true,
  centerPadding: '190px',
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
      },
    },
  ],
});




});


