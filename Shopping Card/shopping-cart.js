const cartIcon =document.querySelector("#shopping-cart");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.onclick=()=>{
    cart.classList.add("active");

}
cartClose.onclick=()=>{
    cart.classList.remove("active");
}

