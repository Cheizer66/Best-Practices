// GLOBAL STATE VARIABLES

// GLOBAL STATE FUNCTIONS

$(document).ready(function () {
  $(".categories__inactive").click(function () {
    $(".categories__inactive").not(this).removeClass("categories__active");
    $(this).toggleClass("categories__active");
  });
  $(".themes__inactive").click(function () {
    $(".themes__inactive").not(this).removeClass("themes__active");
    $(this).toggleClass("themes__active");
  });
  $(".focus__inactive").click(function () {
    $(".focus__inactive").not(this).removeClass("focus__active");
    $(this).toggleClass("focus__active");
  });
});

// if ($(".categories__inactive").not(this).hasClass("categories__active")) {
//   $(".themes__inactive").removeClass("themes__active");
// }
