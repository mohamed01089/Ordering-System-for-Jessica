const cart = [];
const cartSidebar = document.querySelector('.cart-slidebar');
const cartItemsList = document.querySelector('.cart-items');
const totalElement = document.getElementById('total');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click',() => {
        const product = {
            id: button.dataset.id,
            name: button.dataset.name,
            price: parseFloat(button.dataset.price)
        };
        cart.push(product);
        updateCartDisplay();
        cartSidebar.classList.add('active');

    });
});

function openCart(){
    cartSidebar.classList.add('active');
}

function updateCartDisplay(){
    cartItemsList.innerHTML = '';
    let total = 0;
    cart.forEach((items, index) => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.innerHTML = `
        <span>${items.name}</span>
        <span>$${items.price.toFixed(2)}</span>
        <button onclick="removeFromCart(${index})">&times;</button>
        `;
    cartItemsList.appendChild(li);
    total += items.price;
    });

    totalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

document.querySelector('.close-cart').addEventListener('click', () => {
    cartSidebar.classList.remove('active');
});
function checkout(){
    if (cart.length === 0){
        alert("Your cart is empty");
        return;
    }
    let total = cart.reduce((sum, item) => sum + item.price, 0);
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total.toFixed(2));
    window.location.href = "checkout.html";
}