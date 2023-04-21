const cartIcon =document.querySelector("#shopping-cart");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.onclick=()=>{
    cart.classList.add("active");


}
cartClose.onclick=()=>{
    cart.classList.remove("active");

}

//Remove item on cart
const removeItem = document.querySelectorAll(".remove-item");
removeItem.forEach((item)=>{
    item.onclick=()=>{
        item.parentElement.remove();

    }
})
//plus and minus
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
//function increse value
plus.forEach((item)=>{
    item.onclick=()=>{
        item.previousElementSibling.value++;

    }
}
)
//function decrease value
minus.forEach((item)=>{
    item.onclick=()=>{
        item.nextElementSibling.value--;
        
    }
}
)
//add to cart
const addToCart = document.querySelectorAll(".add-to-cart");
for(var i=0;i<addToCart.length;i++){
    var button =addToCart[i];
    button.addEventListener("click",addToCartClicked);

}


function addToCartClicked(event){
    var button = event.target;
    var product = button.parentElement.parentElement;
    var title = product.getElementsByClassName("product-title")[0].innerText;
    var price = product.getElementsByClassName("product-price")[0].innerText;
    var image = product.getElementsByClassName("product-image")[0].src;
    addItemToCart(title,price,image);
    updateCartTotal();
}









































































































