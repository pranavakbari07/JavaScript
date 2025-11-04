// Product database with all items
const products = {
    'milk-1': { name: 'Amul Gold Full Cream Fresh Milk', price: 33, image: './img/21.jpg', weight: '500 ml' },
    'milk-2': { name: 'Amul Taaza Toned Fresh Milk', price: 27, image: './img/22.jpg', weight: '500 ml' },
    'curd-1': { name: 'Amul Masti Curd', price: 35, image: './img/23.jpg', weight: '400 g' },
    'curd-2': { name: 'Amul Masti Curd', price: 23, image: './img/24.jpg', weight: '200 g' },
    'butter': { name: 'Amul Salted Butter', price: 60, image: './img/25.jpg', weight: '100 g' },
    'milk-3': { name: 'Amul Taaza Toned Milk', price: 16, image: './img/26.jpg', weight: '200 ml' },
    'rolling-1': { name: 'White Rolling Paper Cones - Stash Pro', price: 90, image: './img/28.jpg', weight: '6 pieces' },
    'rolling-2': { name: 'Brown Rolling Paper Cones - Stash Pro', price: 90, image: './img/29.jpg', weight: '6 pieces' },
    'rolling-3': { name: 'Brown Rolling paper + Roach with Crushing...', price: 222, image: './img/30.jpg', weight: '1 pack' },
    'rolling-4': { name: 'Brown Rolling Paper (King Size) - Stash Pro', price: 50, image: './img/31.jpg', weight: '1 unit (32 pieces)' },
    'rolling-5': { name: 'Brown Ripper Rolling Paper 32 Leaves + 32...', price: 120, image: './img/32.jpg', weight: '1 pack (64 pieces)' },
    'rolling-6': { name: 'White Rolling Paper (Small) - Stash Pro', price: 45, image: './img/33.jpg', weight: '1 pack (40 pieces)' },
    'snack-1': { name: 'Cheetos Cheez Puffs', price: 10, image: './img/34.jpg', weight: '28 g' },
    'snack-2': { name: 'Jacker Cheese Potato Crisps', price: 129, image: './img/35.jpg', weight: '160 g' },
    'snack-3': { name: 'Beanly Dark Chocolate Spread with Breadsticks', price: 99, image: './img/36.jpg', weight: '52 g' },
    'snack-4': { name: 'Orion Turtle Sour Cream Onion Corn Chips', price: 90, image: './img/37.jpg', weight: '115 g' },
    'snack-5': { name: 'Cheetos Flamin Hot Popcorn', price: 170, image: './img/38.jpg', weight: '17.7 g' },
    'snack-6': { name: 'Cheetos Cheese Flavored Puffs', price: 161, image: './img/39.jpg', weight: '24.8 g' },
    'hookah-1': { name: 'Kiwi Herbal Hookah Flavor (Tabacco Free)...', price: 100, image: './img/40.jpg', weight: '50 g' },
    'hookah-2': { name: 'Watermelon Herbal Hookah Flavor...', price: 100, image: './img/41.jpg', weight: '50 g' },
    'hookah-3': { name: 'Brain Freeze Up Herbal Hookah Flavor...', price: 100, image: './img/42.jpg', weight: '50 g' },
    'hookah-4': { name: 'Premium Magic Coal By Stash Pro', price: 80, image: './img/43.jpg', weight: '1 pack (10 pieces)' },
    'hookah-5': { name: 'Chief Commissioner Herbal Hookah Flavor...', price: 100, image: './img/44.jpg', weight: '50 g' },
    'hookah-6': { name: 'Natural Spring Water Herbal Hookah Flavor...', price: 130, image: './img/45.jpg', weight: '50 g' },
    'mouth-1': { name: 'Impact Sugar Free Mint Candy (Peach)', price: 147, image: './img/46.jpg', weight: '14 g' },
    'mouth-2': { name: 'Chandan Kashmiri Mouth Freshener', price: 139, image: './img/47.jpg', weight: '160 g' },
    'mouth-3': { name: 'Wrigley\'s Hubba Bubba Fruit Flavour Chewing', price: 240, image: './img/48.jpg', weight: '56 g' },
    'mouth-4': { name: 'Impact Sugar Free Mint Candy (Straberry)', price: 147, image: './img/49.jpg', weight: '14 g' },
    'mouth-5': { name: 'GO DESi Meetha Paan Desi Mints', price: 80, image: './img/50.jpg', weight: '1 pieces' },
    'mouth-6': { name: 'Impact Sugar Free Mint Candy (Ice Mints)', price: 147, image: './img/51.jpg', weight: '14 g' },
    'drink-1': { name: 'Bisleri Packaged Water', price: 70, image: './img/52.jpg', weight: '5 L' },
    'drink-2': { name: 'Thums Up Soft Drink (750 ml)', price: 45, image: './img/53.jpg', weight: '750 ml' },
    'drink-3': { name: 'Kinley Soda Water With Extra Punch', price: 20, image: './img/54.jpg', weight: '750 ml' },
    'drink-4': { name: 'Sparkling Ice Cubes by Burff', price: 60, image: './img/55.jpg', weight: '1 kg' },
    'drink-5': { name: 'Bisleri Soda Water', price: 20, image: './img/56.jpg', weight: '750 ml' },
    'drink-6': { name: 'Fast&Up Reload Instant Electrolyte Effervesce...', price: 268, image: './img/57.jpg', weight: '20 tablets' },
    'candy-1': { name: 'Skittles Wild Berry Bite Size Fruit Candy', price: 50, image: './img/58.jpg', weight: '30.4 g' },
    'candy-2': { name: 'Dabur Hajmola Regular Digestive Tablets', price: 68, image: './img/59.jpg', weight: '120 pieces' },
    'candy-3': { name: 'Parle Poppins Candy', price: 23, image: './img/60.jpg', weight: '100 g' },
    'candy-4': { name: 'Chupa Chups Sour Belt Mixed Fruit Candy', price: 30, image: './img/61.jpg', weight: '57.6 g' },
    'candy-5': { name: 'Chupa Chups Sour Bites Mixed Fruits Candy', price: 35, image: './img/62.jpg', weight: '61.6 g' }
};

