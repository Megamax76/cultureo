// Hero Slider Functionality
class HeroSlider {
    constructor() {
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.slideInterval = null;
        this.init();
    }

    init() {
        // Start auto-play
        this.startAutoPlay();

        // Add event listeners for prev/next buttons
        document.querySelector('.slider-prev').addEventListener('click', () => this.prevSlide());
        document.querySelector('.slider-next').addEventListener('click', () => this.nextSlide());
    }

    showSlide(index) {
        // Remove active class from all slides
        this.slides.forEach(slide => slide.classList.remove('active'));

        // Add active class to current slide
        this.slides[index].classList.add('active');
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.showSlide(this.currentSlide);
        this.resetAutoPlay();
    }

    prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.showSlide(this.currentSlide);
        this.resetAutoPlay();
    }

    startAutoPlay() {
        this.slideInterval = setInterval(() => this.nextSlide(), 5000);
    }

    resetAutoPlay() {
        clearInterval(this.slideInterval);
        this.startAutoPlay();
    }
}

// Shopping Cart Functionality
class ShoppingCart {
    constructor() {
        this.items = [];
        this.wishlist = [];
        this.init();
    }

    init() {
        // Load cart from localStorage
        this.loadCart();
        this.updateCartCount();
        this.updateWishlistCount();

        // Add event listeners for all "Add to Cart" buttons
        document.querySelectorAll('.add-to-cart, .add-to-cart-modal').forEach(button => {
            button.addEventListener('click', (e) => this.addToCart(e));
        });

        // Add event listeners for wishlist buttons
        document.querySelectorAll('.add-wishlist').forEach(button => {
            button.addEventListener('click', (e) => this.addToWishlist(e));
        });
    }

    addToCart(event) {
        event.preventDefault();

        const productCard = event.target.closest('.product-card') || event.target.closest('.modal-product-info');

        if (productCard) {
            const productName = productCard.querySelector('h3, h2')?.textContent || 'Product';
            const productPrice = productCard.querySelector('.price, .modal-price')?.textContent || '$0.00';

            const item = {
                id: Date.now(),
                name: productName,
                price: productPrice,
                quantity: 1
            };

            this.items.push(item);
            this.saveCart();
            this.updateCartCount();
            this.showNotification(`${productName} added to cart!`);
        }
    }

    addToWishlist(event) {
        event.preventDefault();
        event.stopPropagation();

        const productCard = event.target.closest('.product-card');

        if (productCard) {
            const productName = productCard.querySelector('h3')?.textContent || 'Product';

            const item = {
                id: Date.now(),
                name: productName
            };

            this.wishlist.push(item);
            this.saveCart();
            this.updateWishlistCount();
            this.showNotification(`${productName} added to wishlist!`);
        }
    }

    updateCartCount() {
        const cartCount = document.querySelector('.cart .count');
        if (cartCount) {
            cartCount.textContent = this.items.length;
        }
    }

    updateWishlistCount() {
        const wishlistCount = document.querySelector('.wishlist .count');
        if (wishlistCount) {
            wishlistCount.textContent = this.wishlist.length;
        }
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
        localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    }

    loadCart() {
        const savedCart = localStorage.getItem('cart');
        const savedWishlist = localStorage.getItem('wishlist');

        if (savedCart) {
            this.items = JSON.parse(savedCart);
        }

        if (savedWishlist) {
            this.wishlist = JSON.parse(savedWishlist);
        }
    }

    showNotification(message) {
        // Create notification element
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #27ae60;
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Modal Functionality
class ModalManager {
    constructor() {
        this.modals = document.querySelectorAll('.modal');
        this.init();
    }

    init() {
        // Quick view buttons
        document.querySelectorAll('.quick-view').forEach(button => {
            button.addEventListener('click', (e) => this.openQuickView(e));
        });

        // User account button
        const userAccountBtn = document.querySelector('.user-account');
        if (userAccountBtn) {
            userAccountBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal('loginModal');
            });
        }

        // Close buttons
        document.querySelectorAll('.close').forEach(closeBtn => {
            closeBtn.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                this.closeModal(modal);
            });
        });

        // Close modal when clicking outside
        this.modals.forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModal(modal);
                }
            });
        });

        // Quantity selector
        this.setupQuantitySelector();
    }

    openQuickView(event) {
        event.preventDefault();
        event.stopPropagation();

        const productCard = event.target.closest('.product-card');
        const modal = document.getElementById('quickViewModal');

        if (productCard && modal) {
            const productName = productCard.querySelector('h3').textContent;
            const productPrice = productCard.querySelector('.price').textContent;
            const productImage = productCard.querySelector('.product-image img')?.src || '';

            modal.querySelector('#modalProductName').textContent = productName;
            modal.querySelector('#modalProductPrice').textContent = productPrice;
            modal.querySelector('#modalProductImage').src = productImage;

            this.openModal('quickViewModal');
        }
    }

    openModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    setupQuantitySelector() {
        document.querySelectorAll('.qty-minus').forEach(btn => {
            btn.addEventListener('click', () => {
                const input = btn.parentElement.querySelector('.qty-input');
                const currentValue = parseInt(input.value);
                if (currentValue > 1) {
                    input.value = currentValue - 1;
                }
            });
        });

        document.querySelectorAll('.qty-plus').forEach(btn => {
            btn.addEventListener('click', () => {
                const input = btn.parentElement.querySelector('.qty-input');
                const currentValue = parseInt(input.value);
                input.value = currentValue + 1;
            });
        });
    }
}

