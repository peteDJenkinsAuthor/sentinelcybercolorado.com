

document.addEventListener('DOMContentLoaded', () => {
    // --- 1. SELECTIONS ---
    const navLinks = document.querySelector('.nav-links');
    const burgerBtn = document.querySelector('.nav-burger');
    const contactForm = document.querySelector('.contact-form');
    const nav = document.querySelector('nav');
    const toolContainer = document.getElementById('tool-tags');

    // --- 2. TOOL TAG GENERATION ---
    const tools = [
        'Nmap', 'OpenVAS', 'Wazuh SIEM', 'Metasploit', 'Kali Linux',
        'Nikto', 'Shodan', 'WPScan', 'Wireshark', 'Maltego', 'Burp Suite'
    ];

    if (toolContainer) {
        toolContainer.innerHTML = ''; 
        tools.forEach(tool => {
            const span = document.createElement('span');
            span.textContent = tool;
            span.style.cssText = `
                font-family: 'IBM Plex Mono', monospace; font-size: 9px; letter-spacing: 2px;
                text-transform: uppercase; padding: 6px 12px; border: 1px solid rgba(122, 10, 20, 0.3);
                color: #A0A0B0; border-radius: 2px; background: rgba(26, 12, 16, 0.4);
                display: inline-block; margin: 4px; transition: all 0.3s ease;
            `;
            toolContainer.appendChild(span);
        });
    }

    // --- 3. THE FAIL-PROOF NAV LOGIC ---
    function toggleMenu() {
        if (!navLinks) return;
        const isOpen = navLinks.classList.toggle('open');
        if (burgerBtn) burgerBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    function closeMenu() {
        if (navLinks) {
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
            if (burgerBtn) burgerBtn.setAttribute('aria-expanded', 'false');
        }
    }

    // --- 4. GLOBAL EVENT DELEGATION (The "Always Works" Method) ---
    document.addEventListener('click', (e) => {
        // If they click the burger button OR anything inside the burger button
        if (e.target.closest('.nav-burger')) {
            e.preventDefault();
            toggleMenu();
        }

        // If they click a link inside the mobile menu, close the menu
        if (e.target.closest('.nav-links a')) {
            closeMenu();
        }
    });

    // --- 5. FORM & SCROLL LOGIC ---
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            console.log('Packet Received (Form Submitted)');
            alert('Transmission Received.');
            e.target.reset();
        });
    }

    window.addEventListener('scroll', () => {
        if (!nav) return;
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(12, 6, 8, 0.98)';
            nav.style.borderBottom = '1px solid #9B1020';
        } else {
            nav.style.background = 'rgba(12, 6, 8, 0.94)';
            nav.style.borderBottom = '1px solid #2A1018';
        }
    });
});
