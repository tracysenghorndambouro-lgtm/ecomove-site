let cartCount = 0;

const cartElement = document.getElementById("cart-count");

function addToCart() {
  cartCount++;
  cartElement.textContent = cartCount;
}
