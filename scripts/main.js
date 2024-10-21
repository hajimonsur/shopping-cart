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


let removeElem = document.getElementsByClassName("remove");

for (let sub of removeElem) {
  sub.addEventListener("click", function () {
    let parentElem = sub.parentElement;
    let clearElem = parentElem.parentElement;
    clearElem.remove();

    // Update cart summary
    titleElem.textContent = ` Cart (${totalQuantity} items)`;
  });
}


// plus and minus

let subElem = document.getElementsByClassName("sub");
let addElem = document.getElementsByClassName("add");


for (let sub of subElem) {
  sub.addEventListener("click", function () {
    cartProducts.find((item) => {
      let minus = ` ${item.quantity}`;

      if (item && item.quantity > 0) {
        minus--;
        item.quantity = minus;
        
     

    
        console.log(minus);
   
     
      displaySummary();
      }

  })
})
}


for (let add of addElem) {
  add.addEventListener("click", function () {
    cartProducts.find((item) => {
      let plus = ` ${item.quantity}`;
      if (item && item.quantity > 0) {
        plus++;
        item.quantity = plus;
        console.log(plus);
        displaySummary();
      }
    });
  });
}
     
    




  


 
//     if (quantity > 0) {
//       quantity--;
//       quantityElem.textContent = quantity;
      

//       displaySummary();
//     }
//   });
// }

// for (let add of addElem) {
//   add.addEventListener("click", function () {
//     let parentElem = add.parentElement;
//     let clearElem = parentElem.parentElement;
//     let quantityElem = clearElem.querySelector(`${".subAdd"} h6`);
//     let quantity = parseInt(quantityElem.textContent);
//     quantity++;
//     quantityElem.textContent = quantity;
    


//     displaySummary()
//   });

  
// }


// let parentElem = sub.parentElement;
// let clearElem = parentElem.parentElement;
// let quantityElem = clearElem.querySelector(`${".subAdd"} ${item.quantity}`);
// let quantity = parseInt(quantityElem.textContent);


  // // Handle quantity changes with animation
  // function updateQuantity(productId, change) {
  //   const product = cartProducts.find(item => item.id === productId);
  //   if (!product) return;
  
  //   const newQuantity = product.quantity + change;
    
  //   // Check boundaries
  //   if (newQuantity < 0 || newQuantity > product.stock) {
  //     // Add shake animation to button
  //     const button = change > 0 ? 
  //       document.querySelector(`[data-product-id="${productId}"] .add`) :
  //       document.querySelector(`[data-product-id="${productId}"] .sub`);
  //     button.classList.add('shake');
  //     setTimeout(() => button.classList.remove('shake'), 500);
  //     return;
  //   }
  
  //   const quantityDisplay = document.querySelector(`[data-product-id="${productId}"] .quantity-value`);
  //   quantityDisplay.classList.add('update');
  //   setTimeout(() => quantityDisplay.classList.remove('update'), 300);
  
  //   product.quantity = newQuantity;
  //   updateQuantityDisplay(productId, newQuantity);
  //   updateSummary();
  // }





