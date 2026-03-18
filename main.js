/**
 * Project: Cyber-Defense Interface
 * Authors: Maktsho, Nokto, et alia.
 * Tools: Kali Linux, Maltego, Nikto, Wireshark, etc.
 * Description: Finalized Core Logic - Nav, Tools, & Contact.
 */

document.addEventListener('DOMContentLoaded', () => {
    // ── 1. SELECTORS ──
    const burgerBtn = document.querySelector('.nav-burger');
    const navLinks = document.querySelector('.nav-links');
    const navBar = document.querySelector('nav');
    const contactForm = document.querySelector('.contact-form');
    const toolContainer = document.getElementById('tool-tags');

    // ── 2. SYSTEM STYLING FIX ──
    // Ensures the nav is always physically "on top" of the background grid
    if (navBar) {
        navBar.style.position = 'fixed';
        navBar.style.zIndex = '9999';
    }

    // ── 3. DYNAMIC TOOL TAGS ──
    const tools = [
        'Nmap', 'OpenVAS', 'Wazuh SIEM', 'Metasploit', 'Kali Linux',
        'Nikto', 'Shodan', 'WPScan', 'Wireshark', 'Maltego', 'Burp Suite'
    ];

    if (toolContainer) {
        toolContainer.innerHTML = ''; 
        tools.forEach(t => {
            const s = document.createElement('span');
            s.textContent = t;
            s.style.cssText = "font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; padding:6px 12px; border:1px solid rgba(122,10,20,0.3); color:#A0A0B0; border-radius:2px; background:rgba(26,12,16,0.4); display:inline-block; margin:4px; transition:all 0.3s ease;";
            toolContainer.appendChild(s);
        });
    }

    // ── 4. NAVIGATION ENGINE ──
    function toggleNav(e) {
        if (e) e.preventDefault(); // Stop any default jumping
        if (!navLinks) return;

        const isOpen = navLinks.classList.toggle('open');
        
        // Sync button ARIA for accessibility
        if (burgerBtn) burgerBtn.setAttribute('aria-expanded', isOpen);
        
        // Prevent page scrolling when the overlay is active
        document.body.style.overflow = isOpen ? 'hidden' : '';
        
        console.log(`[SYSTEM] Mobile Menu: ${isOpen ? 'ACTIVE' : 'INACTIVE'}`);
    }

    // ── 5. GLOBAL EVENT DELEGATION ──
    // This catches the click even if the user taps the inner icon spans
    document.addEventListener('click', (e) => {
        const isBurger = e.target.closest('.nav-burger');
        const isNavLink = e.target.closest('.nav-links a');

        if (isBurger) {
            toggleNav(e);
        } else if (isNavLink) {
            // Close menu if a link is clicked
            if (navLinks) navLinks.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // ── 6. CONTACT FORM HANDLING ──
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target));
            console.log('Transmission received:', data);
            alert('Transmission Received. System will respond shortly.');
            e.target.reset();
        });
    }

    // ── 7. SCROLL RESPONSE ──
    window.addEventListener('scroll', () => {
        if (!navBar) return;
        if (window.scrollY > 50) {
            navBar.style.background = 'rgba(12, 6, 8, 0.98)';
            navBar.style.borderBottom = '1px solid #9B1020';
        } else {
            navBar.style.background = 'rgba(12, 6, 8, 0.94)';
            navBar.style.borderBottom = '1px solid #2A1018';
        }
    });
});
