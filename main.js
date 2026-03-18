
document.addEventListener('DOMContentLoaded', () => {
    // 1. SELECTORS (Matches your CSS classes exactly)
    const burgerBtn = document.querySelector('.nav-burger');
    const navLinks = document.querySelector('.nav-links');
    const navBar = document.querySelector('nav');
    const contactForm = document.querySelector('.contact-form');
    const toolContainer = document.getElementById('tool-tags');

    // 2. STYLE FIX (Ensures the hero grid doesn't block the button)
    if (navBar) {
        navBar.style.zIndex = "9999";
        navBar.style.position = "relative";
    }
    if (burgerBtn) {
        burgerBtn.style.cursor = "pointer";
        burgerBtn.style.pointerEvents = "auto";
    }

    // 3. DYNAMIC TOOL TAG GENERATION
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
                display: inline-block; margin: 4px;
            `;
            toolContainer.appendChild(span);
        });
    }

    // 4. THE NAVIGATION LOGIC
    function toggleMenu(e) {
        if (e) e.preventDefault();
        if (!navLinks) return;

        const isOpen = navLinks.classList.toggle('open');
        
        // Update Button State
        if (burgerBtn) {
            burgerBtn.setAttribute('aria-expanded', isOpen);
            burgerBtn.classList.toggle('active'); // In case you add an X animation later
        }

        // Prevent background scroll
        document.body.style.overflow = isOpen ? 'hidden' : '';
        console.log("System: Mobile Menu Toggle -> " + (isOpen ? "OPEN" : "CLOSED"));
    }

    // 5. EVENT LISTENERS (GLOBAL DELEGATION FOR RELIABILITY)
    document.addEventListener('click', (e) => {
        // Check if the click hit the burger button or its inner elements
        if (e.target.closest('.nav-burger')) {
            toggleMenu(e);
        }

        // Close menu if a link is clicked
        if (e.target.closest('.nav-links a')) {
            if (navLinks) navLinks.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // 6. FORM HANDLING
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Transmission Received. System will respond shortly.');
            e.target.reset();
        });
    }

    // 7. SCROLL EFFECTS
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
