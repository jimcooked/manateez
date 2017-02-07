$(document).ready(function() {
  $(".clickable").click(function() {
    $("#manatee-showing").slideToggle();
    $("#manatee-hidden").slideToggle();
  });

  $("#manatee-click").click(function() {
    $("img").removeClass();
    $("img").addClass("manatee-image");
  });

  $("button#default").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });
});
