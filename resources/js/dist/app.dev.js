"use strict";

$(document).ready(function () {
  // hide popup akun
  $(".account").click(function () {
    $(".popup-account").slideToggle();
  }); // hide popup bahasa

  $(".lang").click(function () {
    $(".popup-lang").slideToggle(250);
  }); // hide popup notifikasi

  $(".notif").click(function () {
    $(".popup-notif").slideToggle(250);
  }); // hide popup notifikasi

  $(".chat").click(function () {
    $(".popup-chat").slideToggle(250);
  }); // hide popup cart

  $(".cart").click(function () {
    $(".popup-cart").slideToggle(250);
  }); // slick buat search item homepage
  // $('#category-search-items').slick({
  // 	slidesToShow: 3,
  // 	slidesToScroll: 1,
  // 	autoplay: true,
  // 	autoplaySpeed: 2000,
  // });
});