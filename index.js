window.onscroll = function () {
  myFunction();
};

var header = document.getElementById("mynav-bar");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>;
const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 5000,

    disableOnInteration: false,
  },
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
