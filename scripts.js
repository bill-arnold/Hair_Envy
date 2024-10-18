const cart = [];
let total = 0;

function addToCart(item, price) {
    if (item.includes("Acrylic") || item.includes("Silk") || item.includes("French") || item.includes("Gel") || item.includes("Nail Art")) {
        alert('Please proceed to book an appointment.');
    } else {
        cart.push({ item, price });
        total += price;
        displayCart();
    }
}

function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = '';
    cart.forEach((cartItem, index) => {
        cartContainer.innerHTML += `<div class="cart-item">${cartItem.item} - KSh ${cartItem.price} <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button></div>`;
    });
    document.getElementById('total-price').innerText = `Total: KSh ${total}`;
    document.getElementById('cart').style.display = 'block'; // Show cart when items are added
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    displayCart();
}

function toggleCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'block' : 'none';
}

function sendOrder() {
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;

    if (name && email && phone) {
        alert(`Order sent!\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nTotal: KSh ${total}`);
        // Here you would typically send the order to your server
    } else {
        alert('Please fill in all fields before sending the order.');
    }
}

// WhatsApp integration
function updateWhatsAppLink() {
    const name = document.getElementById('customerName').value;
    const email = document.getElementById('customerEmail').value;
    const phone = document.getElementById('customerPhone').value;
    const message = `New Order from ${name} (${email}, ${phone}):\n` + cart.map(item => `${item.item} - KSh ${item.price}`).join('\n') + `\nTotal: KSh ${total}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    document.getElementById('whatsappOrder').href = url;
}

document.getElementById('customerName').addEventListener('input', updateWhatsAppLink);
document.getElementById('customerEmail').addEventListener('input', updateWhatsAppLink);
document.getElementById('customerPhone').addEventListener('input', updateWhatsAppLink);
