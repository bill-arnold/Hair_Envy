const products = [
    {
        name: "Radiance Hair Oil",
        price: 24.99,
        image: "images/oil1.jpg"
    },
    {
        name: "Growth Elixir",
        price: 29.99,
        image: "images/hairenvy.png"
    },
    {
        name: "Moisture Lock Hair Oil",
        price: 19.99,
        image: "images/oil3.jpg"
    }
];

function displayProducts() {
    const productSection = document.getElementById("product-list");

    products.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
        productSection.innerHTML += productCard;
    });
}

function searchProducts() {
    const input = document.getElementById("myInput").value.toLowerCase();
    const productSection = document.getElementById("product-list");
    productSection.innerHTML = '';

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(input)
    );

    filteredProducts.forEach(product => {
        const productCard = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <p>${product.name}</p>
                <p>$${product.price}</p>
                <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
            </div>
        `;
        productSection.innerHTML += productCard;
    });
}

function addToCart(productName, productPrice) {
    alert(`${productName} added to cart for $${productPrice}`);
}

// Display products when the page loads
window.onload = displayProducts;
