document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

function loadProducts() {
    const productList = document.querySelector('.product-list');
    const products = [
        { id: 1, name: 'Organic Apple', price: '$2.50' },
        { id: 2, name: 'Fresh Spinach', price: '$1.20' },
        { id: 3, name: 'Organic Milk', price: '$3.00' },
    ];
    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `<h4>${product.name}</h4><p>${product.price}</p><button>Add to Cart</button>`;
        productList.appendChild(productElement);
    });
}
