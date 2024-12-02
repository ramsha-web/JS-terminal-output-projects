let cart = [];  // Empty cart

// Function to add item to the cart
function addItemToCart(name, price, quantity) {
  const itemIndex = cart.findIndex(item => item.name === name);

  if (itemIndex !== -1) {
    // Item already exists, so update the quantity and price
    cart[itemIndex].quantity += quantity;
    cart[itemIndex].price += price * quantity;
    console.log(`${quantity} ${name}(s) added to the cart.`);
  } else {
    // Item does not exist, so add it to the cart
    cart.push({ name: name, price: price * quantity, quantity: quantity });
    console.log(`${quantity} ${name}(s) added to the cart.`);
  }
}

// Function to remove item from the cart
function removeItemFromCart(name) {
  const index = cart.findIndex(item => item.name === name);
  if (index !== -1) {
    cart.splice(index, 1);  // Remove item from cart
    console.log(`${name} removed from the cart.`);
  } else {
    console.log(`${name} not found in the cart.`);
  }
}

// Function to calculate total price
function calculateTotalPrice() {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    total += cart[i].price;
  }
  return total;
}

function showCart() {
  if (cart.length === 0) {
    console.log('Your cart is empty.');
  } else {
    console.log('Cart items:');
    for (let i = 0; i < cart.length; i++) {
      console.log(`- ${cart[i].name} x ${cart[i].quantity}: $${cart[i].price}`);
    }
    const totalPrice = calculateTotalPrice();
    console.log(`Total Price: $${totalPrice}`);
  }
}


addItemToCart('Laptop', 1000, 2);  
addItemToCart('Headphones', 150, 1);  
addItemToCart('Phone', 500, 4); 
showCart();  

removeItemFromCart('Headphones'); 
showCart();  
