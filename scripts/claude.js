// Cart data and state management
let cartProducts = [
  {
    id: 1,
    name: "Hp Stream 11 Laptop Intel Celeron",
    description: "- 64GB SSD 4GB RAM Windows 10 PRO HP +Mouse &USB Light For Keyboard",
    price: 139500,
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7P7RTpuupZF-liRnjHHNC4DSCE8j3EMPzA&s",
    quantity: 11,
    stock: 18,
  },
  {
    id: 2,
    name: "Hp PROBOOK 450G6 8TH GEN",
    price: 750000,
    description: "INTEL CORE I5 8GB RAM 256GB SSD,KEYBOARD LITE, WINDOWS 11PRO",
    imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzdXQKtpASTHJXd8ncnw5WHJ0XCPuZ9ZSmA&s",
    quantity: 1,
    stock: 8,
  }
];

// DOM Elements
const cartlistElem = document.getElementById("cartlist");
const countElem = document.getElementById("count");
const summaryElem = document.getElementById("summary");
const summarybtnElem = document.getElementById("summarybtn");
const titleElem = document.getElementById("title");

// Helper function to format price
function formatPrice(price) {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(price);
}

// Update cart summary
function updateSummary() {
  let totalAmount = 0;
  let totalQuantity = 0;

  for (let item of cartProducts) {
    totalAmount += item.price * item.quantity;
    totalQuantity += item.quantity;
  }

  summaryElem.innerHTML = `
    <h4>Total Amount: ${formatPrice(totalAmount)}</h4>
    <h4>Total Quantity: ${totalQuantity}</h4>
  `;

  summarybtnElem.innerHTML = `
    <h3>Checkout (${formatPrice(totalAmount)})</h3>
  `;

  titleElem.textContent = `Shopping Cart (${totalQuantity} items)`;
}

// Update quantity in the DOM
function updateQuantityDisplay(productId, newQuantity) {
  const quantityElem = document.querySelector(`[data-product-id="${productId}"] .quantity-value`);
  if (quantityElem) {
    quantityElem.textContent = newQuantity;
  }
}

// Handle quantity changes
function updateQuantity(productId, change) {
  const product = cartProducts.find(item => item.id === productId);
  if (!product) return;

  const newQuantity = product.quantity + change;
  
  // Check boundaries
  if (newQuantity < 0) return;
  if (newQuantity > product.stock) return;

  product.quantity = newQuantity;
  updateQuantityDisplay(productId, newQuantity);
  updateSummary();
}

// Remove item from cart
function removeItem(productId) {
  cartProducts = cartProducts.filter(item => item.id !== productId);
  const productElem = document.querySelector(`[data-product-id="${productId}"]`);
  if (productElem) {
    productElem.remove();
  }
  updateSummary();
}

// Display products
function displayProducts() {
  cartlistElem.innerHTML = ''; // Clear existing content
  
  for (let item of cartProducts) {
    const productElem = document.createElement("div");
    productElem.setAttribute("id", "flex");
    productElem.setAttribute("data-product-id", item.id);
    
    productElem.innerHTML = `
      <img src="${item.imageurl}" alt="${item.name}">
      <div>
        <div class="description">
          <h3>${item.name}</h3>
          <h4>${formatPrice(item.price)}</h4>
        </div>
        <div>
          <h4>${item.description}</h4>
          <div><p>${item.stock} <b>units left</b></p></div>
        </div>
        <div class="bottom">
          <button class="remove" onclick="removeItem(${item.id})">Remove</button>
          <div class="subAdd">
            <button class="sub" onclick="updateQuantity(${item.id}, -1)">-</button>
            <h6 class="quantity-value">${item.quantity}</h6>
            <button class="add" onclick="updateQuantity(${item.id}, 1)">+</button>
          </div>
        </div>
      </div>
    `;
    
    cartlistElem.appendChild(productElem);
  }
  
  updateSummary();
}

// Initialize the cart
displayProducts();