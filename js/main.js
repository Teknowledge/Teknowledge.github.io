// from https://stackoverflow.com/questions/21474678/scrolltop-animation-without-jquery

$(".about-us-button").click(function() {
  const bottomOfTopSection =
    $(".main-splash-container").offset().top + 
    $(".main-splash-container").outerHeight(true);
  const scrollTime = 1500;
  $('html, body').animate({
      scrollTop: bottomOfTopSection
  }, scrollTime);
});