// Newsletter Form
class Newsletter {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const emailInput = this.form.querySelector('input[type="email"]');
        const email = emailInput.value;

        if (this.validateEmail(email)) {
            this.showMessage('Thank you for subscribing!', 'success');
            emailInput.value = '';
        } else {
            this.showMessage('Please enter a valid email address.', 'error');
        }
    }

    validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    showMessage(message, type) {
        const notification = document.createElement('div');
        const bgColor = type === 'success' ? '#27ae60' : '#e74c3c';

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Login Form
class LoginForm {
    constructor() {
        this.form = document.querySelector('.login-form');
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const email = this.form.querySelector('input[type="email"]').value;
        const password = this.form.querySelector('input[type="password"]').value;

        // Simulate login (in real app, this would be an API call)
        if (email && password) {
            this.showMessage('Login successful!', 'success');

            // Close modal after successful login
            setTimeout(() => {
                const modal = document.getElementById('loginModal');
                if (modal) {
                    modal.style.display = 'none';
                    document.body.style.overflow = 'auto';
                }
                this.form.reset();
            }, 1500);
        } else {
            this.showMessage('Please fill in all fields.', 'error');
        }
    }

    showMessage(message, type) {
        const notification = document.createElement('div');
        const bgColor = type === 'success' ? '#27ae60' : '#e74c3c';

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Search Functionality
class SearchBar {
    constructor() {
        this.searchInput = document.querySelector('.search-bar input');
        this.searchButton = document.querySelector('.search-bar button');
        this.init();
    }

    init() {
        if (this.searchButton) {
            this.searchButton.addEventListener('click', () => this.handleSearch());
        }

        if (this.searchInput) {
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleSearch();
                }
            });
        }
    }

    handleSearch() {
        const query = this.searchInput.value.trim();

        if (query) {
            this.showMessage(`Searching for: ${query}`, 'info');
            // In a real application, this would redirect to a search results page
            // window.location.href = `/search?q=${encodeURIComponent(query)}`;
        }
    }

    showMessage(message, type) {
        const notification = document.createElement('div');
        const bgColor = type === 'info' ? '#3498db' : '#27ae60';

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Product Comparison
class ProductComparison {
    constructor() {
        this.compareList = [];
        this.init();
    }

    init() {
        document.querySelectorAll('.add-compare').forEach(button => {
            button.addEventListener('click', (e) => this.addToCompare(e));
        });
    }

    addToCompare(event) {
        event.preventDefault();
        event.stopPropagation();

        const productCard = event.target.closest('.product-card');

        if (productCard) {
            const productName = productCard.querySelector('h3')?.textContent || 'Product';

            if (this.compareList.length < 4) {
                this.compareList.push({
                    id: Date.now(),
                    name: productName
                });

                this.showNotification(`${productName} added to comparison (${this.compareList.length}/4)`);
            } else {
                this.showNotification('You can only compare up to 4 products at a time.', 'warning');
            }
        }
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        const bgColor = type === 'warning' ? '#f39c12' : '#27ae60';

        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 15px 25px;
            border-radius: 5px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
            z-index: 10000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new HeroSlider();
    new ShoppingCart();
    new ModalManager();
    new Newsletter();
    new LoginForm();
    new SearchBar();
    new ProductComparison();

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Language and currency selector handlers
    const languageSelector = document.querySelector('.language-selector');
    const currencySelector = document.querySelector('.currency-selector');

    if (languageSelector) {
        languageSelector.addEventListener('change', (e) => {
            console.log(`Language changed to: ${e.target.value}`);
            // In a real app, this would trigger a language change
        });
    }

    if (currencySelector) {
        currencySelector.addEventListener('change', (e) => {
            console.log(`Currency changed to: ${e.target.value}`);
            // In a real app, this would update all prices
        });
    }

    // Mobile menu toggle (for responsive design)
    const createMobileMenuToggle = () => {
        const nav = document.querySelector('.main-navigation');
        const navMenu = document.querySelector('.nav-menu');

        if (window.innerWidth <= 768 && nav && navMenu) {
            let menuToggle = document.querySelector('.menu-toggle');

            if (!menuToggle) {
                menuToggle = document.createElement('button');
                menuToggle.className = 'menu-toggle';
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                menuToggle.style.cssText = `
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 24px;
                    cursor: pointer;
                    padding: 10px;
                `;

                nav.querySelector('.container').prepend(menuToggle);

                menuToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('mobile-active');
                });
            }

            menuToggle.style.display = 'block';
        }
    };

    createMobileMenuToggle();
    window.addEventListener('resize', createMobileMenuToggle);
});

// Export for potential use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        HeroSlider,
        ShoppingCart,
        ModalManager,
        Newsletter,
        LoginForm,
        SearchBar,
        ProductComparison
    };
}
