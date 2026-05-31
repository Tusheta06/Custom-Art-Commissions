/* ==========================================
   ELARA VANCE - FINE ART & CREATIONS
   JAVASCRIPT INTERACTIVITY & LOGIC
   ========================================== */

// Artwork Database
const artworkDatabase = {
    p1: {
        title: "Aetherial Whispers",
        category: "paintings",
        tag: "Oil Painting",
        price: "$1,850",
        dims: '36" x 48"',
        medium: "Oil & Gold Leaf on Canvas",
        status: "Available",
        desc: "Aetherial Whispers features layers of deep indigo overlapping with gold leaf textures. Painted over a month in her Brooklyn studio, it evokes the silent shifting of light on water and the depth of the subconscious mind. Perfect as a primary statement piece.",
        isImage: true,
        src: "images/elara_hero.png"
    },
    c1: {
        title: "Luna Organic Vessel",
        category: "ceramics",
        tag: "Ceramic",
        price: "$340",
        dims: '12" x 8" x 8"',
        medium: "Glazed Stoneware",
        status: "Available",
        desc: "Sculpted from local wild clay, this vessel features rough unglazed textures contrasted by a pooling white moon-stone glaze near the rim. Each indentation represents the natural pressure of the artist's hands during shaping.",
        isImage: true,
        src: "images/ceramic_vase.png"
    },
    r1: {
        title: "Whispering Ferns",
        category: "prints",
        tag: "Linocut Print",
        price: "$85",
        dims: '18" x 24"',
        medium: "Linocut on Cotton Paper",
        status: "Limited Edition (3/10 left)",
        desc: "Hand-carved linocut block print displaying complex botanical leaf patterns. Pressed individually on heavy 300gsm cotton rag paper using organic plant-based black inks. Signed and numbered by the artist.",
        isImage: false,
        svgContent: `
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="#f1f5f9"/>
                <rect x="15" y="15" width="170" height="170" stroke="#1e293b" stroke-width="0.5"/>
                <path d="M100 170C100 130 92 80 125 45M100 140C94 125 80 115 72 120M100 120C106 105 120 95 128 100M100 100C94 85 82 75 75 80M100 80C106 65 118 55 124 60M100 60C95 48 85 40 80 43M100 45C104 35 112 28 116 31" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
            </svg>
        `
    },
    p2: {
        title: "Terra & Gold",
        category: "paintings",
        tag: "Mixed Media",
        price: "$980",
        dims: '24" x 30"',
        medium: "Acrylic & Gold Leaf on Board",
        status: "Available",
        desc: "A study on grounding natural forces. Utilizes rich textured copper impasto paint with heavy gold strokes to represent molten mineral layers under the Earth's crust. It brings warmth and visual depth to minimalist interior spaces.",
        isImage: false,
        svgContent: `
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="modal-paint-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#1e293b" />
                        <stop offset="50%" stop-color="#334155" />
                        <stop offset="100%" stop-color="#0f172a" />
                    </linearGradient>
                </defs>
                <rect width="200" height="200" fill="url(#modal-paint-grad)"/>
                <path d="M20 120C60 70 140 160 180 100C160 60 120 40 80 70C50 90 30 110 20 120Z" fill="#d4af37" opacity="0.8"/>
                <path d="M40 140C80 90 120 140 160 110" stroke="#c87a53" stroke-width="6" stroke-linecap="round" fill="none"/>
                <circle cx="150" cy="60" r="15" fill="#f1f5f9" opacity="0.9"/>
            </svg>
        `
    },
    c2: {
        title: "Ember Raku Vase",
        category: "ceramics",
        tag: "Ceramic",
        price: "$280",
        dims: '10" x 6" x 6"',
        medium: "Raku Fired Ceramic Clay",
        status: "Sold (Custom Order Available)",
        desc: "Fired using traditional Japanese Raku techniques. Removed from the kiln while glowing red hot and placed in wood shavings to create smoky reduction markings. The copper glaze shifts uniquely under changing lighting conditions.",
        isImage: false,
        svgContent: `
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="#f8fafc"/>
                <path d="M85 50C85 45 115 45 115 50M85 50L90 70C70 85 65 120 75 140C85 160 115 160 125 140C135 120 130 85 110 70L115 50M90 70L110 70" stroke="#b8901c" stroke-width="2" stroke-linejoin="round"/>
                <path d="M80 110C95 115 105 110 120 115" stroke="#c87a53" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M75 130C90 135 100 130 125 132" stroke="#334155" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        `
    },
    r2: {
        title: "Solitude",
        category: "prints",
        tag: "Woodcut Print",
        price: "$95",
        dims: '12" x 12"',
        medium: "Woodcut Print on Washi Paper",
        status: "Available",
        desc: "A minimalist landscape woodcut showcasing rolling hills under a crescent moon. Individually block printed on hand-made fibrous Japanese Washi paper, resulting in subtle organic variations on every single print.",
        isImage: false,
        svgContent: `
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="200" height="200" fill="#e2e8f0"/>
                <circle cx="100" cy="75" r="30" fill="#c87a53" opacity="0.85"/>
                <path d="M20 160L80 90L130 140L180 80L220 160H20Z" fill="#1e293b"/>
                <path d="M120 160L160 115L190 140L210 110L230 160H120Z" fill="#0f172a" opacity="0.5"/>
                <line x1="30" y1="170" x2="170" y2="170" stroke="#1e293b" stroke-width="1"/>
            </svg>
        `
    }
};

