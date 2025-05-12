
function addToCart(productElement) {
    const id = productElement.getAttribute("data-id");
    const name = productElement.getAttribute("data-name");
    const price = productElement.getAttribute("data-price");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(p => p.id === id);
    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart.`);
    updateCartCount();
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
}
updateCartCount();

function loadCart() {
    const cartContainer = document.getElementById("cart-container");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cartContainer.innerHTML = "";
    let total = 0;
    cart.forEach(item => {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `
        <p><strong>${item.name}</strong> - $${item.price} x ${item.quantity}</p>
        <button onclick="removeItem('${item.id}')">Remove</button>
        `;
        cartContainer.appendChild(div);
    });
    const totalDiv = document.createElement("div");
    totalDiv.className = "total";
    totalDiv.textContent = `Total: $${total}`;
}

function removeItem(id) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}
loadCart();