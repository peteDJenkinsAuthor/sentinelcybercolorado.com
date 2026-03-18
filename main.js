


// --- 1. GLOBAL SELECTIONS ---
const navLinks = document.querySelector('.nav-links');
const burgerBtn = document.querySelector('.nav-burger');
const contactForm = document.querySelector('.contact-form');
const nav = document.querySelector('nav');



// --- 2. NAVIGATION & UX LOGIC ---
function toggleMenu() {
    if (!navLinks || !burgerBtn) return;

    [span_0](start_span)// Toggle the 'open' class used in the CSS media queries[span_0](end_span)
    const isOpen = navLinks.classList.toggle('open');

    // Accessibility: Update ARIA state for screen readers
    burgerBtn.setAttribute('aria-expanded', isOpen);

    // Prevent 'Scroll Leak': Keeps the background from moving when menu is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
}
function closeMenu() {
    if (navLinks) {
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
        if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
    }
}




// --- 3. FORM & DATA LOGIC ---
function handleFormSubmit(event) {
    event.preventDefault(); // Stop page reload
    
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    // Log the data to the console for verification
    console.log('Packet Received (Form Data):', data);
    
    // User feedback
    alert('Message transmitted. System will respond shortly.');
    event.target.reset(); 
}




// --- 4. INITIALIZATION & EVENT LISTENERS ---



// Mobile Menu Toggle (Burger Click)
if (burgerBtn) {
    burgerBtn.addEventListener('click', toggleMenu);
}



// Auto-close menu when any navigation link is clicked
if (navLinks) {
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}



// Contact Form Listener
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}



// Dynamic Nav Transparency/Border on Scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(12, 6, 8, 0.98)';
        nav.style.borderBottom = '1px solid var(--crimson2)';
    } else {
        nav.style.background = 'rgba(12, 6, 8, 0.94)';
        nav.style.borderBottom = '1px solid var(--rule)';
    }
});