// State Variables
let activeFilters = 'all';

// DOM Elements
const header = document.getElementById('header');
const mobileToggle = document.getElementById('mobile-toggle');
const navMenu = document.getElementById('nav-menu');
const themeToggle = document.getElementById('theme-toggle');
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Modal Elements
const artworkModal = document.getElementById('artwork-modal');
const modalClose = document.getElementById('modal-close');
const modalMediaContainer = document.getElementById('modal-media-container');
const modalArtTag = document.getElementById('modal-art-tag');
const modalArtTitle = document.getElementById('modal-art-title');
const modalArtPrice = document.getElementById('modal-art-price');
const modalArtDesc = document.getElementById('modal-art-desc');
const modalArtDims = document.getElementById('modal-art-dims');
const modalArtMedium = document.getElementById('modal-art-medium');
const modalArtStatus = document.getElementById('modal-art-status');
const modalInquireBtn = document.getElementById('modal-inquire-btn');

// Calculator Elements
const calcMedium = document.getElementById('calc-medium');
const calcSize = document.getElementById('calc-size');
const calcFraming = document.getElementById('calc-framing');
const calcRush = document.getElementById('calc-rush');
const resultBase = document.getElementById('result-base');
const resultScale = document.getElementById('result-scale');
const resultMaterials = document.getElementById('result-materials');
const resultDelivery = document.getElementById('result-delivery');
const resultTotalLabel = document.getElementById('result-total-label');
const priceTag = document.getElementById('price-tag');

// Form Elements
const contactForm = document.getElementById('contact-form');
const newsletterForm = document.getElementById('newsletter-form');
const toastContainer = document.getElementById('toast-container');

/* ==========================================
   INITIALIZATION & EVENT LISTENERS
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Theme setup
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.body.setAttribute('data-theme', savedTheme);
    
    // Smooth navigation setup
    setupNavigation();
    
    // Intersection Observer setup for fade-up reveal animations
    setupScrollReveals();
    
    // Portfolio filtering setup
    setupPortfolioFilters();
    
    // Commission Calculator setup
    setupCalculator();
    
    // Contact form setup
    setupFormSubmissions();
});

// Scroll Listener for Navbar Styling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

/* ==========================================
   THEME TOGGLER
   ========================================== */

themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    showToast(`Switched to ${newTheme} ambient mode`, 'info');
});

/* ==========================================
   MOBILE MENU NAVIGATION
   ========================================== */

mobileToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Change menu icon based on status
    const isActive = navMenu.classList.contains('active');
    mobileToggle.innerHTML = isActive 
        ? `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"></path></svg>`
        : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>`;
});

function setupNavigation() {
    document.querySelectorAll('.nav-link, #logo-link').forEach(link => {
        link.addEventListener('click', (e) => {
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                mobileToggle.click();
            }
        });
    });
}

/* ==========================================
   SCROLL REVEALS (INTERSECTION OBSERVER)
   ========================================== */

function setupScrollReveals() {
    const options = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);
    
    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
}

/* ==========================================
   PORTFOLIO FILTERING
   ========================================== */

function setupPortfolioFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state in buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            activeFilters = filterValue;
            
            // Filter cards with smooth fade transition
            portfolioItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filterValue === 'all' || category === filterValue) {
                    item.style.display = 'flex';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400); // matches transition time
                }
            });
        });
    });

    // Wire up modal trigger on card clicks
    portfolioItems.forEach(item => {
        item.addEventListener('click', () => {
            const artId = item.getAttribute('data-id');
            openArtworkModal(artId);
        });
    });
}

/* ==========================================
   ARTWORK DETAIL MODAL
   ========================================== */

function openArtworkModal(id) {
    const art = artworkDatabase[id];
    if (!art) return;
    
    // Inject Media content (image or inline SVG)
    if (art.isImage) {
        modalMediaContainer.innerHTML = `<img src="${art.src}" alt="${art.title}">`;
    } else {
        modalMediaContainer.innerHTML = art.svgContent;
    }
    
    // Inject Text Content
    modalArtTag.textContent = art.tag;
    modalArtTitle.textContent = art.title;
    modalArtPrice.textContent = art.price;
    modalArtDesc.textContent = art.desc;
    modalArtDims.textContent = art.dims;
    modalArtMedium.textContent = art.medium;
    modalArtStatus.textContent = art.status;
    
    // Style availability color
    if (art.status.toLowerCase().includes('sold')) {
        modalArtStatus.style.color = '#ef4444';
        modalInquireBtn.textContent = 'Commission Similar Piece';
    } else {
        modalArtStatus.style.color = '#22c55e';
        modalInquireBtn.textContent = 'Inquire Purchase';
    }
    
    // Wire up inquiry click
    modalInquireBtn.onclick = () => {
        artworkModal.classList.remove('active');
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
        
        // Auto fill contact form details
        const interestDropdown = document.getElementById('contact-interest');
        interestDropdown.value = art.status.toLowerCase().includes('sold') ? 'commission' : 'buy';
        
        const messageBox = document.getElementById('contact-message');
        messageBox.value = `Hi Elara, I'm interested in "${art.title}" (${art.medium}). Let me know the details!`;
        
        // Trigger label floating animations
        messageBox.dispatchEvent(new Event('input'));
    };
    
    // Open Modal
    artworkModal.classList.add('active');
}

