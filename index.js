//!Open team page
function Team() {
  window.open("team.html");
}
const signIn = document.querySelector(".login");
const showForm = document.querySelector("#form");
signIn.onclick = () => {
  showForm.style.display = "flex";
};
const signUp = document.querySelector("#signup-btn");
const SignIn = document.querySelector(".login-content");
signUp.onclick = () => {
  SignIn.style.display = "none";

};

const signUpBtn=document.querySelector("#signUp-btn");
const signUpForm=document.querySelector("#signUp-form");
signUpBtn.onclick=()=>{
  signUpForm.style.display="flex";
  showForm.style.display="none";
}









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
const ProductType = document
  .querySelector(".products-type")
  .querySelectorAll("a");
console.log(ProductType);
ProductType.forEach((item) => {
  item.addEventListener("click", (e) => {
    ProductType.forEach((nav) => nav.classList.remove("active"));
    item.classList.add("active");
  });
});
