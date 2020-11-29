// GLOBAL STATE VARIABLES

// GLOBAL STATE FUNCTIONS

$(document).ready(function () {
  $(".categories__inactive").click(function () {
    $(".themes__inactive").removeClass("themes__active");
    $(".focus__inactive").removeClass("focus__active");
    $(".questions__inactive").removeClass("questions__active");
    $(".bestPractices__inactive").removeClass("bestPractices__active");
    $(".categories__inactive").not(this).removeClass("categories__active");
    $(this).addClass("categories__active");
  });
  $(".themes__inactive").click(function () {
    $(".focus__inactive").removeClass("focus__active");
    $(".questions__inactive").removeClass("questions__active");
    $(".bestPractices__inactive").removeClass("bestPractices__active");
    $(".themes__inactive").not(this).removeClass("themes__active");
    $(this).addClass("themes__active");
  });
  $(".focus__inactive").click(function () {
    $(".questions__inactive").removeClass("questions__active");
    $(".bestPractices__inactive").removeClass("bestPractices__active");
    $(".focus__inactive").not(this).removeClass("focus__active");
    $(this).addClass("focus__active");
  });
  $(".questions__inactive").click(function () {
    $(this).addClass("questions__active");
    $(".questions__inactive").not(this).removeClass("questions__active");
    $(".bestPractices__inactive").addClass("bestPractices__active");
  });
});

// if ($(".categories__inactive").not(this).hasClass("categories__active")) {
//   $(".themes__inactive").removeClass("themes__active");
// }

let state = {
  category: [],
  themes: [],
  focus: [],
  question: [],
  answer: [],
};

// const divsFocus = document.querySelectorAll(".focus__text");

// document.getElementById("focusText" + index).innerHTML = "check";

const emptyArr = ["", "", "", "", "", ""];
