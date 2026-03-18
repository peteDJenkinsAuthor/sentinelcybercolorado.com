/**
 * SENTINEL CYBER SECURITY CONSULTING
 */

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const burgerBtn = document.querySelector('.nav-burger');
    const navBar = document.querySelector('nav');
    const toolContainer = document.getElementById('tool-tags');
    const emailLink = document.getElementById('copy-email');
    const copyStatus = document.getElementById('copy-status');

    // ── 1. DYNAMIC TOOL TAGS ──
    const tools = ['Nmap', 'OpenVAS', 'Wazuh SIEM', 'Metasploit', 'Kali Linux', 'Nikto', 'Shodan', 'WPScan', 'Wireshark', 'Maltego', 'Burp Suite'];
    if (toolContainer) {
        toolContainer.innerHTML = ''; 
        tools.forEach(t => {
            const s = document.createElement('span');
            s.textContent = t;
            s.style.cssText = "font-family:'IBM Plex Mono',monospace; font-size:9px; letter-spacing:2px; text-transform:uppercase; padding:6px 12px; border:1px solid rgba(122,10,20,0.3); color:#A0A0B0; border-radius:2px; background:rgba(26,12,16,0.4); display:inline-block; margin:4px;";
            toolContainer.appendChild(s);
        });
    }

    // ── 2. NAVIGATION ENGINE ──
    function toggleNav() {
        if (!navLinks) return;
        const isOpen = navLinks.classList.toggle('open');
        if (burgerBtn) burgerBtn.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    document.addEventListener('click', (e) => {
        if (e.target.closest('.nav-burger')) toggleNav();
        if (e.target.closest('.nav-links a')) {
            if (navLinks) navLinks.classList.remove('open');
            document.body.style.overflow = '';
        }
    });

    // ── 3. CLICK-TO-COPY LOGIC ──
    if (emailLink) {
        emailLink.addEventListener('click', (e) => {
            // Optional: e.preventDefault(); // Uncomment this if you ONLY want to copy and NOT open the mail app
            const emailText = emailLink.textContent.trim();
            
            navigator.clipboard.writeText(emailText).then(() => {
                if (copyStatus) {
                    copyStatus.style.display = 'block';
                    setTimeout(() => {
                        copyStatus.style.display = 'none';
                    }, 2000); // Hide after 2 seconds
                }
            });
        });
    }

    // ── 4. SCROLL EFFECTS ──
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
