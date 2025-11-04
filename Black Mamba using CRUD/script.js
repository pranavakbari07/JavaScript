let cart = JSON.parse(localStorage.getItem("cart")) || [];

const products = [
  {
    id: 1,
    name: "Watch",
    price: 12999,
    img: "img/Black.jpg",
    description: "Premium luxury watch with elegant design",
  },
  {
    id: 2,
    name: "Ring",
    price: 8999,
    img: "img/ring.jpg",
    description: "Beautiful diamond ring for special occasions",
  },
  {
    id: 3,
    name: "Men",
    price: 5999,
    img: "img/Man.jpg",
    description: "Stylish men's collection with modern design",
  },
  {
    id: 4,
    name: "Women",
    price: 6999,
    img: "img/Women.jpg",
    description: "Elegant women's fashion collection",
  },
  {
    id: 5,
    name: "Premium",
    price: 15999,
    img: "img/Primium.jpg",
    description: "Exclusive premium collection",
  },
  {
    id: 6,
    name: "Product 1",
    price: 4999,
    img: "img/pro-1.jpg",
    description: "High quality product with great features",
  },
  {
    id: 7,
    name: "Product 2",
    price: 7999,
    img: "img/pro-2.jpg",
    description: "Modern design with superior quality",
  },
  {
    id: 8,
    name: "Product 3",
    price: 8999,
    img: "img/pro-3.jpg",
    description: "Premium product with excellent craftsmanship",
  },
  {
    id: 9,
    name: "Product 4",
    price: 9999,
    img: "img/pro-4.jpg",
    description: "Luxury product with unique design",
  },
  {
    id: 10,
    name: "Blog 1",
    price: 3999,
    img: "img/Blog-1.png",
    description: "Featured blog product with amazing quality",
  },
  {
    id: 11,
    name: "Blog 2",
    price: 5499,
    img: "img/BLog-2.png",
    description: "Popular blog product with great reviews",
  },
  {
    id: 12,
    name: "Image 1",
    price: 3499,
    img: "img/img-1.jpg",
    description: "Beautiful product with stunning design",
  },
  {
    id: 13,
    name: "Image 2",
    price: 4499,
    img: "img/img-2.png",
    description: "Elegant product with premium finish",
  },
  {
    id: 14,
    name: "Image 3",
    price: 6499,
    img: "img/img-3.jpg",
    description: "Modern product with contemporary style",
  },
  {
    id: 15,
    name: "Image 4",
    price: 7499,
    img: "img/img-4.jpg",
    description: "Luxury product with sophisticated design",
  },
  {
    id: 16,
    name: "Money",
    price: 18999,
    img: "img/money_magnect_1920_x_1080_px.jpg",
    description: "Money magnet product for prosperity",
  },
  {
    id: 17,
    name: "Cart",
    price: 2999,
    img: "img/Cart.png",
    description: "Essential cart product for daily use",
  },
  {
    id: 18,
    name: "Logo",
    price: 1999,
    img: "img/logo.png",
    description: "Brand logo product with unique identity",
  },
  {
    id: 19,
    name: "BM Logo",
    price: 2499,
    img: "img/bBLACK_MAMBA_w_05261145-ac06-4e85-b777-c67c1625df41_480x.png",
    description: "Black Mamba branded logo product",
  },
  {
    id: 20,
    name: "Special",
    price: 12999,
    img: "img/Black.jpg",
    description: "Special edition product with exclusive features",
  },
];

function showProducts() {
  products.forEach((p) => console.log(`${p.id}. ${p.name} - ₹${p.price}`));
}

function findProduct(id) {
  return products.find((p) => p.id === id);
}

function getByPrice(min, max) {
  return products.filter((p) => p.price >= min && p.price <= max);
}

function addToCart(name, price, image) {
  let item = cart.find((item) => item.name === name);
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: Date.now(), name, price, image, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCounter();
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartDisplay();
}

function updateQuantity(id, change) {
  let item = cart.find((item) => item.id === id);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(id);
    } else {
      localStorage.setItem("cart", JSON.stringify(cart));
      updateCartDisplay();
    }
  }
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCartDisplay();
}

function calculateTotal() {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function showNotification(message) {
  let notification = document.createElement("div");
  notification.className =
    "fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50";
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2000);
}

function updateCartDisplay() {
  let cartContainer = document.getElementById("cart-items");
  let cartTotal = document.getElementById("cart-total");

  if (!cartContainer) return;

  if (cart.length === 0) {
    cartContainer.innerHTML =
      '<div class="text-center py-8"><h2 class="text-xl font-semibold">Cart is empty</h2></div>';
    if (cartTotal) cartTotal.textContent = "₹0.00";
    return;
  }

  let cartHTML = "";
  cart.forEach((item) => {
    cartHTML += `
            <div class="flex items-center justify-between p-4 border-b">
                <div class="flex items-center space-x-4">
                    <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded">
                    <div>
                        <h3 class="font-semibold">${item.name}</h3>
                        <p class="text-gray-600">₹${item.price}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="updateQuantity(${item.id}, -1)" class="bg-gray-200 px-2 py-1 rounded">-</button>
                    <span class="px-3 py-1 bg-gray-100 rounded">${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" class="bg-gray-200 px-2 py-1 rounded">+</button>
                    <button onclick="removeFromCart(${item.id})" class="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
                </div>
            </div>
        `;
  });

  cartContainer.innerHTML = cartHTML;
  if (cartTotal) cartTotal.textContent = `₹${calculateTotal()}`;
}

function updateCartCounter() {
  let count = cart.reduce((total, item) => total + item.quantity, 0);
  let cartLink = document.querySelector('a[href="cart.html"]');

  if (cartLink && count > 0) {
    let counter = document.querySelector(".cart-counter");
    if (!counter) {
      counter = document.createElement("span");
      counter.className =
        "cart-counter absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center";
      cartLink.style.position = "relative";
      cartLink.appendChild(counter);
    }
    counter.textContent = count;
  } else {
    let counter = document.querySelector(".cart-counter");
    if (counter) counter.remove();
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateCartDisplay();
  updateCartCounter();
});
