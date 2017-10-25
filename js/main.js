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

$(".shortcut").click(function() {
  console.log("#" + $(this).text().toLowerCase());
  const id = $(this).text().toLowerCase();
  const headingTop = $("#"+id)[0].offsetTop - 20;

  const scrollTime = 1500;
  $('html, body').animate({
      scrollTop: headingTop
  }, scrollTime);
});
