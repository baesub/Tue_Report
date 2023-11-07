$(document).ready(function () {
  // When hovering over an image, apply the zoom effect
  $(".gallery img").hover(
    function () {
      $(this).css("transform", "scale(1.1)");
    },
    function () {
      $(this).css("transform", "scale(1.0)");
    }
  );
});
