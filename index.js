//!Open team page
function Team() {
  window.open("team.html");
}
const signIn = document.querySelector(".sign-account");
const showForm = document.querySelector("#form");
signIn.onclick = () => {
  showForm.style.display = "flex";
};
const closeForm = document.querySelector("#close");
closeForm.onclick = () => {
  showForm.style.display = "none";
};
const BtnSignup = document.querySelector("#signUp");
const ShowSignUp = document.querySelector(".signup-content");
const ShowSignin = document.querySelector(".login-content");

BtnSignup.onclick = () => {
  ShowSignUp.style.display = "flex";
  ShowSignin.style.display = "none";
};
const BackToLogin = document.querySelector(".bx-arrow-back");
BackToLogin.onclick = () => {
  ShowSignUp.style.display = "none";
  ShowSignin.style.display = "flex";
};

// const SignUp =document.querySelector("#signup-content");

//!show menu
const allMenu = document.querySelector(".All-menu");
const showMenu = document.querySelector(".menu-icon");
const removeMenu = document.querySelector(".remove-menu");
showMenu.onclick = () => {
  allMenu.style.display = "block";
  showMenu.style.color = "orange";
};
removeMenu.onclick = () => {
  allMenu.style.display = "none";
  showMenu.style.color = "black";
};

//!slide show
var slideshows = document.querySelectorAll('[data-component="slideshow"]');
// Apply to all slideshows that you define with the markup wrote
slideshows.forEach(initSlideShow);

function initSlideShow(slideshow) {
  var slides = document.querySelectorAll(
    `#${slideshow.id} [role="list"] .slide`
  ); // Get an array of slides

  var index = 0,
    time = 5000;
  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");

    //Go over each slide incrementing the index
    index++;

    // If you go over all slides, restart the index to show the first slide and start again
    if (index === slides.length) index = 0;

    slides[index].classList.add("active");
  }, time);
}
function home() {
  window.open("home.html");
}
//scrolling to product
function scrollto() {
  document.getElementById("product").scrollIntoView();
}
//products type
const ProductType = document.querySelector(".menu-item").querySelectorAll("a");
ProductType.forEach((item) => {
  item.addEventListener("click", function () {
    ProductType.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  });
});

const SeeMore = document.querySelectorAll(".seemore");
const ShowMore = document.querySelectorAll(".product-info");
for (var i = 0; i < SeeMore.length; i++) {
  var button = SeeMore[i];
  button.addEventListener("click", seeMore);
}
function seeMore() {
  console.log(ShowMore);
}
