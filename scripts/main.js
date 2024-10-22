// left box array of objects

const cartProducts = [
  {
    id: 1,
    name: "Hp Stream 11 Laptop Intel Celeron ",
    description:
      "- 64GB SSD 4GB RAM Windows 10 PRO HP +Mouse &USB Light For Keyboard",
    price: 139500,
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7P7RTpuupZF-liRnjHHNC4DSCE8j3EMPzA&s",
    quantity: 11,
    stock: 18,
  },

  {
    id: 2,
    name: "Hp PROBOOK 450G6 8TH GEN ",
    price: 750000,
    description: "INTEL CORE I5 8GB RAM 256GB SSD,KEYBOARD LITE, WINDOWS 11PRO",
    imageurl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzdXQKtpASTHJXd8ncnw5WHJ0XCPuZ9ZSmA&s",
    quantity: 1,
    stock: 8,
  },
];

// handle add left box object dynamically

let cartlistElem = document.getElementById("cartlist");
let countElem = document.getElementById("count");
function displayProducts() {
  for (let item of cartProducts) {
    let productElem = document.createElement("div");

    productElem.innerHTML = `

    <img src="${item.imageurl}">
   <div>
    <div>
     <div class=description>
    <h3>${item.name}</h3>
    <h4>${item.price}</h4>
    </div>
   <div>
     <h4>${item.description}</h4>
  <div>  <p>${item.stock} <b>units left</b></p>   </div>
</div>


  
    </div class=bottom>


     <button class=remove>Remove</button>

        <div class=subAdd>
          <button class=sub>-</button>

          <h4>${item.quantity}</h4>
          
          <button class=add>+</button>
        </div>
     
   </div>

   
  
    `;
    productElem.setAttribute("id", "flex");
    cartlistElem.appendChild(productElem);
  }
}
displayProducts();


let titleElem = document.getElementById("title");

// handle add right box content dynamically

let summaryElem = document.getElementById("summary");
let summarybtnElem = document.getElementById("summarybtn");
function displaySummary() {
  let totalAmount = 0;
  let totalQuantity = 0;

  for (let item of cartProducts) {
    totalAmount += item.price * item.quantity;
    totalQuantity += item.quantity;
  }

  summaryElem.innerHTML = `
    <h4>Total Amount: N ${totalAmount}</h4>
     <h4>Total Quantity: ${totalQuantity}</h4>
    `;

  summarybtnElem.innerHTML = `
    <h3 class =total>Checkout ( N ${totalAmount})</h3>
    `;

  summaryElem.setAttribute("id", "flex1");

  titleElem.textContent = ` Cart (${totalQuantity} items)`;
}

displaySummary();


// handle remove dynamically

// handle remove dynamically
let removeElem = document.getElementsByClassName("remove");

for (let i = 0; i < removeElem.length; i++) {
  removeElem[i].addEventListener("click", function () {
    let parentElem = removeElem[i].parentElement;
    let clearElem = parentElem.parentElement;
    
    // Get the item ID to remove from the cartProducts array
    let itemId = cartProducts[i].id;

    // Remove the item from the cartProducts array
    cartProducts.splice(i, 1);
    clearElem.remove();

    // Update the cart summary
    displaySummary();
    
    // Update the title
    let totalQuantity = cartProducts.reduce((sum, item) => sum + item.quantity, 0);
    titleElem.textContent = ` Cart (${totalQuantity} items)`;
  });
}



let subElem = document.getElementsByClassName("sub");
let addElem = document.getElementsByClassName("add");


//  minus function
for (let i = 0; i < subElem.length; i++) {
  subElem[i].addEventListener("click", function () {
    let item = cartProducts[i];
    if (item.quantity > 0) {
      item.quantity--;
      displaySummary();
      // Update the displayed quantity
      this.nextElementSibling.textContent = item.quantity;
    }
  });
}

// plus function

for (let i = 0; i < addElem.length; i++) {
  addElem[i].addEventListener("click", function () {
    let item = cartProducts[i];
    if (item.quantity < item.stock) {
      item.quantity++;
      displaySummary();
      // Update the displayed quantity
      this.previousElementSibling.textContent = item.quantity;
    }
  });
}
