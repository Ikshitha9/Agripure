let slideIndex = 0; // Keep track of the current index
const slidesToShow = 2; // Number of slides to show at once
const slides = document.getElementsByClassName("slide"); // Get all slide elements
const totalSlides = slides.length; // Total number of slides

function showSlides() {
    // Hide all slides
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";  
    }

    // Calculate the starting index for visible slides
    let startIndex = slideIndex * slidesToShow;

    // Show the current set of slides
    for (let i = 0; i < slidesToShow; i++) {
        const currentIndex = (startIndex + i) % totalSlides; // Wrap around using modulo
        slides[currentIndex].style.display = "block";  
    }

    slideIndex++; // Move to the next set of slides
    if (startIndex + slidesToShow >= totalSlides) {
        slideIndex = 0; // Reset to the first set of slides if we reach the end
    }

    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Function to change slides with buttons
function changeSlide(n) {
    slideIndex += n; // Update slide index based on button click

    // Ensure slideIndex stays within bounds
    if (slideIndex < 0) {
        slideIndex = Math.floor(totalSlides / slidesToShow) - 1; // Set to last group if negative
    }
    if (slideIndex >= Math.floor(totalSlides / slidesToShow)) {
        slideIndex = 0; // Reset to first group if out of bounds
    }

    showSlides(); // Show the updated slides
}

// Call showSlides to start the slideshow
showSlides();

// Function to toggle sidebar navigation
function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px"; // Toggle width
}


let cart = []; // Declare and initialize the cart array

// Add item to cart
function addToCart(productName, price) {
    cart.push({ name: productName, price: price });
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById("cartItems");
    cartItems.innerHTML = ""; // Clear previous items
    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }
    cart.forEach((item) => {
        const itemElement = document.createElement("div");
        itemElement.innerText = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(itemElement);
    });
}

// Toggle cart modal
function toggleCart() {
    const cartModal = document.getElementById("cartModal");
    cartModal.style.display = cartModal.style.display === "block" ? "none" : "block";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const cartModal = document.getElementById("cartModal");
    if (event.target === cartModal) {
        cartModal.style.display = "none";
    }
};

// Checkout function
function checkout() {
    alert("Proceeding to checkout...");
}
