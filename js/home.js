
    window.onload = function() {
    // text animation
    gsap.from(".animated-text", {
        ease: 'top',
        autoAlpha: 0,
        duration: 1.5,
        y: -80,
        stagger: 0.3
      });

// video button popup animation
var tradeButton = document.getElementById("tradeButton");
var modalOverlayNew = document.querySelector(".modalOverlayNew");
var modal = document.querySelector(".messageWrapper");
var toggleTradeButton = false;

TweenMax.set([modalOverlayNew, modal], { autoAlpha: 0 });

tradeButton.addEventListener("click", function() {
  var newRect = getPosition(modal, tradeButton);
  TweenMax.set(modal, {
    x: newRect.center,
    y: newRect.top,
    width: newRect.width,
    height: newRect.height
  });  
 toggleTradeButton = true;
  var tl = new TimelineMax();
  tl.to(modalOverlayNew, 0.5, { autoAlpha: 0.75 });
  tl.to(modal, 0.5, {
    x: 0,
    y: 0,
    width: 800,
    height: 400,
    autoAlpha: 1
  });

  document.querySelector(".message").innerHTML = "Trade Ticket Here";
});

modalOverlayNew.addEventListener("click", function() {
  if(toggleTradeButton == true){
  var newRect = getPosition(modal, tradeButton);
  var tl = new TimelineMax();

  tl.to(modal, 0.5, {
    autoAlpha: 0,
    x: newRect.center,
    y: newRect.top,
    height: newRect.height,
    width: newRect.width
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
    height: targetRect.height
  });
  var newRect = elem.getBoundingClientRect();
  TweenLite.set(elem, { width: elemRect.width, height: elemRect.height });
  return {
    left: targetRect.left - newRect.left,
    top: targetRect.top - newRect.top,
    width: newRect.width,
    height: newRect.height
  };
}


}

