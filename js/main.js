const hamburgerMenu = document.querySelector('.hamburger-menu');

const navi = document.getElementById('hamburger-navigation');

hamburgerMenu.addEventListener('click', function () {
	navi.classList.toggle('active');
	hamburgerMenu.classList.toggle('active');
});

const hamburgerMenuSections = document.querySelectorAll(
  '.hamburger-menu-section'
);

hamburgerMenuSections.forEach((hamburgerMenuSection) => {
  hamburgerMenuSection.addEventListener('click', function () {
    hamburgerMenu.classList.remove('active');
    navi.classList.remove('active');
  });
});

// スクロールして表示領域に入ったらclass付与
$(function () {
  $(".reason__wrap-left").on("inview", function () {
    $(this).addClass("is-inview");
  });
  $(".reason__wrap-right").on("inview", function () {
    $(this).addClass("is-inview");
  });
  $(".voice__wrap").on("inview", function () {
    $(this).addClass("is-inview");
  });
});