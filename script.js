function addToCart(name, price, _quantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(cartItem => cartItem.name === name);
    if (item) {
        item.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} has been added to your cart.`);
}

function viewCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    window.location.href = 'cart.html';
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        let cartDetails = "Your cart contains:\n";
        cart.forEach(item => {
            cartDetails += `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}\n`;
            }); 
            }
        } 

function totalItems() {
    function add) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let total = 0;
        cart.forEach(item => {
            total += item.quantity;
        });
        alert(`Total items in cart: ${total}`);
    }
}



function cartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.quantity;
    });
    alert(`Total: $${total.toFixed(2)}`);
}   

function removeFromCart(name) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(cartItem => cartItem.name === name);
    if (itemIndex > -1) {
        cart.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${name} has been removed from your cart.`);
    } else {
        alert(`${name} is not in your cart.`);
    };
    alert(cartDetails);
}

