let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });
  updateCart();
}

function updateCart() {
  document.getElementById('cartCount').innerText = cart.length;

  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';

  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `<span>${item.name}</span><span>$${item.price}</span>`;
    cartItems.appendChild(div);
  });
}

function toggleCart() {
  const modal = document.getElementById('cartModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}
