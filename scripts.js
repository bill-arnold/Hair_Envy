// Function to handle the "Book Now" button click
document.querySelector('.btn.btn-primary').addEventListener('click', function () {
    alert('Your appointment has been booked! 🛍️');
});

// Function to handle adding items to the cart
function addToCart(itemName) {
    alert(`${itemName} has been added to your cart!`);
}

// Example function calls for adding items to the cart
// You can call these functions when a product is added to the cart
// e.g. addToCart("Radiance Hair Oil");
// e.g. addToCart("Growth Elixir");

// Testimonials section functionality
const testimonials = [
    {
        image: 'path/to/image1.jpg',
        title: 'Testimonial 1',
        text: '“I\'ve struggled with dry hair for years. After using Radiance Hair Oil, my hair has never felt softer or looked shinier. Highly recommend!” — Sarah J.'
    },
    {
        image: 'path/to/image2.jpg',
        title: 'Testimonial 2',
        text: '“Growth Elixir really works! I\'ve seen new hair growth in just a few weeks. This product is a game-changer.” — Mark R.'
    },
    {
        image: 'path/to/image3.jpg',
        title: 'Testimonial 3',
        text: '“I love the fragrance of these oils! My hair feels rejuvenated, and I can see a noticeable difference in its health.” — Lisa W.'
    },
    {
        image: 'path/to/image4.jpg',
        title: 'Nail Testimonial 1',
        text: '“The nail strengthening serum has changed my life! My nails are stronger and healthier than ever.” — Emily T.'
    },
    {
        image: 'path/to/image5.jpg',
        title: 'Nail Testimonial 2',
        text: '“I love the nail polish! It lasts for weeks without chipping. Totally worth it!” — Rachel K.'
    },
    {
        image: 'path/to/image6.jpg',
        title: 'Nail Testimonial 8',
        text: '“The manicure kits are amazing! Everything I need for a perfect at-home manicure.” — Jessica L.'
    },
    {
        image: 'path/to/image6.jpg',
        title: 'Nail Testimonial 4',
        text: '“The manicure kits are amazing! Everything I need for a perfect at-home manicure.” — Jessica L.'
    }
];

// Function to display testimonials
function displayTestimonials() {
    const testimonialsContainer = document.querySelector('.testimonials .row');

    testimonials.forEach((testimonial) => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'col-md-4 mb-3';
        testimonialCard.innerHTML = `
            <div class="card">
                <img src="${testimonial.image}" class="card-img-top" alt="${testimonial.title}">
                <div class="card-body">
                    <h5 class="card-title">${testimonial.title}</h5>
                    <p class="card-text">${testimonial.text}</p>
                </div>
            </div>
        `;
        testimonialsContainer.appendChild(testimonialCard);
    });
}

// Call the function to display testimonials on page load
window.onload = displayTestimonials;

// Example of functionality to send email when an order is placed
function sendOrderEmail(orderDetails) {
    // Placeholder for email sending logic
    console.log('Sending email with order details:', orderDetails);
    alert('Order has been sent! Check your email for confirmation.');
}

// Call this function when an order is sent
// Example order details
const orderDetails = {
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '123-456-7890',
    totalAmount: 100,
    itemsOrdered: ['Radiance Hair Oil', 'Growth Elixir']
};

// Simulate sending an order
sendOrderEmail(orderDetails);
