$(document).ready(function() {
  $("#click-show").click(function() {
    $("#toggle-1").addClass("hidden");
    $("#toggle-p").removeClass("hidden");
    $("#toggle-2").slideDown();
    $("#toggle-3").slideDown();
  });
  $("#click-hide").click(function() {
    $("#toggle-1").removeClass("hidden");
    $("#toggle-p").addClass("hidden");
    $("#toggle-2").slideUp();
    $("#toggle-3").slideUp();
  });
});