modalClose.addEventListener('click', () => {
    artworkModal.classList.remove('active');
});

// Close modal when clicking background
artworkModal.addEventListener('click', (e) => {
    if (e.target === artworkModal) {
        artworkModal.classList.remove('active');
    }
});

// Close modal on Escape key press
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && artworkModal.classList.contains('active')) {
        artworkModal.classList.remove('active');
    }
});

/* ==========================================
   COMMISSION CALCULATOR
   ========================================== */

function setupCalculator() {
    const elements = [calcMedium, calcSize, calcFraming, calcRush];
    elements.forEach(el => {
        el.addEventListener('change', calculateCommissionCost);
    });
    
    // Run initial calculation
    calculateCommissionCost();
}

function calculateCommissionCost() {
    const medium = calcMedium.value;
    const size = calcSize.value;
    const hasFraming = calcFraming.checked;
    const isRush = calcRush.checked;
    
    // Base Rates
    let base = 0;
    if (medium === 'oil') base = 750;
    else if (medium === 'ceramic') base = 400;
    else if (medium === 'print') base = 200;
    
    // Scale Modifier
    let scale = 1.0;
    if (size === 'small') scale = 0.7;
    else if (size === 'medium') scale = 1.0;
    else if (size === 'large') scale = 1.8;
    
    // Framing Fees
    let framing = 0;
    if (hasFraming) {
        if (medium === 'oil') framing = 180;
        else if (medium === 'ceramic') framing = 120; // ceramic base
        else if (medium === 'print') framing = 60;
    }
    
    // Calculations
    const subtotal = (base * scale) + framing;
    const rushFee = isRush ? subtotal * 0.25 : 0;
    const grandTotal = Math.round(subtotal + rushFee);
    
    // Update Result Panel Details
    resultBase.textContent = `$${base}`;
    resultScale.textContent = `x ${scale}`;
    resultMaterials.textContent = framing > 0 ? `+$${framing}` : '+$0';
    resultDelivery.textContent = isRush ? `Rush (+25%)` : 'Standard';
    
    resultTotalLabel.textContent = `$${grandTotal.toLocaleString()}`;
    priceTag.textContent = `$${grandTotal.toLocaleString()}`;
}

/* ==========================================
   FORM SUBMISSIONS & TOAST FEEDBACK
   ========================================== */

function setupFormSubmissions() {
    // Contact Form Submit
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const interest = document.getElementById('contact-interest').value;
        
        showToast(`Thank you, ${name}! Your inquiry has been sent successfully.`, 'success');
        
        // Reset form
        contactForm.reset();
        
        // Reset floating label states
        setTimeout(() => {
            contactForm.querySelectorAll('.form-input, .form-textarea').forEach(el => {
                el.placeholder = " "; // triggers label reset
            });
        }, 100);
    });
    
    // Newsletter Submit
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('.newsletter-input');
        const email = emailInput.value;
        
        showToast(`Welcome! ${email} has been subscribed to our studio updates.`, 'success');
        newsletterForm.reset();
    });
}

// Custom Toast Notification System
function showToast(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = type === 'success' 
        ? '✓' 
        : type === 'info' 
            ? 'ℹ' 
            : '⚠';
            
    toast.innerHTML = `
        <span class="toast-icon">${icon}</span>
        <span class="toast-message">${message}</span>
        <button class="toast-close">✕</button>
    `;
    
    toastContainer.appendChild(toast);
    
    // Trigger slide in
    setTimeout(() => {
        toast.classList.add('active');
    }, 50);
    
    // Close button listener
    const closeBtn = toast.querySelector('.toast-close');
    closeBtn.addEventListener('click', () => {
        removeToast(toast);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        removeToast(toast);
    }, 5000);
}

function removeToast(toast) {
    toast.classList.remove('active');
    setTimeout(() => {
        if (toast.parentNode) {
            toastContainer.removeChild(toast);
        }
    }, 400); // Matches transition duration
}
