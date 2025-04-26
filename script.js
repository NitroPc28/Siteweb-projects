// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add mobile menu toggle functionality
const createMobileMenu = () => {
    const nav = document.querySelector('nav ul');
    const menuButton = document.createElement('button');
    menuButton.classList.add('mobile-menu-button');
    menuButton.innerHTML = '☰';
    document.querySelector('header').prepend(menuButton);

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('show');
    });
};

// Initialize mobile menu on load
window.addEventListener('load', createMobileMenu);

// Filter tests based on level
function filterTests(level) {
    // Remove active class from all buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    const activeButton = document.querySelector(`.level-btn[onclick*="${level}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }

    // Hide all test items
    document.querySelectorAll('.test-item').forEach(item => {
        item.classList.remove('show');
    });

    // Show selected level items
    let selector;
    switch(level) {
        case '1st':
            selector = '.first';
            break;
        case '2nd':
            selector = '.second';
            break;
        case '3rd':
            selector = '.third';
            break;
    }

    document.querySelectorAll(selector).forEach(item => {
        item.classList.add('show');
    });
}

// Show first year items by default when page loads
window.addEventListener('load', () => {
    filterTests('1st');
});
