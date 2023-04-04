

const ClickCart =document.querySelector('#cart');
isClicked =true;
let ShowCart =function(){
  if(isClicked){
    ClickCart.style.display="block";
    ClickCart.classList.toggle("hidden");
    isClicked=false;
    }else{
      ClickCart.style.display="none";
     
      isClicked=true;
    }

}
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

function addToCart(name, price) {
  for (let item of cart) {
    if (item.name === name) {
      item.quantity++;
      return;
    }
  }
  cart.push({ name, price, quantity: 1 });
}



function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  for (let item of cart) {
    const li = document.createElement('li');
    li.innerText = `${item.name} x ${item.quantity} - $${item.price * item.quantity.toFixed(2)}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  }
  cartTotal.innerText = total.toFixed(2);
}

document.addEventListener('click', event => {
  if (event.target.classList.contains('add-to-cart')) {
    const name = event.target.dataset.name;
    const price = parseFloat(event.target.dataset.price);
    addToCart(name, price);
    renderCart();
  }
});