// Cart array to store items
let cart = [];

// Load cart from localStorage when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadCart();
    displayCart();
});

// Function to add item to cart
function addToCart(productId) {
    const product = products[productId];
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }

    // Check if item already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            weight: product.weight,
            quantity: 1
        });
    }

    // Save cart to localStorage
    saveCart();
    
    // Show success message
    showMessage('Item added to cart!');
    
    // Update cart display if on cart page
    if (window.location.pathname.includes('cart.html')) {
        displayCart();
    }
}

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    displayCart();
}

// Function to update item quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            saveCart();
            displayCart();
        }
    }
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load cart from localStorage
function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Function to display cart items
function displayCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartDiv = document.getElementById('empty-cart');
    const cartSummaryDiv = document.getElementById('cart-summary');
    
    if (!cartItemsContainer) return;

    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        emptyCartDiv.style.display = 'block';
        cartSummaryDiv.style.display = 'none';
        return;
    }

    cartItemsContainer.style.display = 'block';
    emptyCartDiv.style.display = 'none';
    cartSummaryDiv.style.display = 'block';

    let cartHTML = '';
    
    cart.forEach(item => {
        cartHTML += `
            <div class="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <!-- Desktop Layout -->
                <div class="hidden md:flex items-center space-x-4">
                    <!-- Product Image -->
                    <div class="flex-shrink-0">
                        <img src="${item.image}" alt="${item.name}" class="w-20 h-20 object-cover rounded-lg">
                    </div>
                    
                    <!-- Product Details -->
                    <div class="flex-1 min-w-0">
                        <h3 class="text-sm font-medium text-gray-900 truncate">${item.name}</h3>
                        <p class="text-xs text-gray-500 mt-1">${item.weight}</p>
                        <p class="text-sm font-semibold text-gray-900 mt-1">₹${item.price}</p>
                    </div>
                    
                    <!-- Quantity Controls -->
                    <div class="flex items-center space-x-2">
                        <button onclick="updateQuantity('${item.id}', -1)" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-medium">
                            <i class="fa-solid fa-minus text-xs"></i>
                        </button>
                        <span class="w-12 text-center text-sm font-medium text-gray-900">${item.quantity}</span>
                        <button onclick="updateQuantity('${item.id}', 1)" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-medium">
                            <i class="fa-solid fa-plus text-xs"></i>
                        </button>
                    </div>
                    
                    <!-- Item Total and Remove -->
                    <div class="text-right">
                        <p class="text-lg font-bold text-gray-900">₹${item.price * item.quantity}</p>
                        <button onclick="removeFromCart('${item.id}')" class="text-red-600 hover:text-red-800 text-sm font-medium mt-1 transition-colors">
                            <i class="fa-solid fa-trash mr-1"></i>Remove
                        </button>
                    </div>
                </div>
                
                <!-- Mobile Layout -->
                <div class="md:hidden">
                    <div class="flex items-start space-x-3 mb-3">
                        <!-- Product Image -->
                        <div class="flex-shrink-0">
                            <img src="${item.image}" alt="${item.name}" class="w-16 h-16 object-cover rounded-lg">
                        </div>
                        
                        <!-- Product Details -->
                        <div class="flex-1 min-w-0">
                            <h3 class="text-sm font-medium text-gray-900">${item.name}</h3>
                            <p class="text-xs text-gray-500 mt-1">${item.weight}</p>
                            <p class="text-sm font-semibold text-gray-900 mt-1">₹${item.price}</p>
                        </div>
                        
                        <!-- Remove Button -->
                        <button onclick="removeFromCart('${item.id}')" class="text-red-600 hover:text-red-800 text-sm font-medium transition-colors">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                    
                    <!-- Mobile Quantity and Total Row -->
                    <div class="flex items-center justify-between">
                        <!-- Quantity Controls -->
                        <div class="flex items-center space-x-2">
                            <button onclick="updateQuantity('${item.id}', -1)" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-medium">
                                <i class="fa-solid fa-minus text-xs"></i>
                            </button>
                            <span class="w-12 text-center text-sm font-medium text-gray-900">${item.quantity}</span>
                            <button onclick="updateQuantity('${item.id}', 1)" class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors flex items-center justify-center text-sm font-medium">
                                <i class="fa-solid fa-plus text-xs"></i>
                            </button>
                        </div>
                        
                        <!-- Item Total -->
                        <div class="text-right">
                            <p class="text-lg font-bold text-gray-900">₹${item.price * item.quantity}</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    cartItemsContainer.innerHTML = cartHTML;
    updateCartSummary();
}

// Function to update cart summary
function updateCartSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const deliveryFee = subtotal > 0 ? 40 : 0;
    const total = subtotal + deliveryFee;

    // Update desktop summary
    const subtotalEl = document.getElementById('subtotal');
    const deliveryFeeEl = document.getElementById('delivery-fee');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    if (deliveryFeeEl) deliveryFeeEl.textContent = `₹${deliveryFee}`;
    if (totalEl) totalEl.textContent = `₹${total}`;
    
    // Update mobile summary
    const subtotalMobileEl = document.getElementById('subtotal-mobile');
    const deliveryFeeMobileEl = document.getElementById('delivery-fee-mobile');
    const totalMobileEl = document.getElementById('total-mobile');
    
    if (subtotalMobileEl) subtotalMobileEl.textContent = `₹${subtotal}`;
    if (deliveryFeeMobileEl) deliveryFeeMobileEl.textContent = `₹${deliveryFee}`;
    if (totalMobileEl) totalMobileEl.textContent = `₹${total}`;
    
    // Update floating mobile summary
    const floatingTotalEl = document.getElementById('floating-total');
    if (floatingTotalEl) floatingTotalEl.textContent = `₹${total}`;
    
    // Show/hide floating summary based on cart state
    const floatingSummary = document.getElementById('floating-cart-summary');
    if (floatingSummary) {
        if (cart.length > 0) {
            floatingSummary.classList.remove('hidden');
        } else {
            floatingSummary.classList.add('hidden');
        }
    }
}

// Function to show message
function showMessage(message) {
    const messageToast = document.getElementById('message-toast');
    const messageText = document.getElementById('message-text');
    
    if (messageToast && messageText) {
        messageText.textContent = message;
        messageToast.classList.remove('hidden');
        
        // Hide message after 3 seconds
        setTimeout(() => {
            messageToast.classList.add('hidden');
        }, 3000);
    }
}

// Checkout button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Desktop checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Thank you for your order! This is a demo project.');
                // Clear cart after checkout
                cart = [];
                saveCart();
                displayCart();
            }
        });
    }
    
    // Mobile checkout button
    const checkoutBtnMobile = document.getElementById('checkout-btn-mobile');
    if (checkoutBtnMobile) {
        checkoutBtnMobile.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Thank you for your order! This is a demo project.');
                // Clear cart after checkout
                cart = [];
                saveCart();
                displayCart();
            }
        });
    }
    
    // Floating mobile checkout button
    const floatingCheckoutBtn = document.getElementById('floating-checkout-btn');
    if (floatingCheckoutBtn) {
        floatingCheckoutBtn.addEventListener('click', function() {
            if (cart.length > 0) {
                alert('Thank you for your order! This is a demo project.');
                // Clear cart after checkout
                cart = [];
                saveCart();
                displayCart();
            }
        });
    }
    
    // Mobile menu toggle functionality
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mobileMenuBtn.contains(event.target) && !mobileMenu.contains(event.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
});
