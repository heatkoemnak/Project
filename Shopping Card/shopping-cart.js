// cart pop up and close cart
const cartIcon = document.querySelector("#shopping-cart");
const cart = document.querySelector(".cart");
const cartClose = document.querySelector("#cart-close");
cartIcon.onclick = () => {
  cart.classList.add("active");
  //display block cart
  document.querySelector(".cart").style.display = "block";
};
cartClose.onclick = () => {
  cart.classList.remove("active");
};

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  const removeItem = document.querySelectorAll(".remove-item");

  for (var i = 0; i < removeItem.length; i++) {
    var button = removeItem[i];
    button.addEventListener("click", removeCartItem);
  }
  
  const quantity = document.querySelectorAll(".quantity");
  for (var i = 0; i < quantity.length; i++) {
    var input = quantity[i];
    input.addEventListener("change", quantityChanged);
  }
  //Add to cart
  const addToCart = document.querySelectorAll(".add-to-cart");
  for (var i = 0; i < addToCart.length; i++) {
    var button = addToCart[i];
    button.addEventListener("click", addToCartClicked);
    //count notification cart
  }
}
//Remove item on cart
function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  UpdateCartTotal();
}

function quantityChanged(event) {
  var input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  UpdateCartTotal();
}

//plus and minus value
const plus = document.querySelectorAll(".plus");
for (var i = 0; i < plus.length; i++) {
  var button = plus[i];
  button.addEventListener("click", increseValue);
}
const minus = document.querySelectorAll(".minus");
for (var i = 0; i < minus.length; i++) {
  var button = minus[i];
  button.addEventListener("click", decreseValue);
}

//function increse value
function increseValue(event) {
  var button = event.target;
  var input = button.parentElement.querySelector(".quantity");
  var value = parseInt(input.value);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
  UpdateCartTotal();
}

//function decrese value
function decreseValue(event) {
  var button = event.target;
  var input = button.parentElement.querySelector(".quantity");
  var value = parseInt(input.value);
  value = isNaN(value) ? 0 : value;
  value--;
  input.value = value;
  UpdateCartTotal();
}

function UpdateCartTotal() {
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

function addToCartClicked(event) {
  var button = event.target;
  var shopItem = button.parentElement.parentElement.parentElement;
  var title = shopItem.querySelector(".product-name").innerText;
  var price = shopItem.querySelector(".product-price").innerText;
  var imageSrc = shopItem.querySelector(".product-image").src;

  addItemToCart(title, price, imageSrc);
  UpdateCartTotal();
}
function addItemToCart(title, price, imageSrc) {
  var cartRow = document.createElement("div");
  cartRow.classList.add("cart-item");
  var cartItems = document.querySelector(".cart-content");
  var cartItemNames = cartItems.querySelectorAll(".product-title");

  for (var i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("This item is already added to the cart");
      return;
    }
  }

  var cartRowContents = `
  <div class="cart-item">
  <img src="${imageSrc}" alt="" class="image-cart" />
  <div class="cart-product-info">
    <div class="product-title">${title}</div>
    <div class="product-price">${price}</div>
    <div class="cart-quantity">
      <i class="bx bx-minus minus"></i>
      <input type="number" value="1" class="quantity" />
      <i class="bx bx-plus plus"></i>
    </div>
  </div>
  <i class="bx bx-trash-alt remove-item"></i>
</div>
`;

  cartRow.innerHTML = cartRowContents;

  cartItems.append(cartRow);
  cartRow
    .querySelector(".remove-item")
    .addEventListener("click", removeCartItem);
  cartRow.querySelector(".plus").addEventListener("click", increseValue);
  cartRow.querySelector(".minus").addEventListener("click", decreseValue);
  cartRow
    .querySelector(".quantity")
    .addEventListener("change", quantityChanged);
}
