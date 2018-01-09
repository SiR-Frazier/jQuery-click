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

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });
  $("#read-more").click(function() {
    $("#more-text").removeClass("hidden");
    $("#read-more").addClass("hidden");
    $("#more-text").slideDown(slow);
  });
});
