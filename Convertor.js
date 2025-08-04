// THEME TOGGLE with Sun/Moon - Now toggles between dark (default) and light
const themeToggle = document.getElementById('theme-toggle');
let isLight = false; // Changed: now light mode is the toggle state

themeToggle.addEventListener('click', function () {
    isLight = !isLight;
    document.body.classList.toggle('light-mode', isLight);

    // Gentle scale animation on click
    this.style.transform = 'scale(0.9)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Vertical navigation functionality - REMOVED ALERTS
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const target = this.getAttribute('href').substring(1);

        // Add click animation
        this.style.transform = 'translateX(10px) scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'translateX(5px) scale(1.05)';
        }, 100);

        // Handle navigation without alerts
        if (target === 'home') {
            // Reload page for home
            window.location.reload();
        }
        // About and Contact just show hover effects, no alerts
    });
});

// Flag navigation functionality
const flagItems = document.querySelectorAll('.flag-item');
const fromSelect = document.getElementById('from-currency');
const toSelect = document.getElementById('to-currency');

flagItems.forEach(flagItem => {
    flagItem.addEventListener('click', function () {
        const currency = this.dataset.currency;

        // Set as "from" currency if none selected or same as current "to"
        if (fromSelect.value === toSelect.value || !fromSelect.value) {
            fromSelect.value = currency;
        } else {
            // Otherwise set as "to" currency
            toSelect.value = currency;
        }

        // Add visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });
});

// Social media links functionality
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.addEventListener('click', function (e) {
        e.preventDefault();
        const platform = this.classList[1]; // Gets 'github', 'linkedin', etc.

        // Add click animation
        this.style.transform = 'translateY(-4px) scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'translateY(-2px) scale(1.1)';
        }, 100);

        // Open actual links (replace with real URLs)
        const links = {
            github: 'https://github.com',
            linkedin: 'https://linkedin.com',
            twitter: 'https://gmail.com',
            instagram: 'https://instagram.com'
        };

        if (links[platform]) {
            window.open(links[platform], '_blank');
        }
    });
});

// Currency converter code
const rates = {
    USD_INR: 87.2,
    INR_USD: 0.011,
    EUR_INR: 100.44,
    INR_EUR: 0.01,
    USD_EUR: 0.86,
    EUR_USD: 1.16,
    AUD_INR: 56.55,
    INR_AUD: 0.018,
    CAD_INR: 62.86,
    INR_CAD: 0.016,
    AED_INR: 23.76,
    INR_AED: 0.042,
    RUB_INR: 1.09,
    INR_RUB: 0.92,
};

document.getElementById('convert-btn').addEventListener('click', function () {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('from-currency').value.toUpperCase();
    const to = document.getElementById('to-currency').value.toUpperCase();
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');

    // Clear previous
    resultDiv.textContent = '';
    errorDiv.textContent = '';
    resultDiv.classList.remove('show');
    errorDiv.classList.remove('show');

    // Gentle button press animation
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 100);

    // Validation
    if (isNaN(amount) || amount < 0) {
        errorDiv.textContent = 'Please enter a valid amount.';
        errorDiv.classList.add('show');
        return;
    }

    if (from === to) {
        resultDiv.textContent = `Converted Amount: ${amount.toFixed(2)} ${to}`;
        resultDiv.classList.add('show');
        return;
    }

    const key = `${from}_${to}`;
    let rate = rates[key];

    if (rate === undefined) {
        errorDiv.textContent = 'Currency combination not supported.';
        errorDiv.classList.add('show');
        return;
    }

    const converted = amount * rate;
    resultDiv.textContent = `Converted Amount: ${converted.toFixed(2)} ${to}`;
    resultDiv.classList.add('show');
});

// Auto-fade result/error after 12s
['result', 'error'].forEach((id) => {
    const el = document.getElementById(id);
    const observer = new MutationObserver(() => {
        if (el.classList.contains('show')) {
            setTimeout(() => {
                el.classList.remove('show');
            }, 12000);
        }
    });
    observer.observe(el, { attributes: true, attributeFilter: ['class'] });
});

// Enhanced focus effects
document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('focus', function () {
        this.parentElement.style.transform = 'translateY(-2px) scale(1.01)';
        this.parentElement.style.transition = 'all 0.3s ease';
    });
    element.addEventListener('blur', function () {
        this.parentElement.style.transform = 'translateY(0) scale(1)';
    });
});