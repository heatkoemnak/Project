const cartIcon = document.querySelector("#shopping-cart");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.onclick = () => {
  cart.classList.add("active");
};
cartClose.onclick = () => {
  cart.classList.remove("active");
};

//Remove item on cart
const removeItem = document.querySelectorAll(".remove-item");
console.log(removeItem);
for (var i = 0; i < removeItem.length; i++) {
  var button = removeItem[i];
  button.addEventListener("click", removeCartItem);
}
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
}

//plus and minus
const plus = document.querySelectorAll(".plus");
const minus = document.querySelectorAll(".minus");
//function increse value
for (var i = 0; i < plus.length; i++) {
  var button = plus[i];
  button.addEventListener("click", increseValue);
  //Update total
  button.addEventListener("click", updateTotal);
}
function updateTotal() {
  var cartItemContainer = document.querySelector(".cart-content");
  var cartRows = cartItemContainer.querySelectorAll(".cart-product-info");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.querySelector(".product-price");
    var quantityElement = cartRow.querySelector(".quantity");
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.querySelector(".total-price-value").innerText = "$" + total;
}
function increseValue(event) {
  var buttonClicked = event.target;
  var input = buttonClicked.parentElement.children[1];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) + 1;
  input.value = newValue;
}
//function decrese value
for (var i = 0; i < minus.length; i++) {
  var button = minus[i];
  console.log(button);
  button.addEventListener("click", decreseValue);
  //Update decease total amount
  button.addEventListener("click", updateTotal);
}

function updateTotal(event) {
  var cartItemContainer = document.querySelector(".cart-content");
  var cartRows = cartItemContainer.querySelectorAll(".cart-product-info");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var priceElement = cartRow.querySelector(".product-price");
    var quantityElement = cartRow.querySelector(".quantity");
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.querySelector(".total-price-value").innerText = "$" + total;
}
function decreseValue(event) {
  var buttonClicked = event.target;
  var input = buttonClicked.parentElement.children[1];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) - 1;
  if (newValue < 0) {
    newValue = 0;
  }
  input.value = newValue;
}

//add to cart
const addToCart = document.querySelectorAll(".add-to-cart");
for (var i = 0; i < addToCart.length; i++) {
  var button = addToCart[i];
  button.addEventListener("click", addToCartClicked);
}
function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement;
  var title = shopItem.querySelector(".product-name").innerText;
  var price = shopItem.querySelector(".price").innerText;
  //imagesrc
  var imageSrc = shopItem.querySelector(".product-image").src;
  
  console.log(title, price,imageSrc);



}
