let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = [
  { id: 1, name: "Watch", price: 12999, img: "img/Black.jpg" },
  { id: 2, name: "Ring", price: 8999, img: "img/ring.jpg" },
  { id: 3, name: "Men", price: 5999, img: "img/Man.jpg" },
  { id: 4, name: "Women", price: 6999, img: "img/Women.jpg" }
];

function getData() {
  let container = document.getElementById("products");
  if (!container) return;
  
  container.innerHTML = "";
  
  products.forEach(function(product) {
    let productDiv = document.createElement("div");
    productDiv.style.border = "1px solid #ccc";
    productDiv.style.padding = "10px";
    productDiv.style.margin = "10px";
    productDiv.style.textAlign = "center";
    
    productDiv.innerHTML = 
      "<img src='" + product.img + "' width='150' height='150'><br>" +
      "<h3>" + product.name + "</h3>" +
      "<p>Price: ₹" + product.price + "</p>" +
      "<button onclick='addToCart(" + product.id + ")'>Add to Cart</button>";
    
    container.appendChild(productDiv);
  });
}

function addToCart(id) {
  let prod = products.find(function (p) { return p.id === id; });
  if (!prod) return;
  let item = cart.find(function (item) { return item.id === id; });
  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: prod.id, name: prod.name, price: prod.price, img: prod.img, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function removeFromCart(id) {
  cart = cart.filter(function (item) { return item.id !== id; });
  localStorage.setItem("cart", JSON.stringify(cart));
  showCart();
}

function showCart() {
  let container = document.getElementById("cart");
  if (!container) return;
  container.innerHTML = "";
  let total = 0;
  cart.forEach(function (item) {
    total += item.price * item.quantity;
    let div = document.createElement("div");
    div.innerHTML =
      "<img src='" + item.img + "' width='50'> " + item.name + " x " + item.quantity + " = ₹" + (item.price * item.quantity) +
      " <button onclick='removeFromCart(" + item.id + ")'>Remove</button>";
    container.appendChild(div);
  });
  let totalDiv = document.createElement("div");
  totalDiv.innerHTML = "<b>Total: ₹" + total + "</b>";
  container.appendChild(totalDiv);
}

document.addEventListener("DOMContentLoaded", function () {
  getData();
  showCart();
});
