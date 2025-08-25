
    // Enhanced Cookie Manager
    const CookieManager = {
        setCookie: function(name, value, days) {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
        },

        getCookie: function(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
            }
            return null;
        },

        eraseCookie: function(name) {
            document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        },

        initConsent: function() {
            const consent = this.getCookie('cookieConsent');
            const banner = document.getElementById('cookieConsent');

            // Only show banner if no consent decision exists
            if (!consent) {
                banner.style.display = 'block';
            }

            // Set up event listeners
            document.getElementById('acceptCookies').addEventListener('click', () => {
                this.setCookie('cookieConsent', 'accepted', 365);
                banner.style.display = 'none';
                this.loadCookies(true);
            });

            document.getElementById('rejectCookies').addEventListener('click', () => {
                this.setCookie('cookieConsent', 'rejected', 365);
                banner.style.display = 'none';
                this.loadCookies(false);
            });

            // Load appropriate cookies based on existing consent
            if (consent === 'accepted') {
                this.loadCookies(true);
            } else if (consent === 'rejected') {
                this.loadCookies(false);
            }
        },

        loadCookies: function(enable) {
            if (enable) {
                // Load all cookies (analytics, tracking, etc.)
                console.log('Loading all cookies');
                // Example: this.initGoogleAnalytics();
            } else {
                // Only load essential cookies
                console.log('Loading only essential cookies');
            }
        },

        // Example function for shopping cart
        updateCart: function(items) {
            if (this.getCookie('cookieConsent') !== 'rejected') {
                this.setCookie('shoppingCart', JSON.stringify(items), 30);
            }
        },

        getCart: function() {
            const cartCookie = this.getCookie('shoppingCart');
            return cartCookie ? JSON.parse(cartCookie) : [];
        }
    };

    // Initialize when DOM is loaded
    document.addEventListener('DOMContentLoaded', function() {
        CookieManager.initConsent();
    });

    // Handle page refresh - maintain consent state
    window.addEventListener('beforeunload', function() {
        // Any cleanup if needed
    });
