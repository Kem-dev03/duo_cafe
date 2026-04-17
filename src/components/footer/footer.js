import './footer.scss';

export const footer = () => {
    return /* html */`
    <footer class="footer">
        <div class="footer__watermark">COFFEE</div>
        
        <div class="footer__container">
            <div class="footer__top">
                
                <div class="footer__brand">
                    <h2 class="footer__logo">DuoCafe</h2>
                    <p class="footer__tagline">Elevating your daily ritual.<br>One cup at a time.</p>
                    <div class="footer__socials">
                        <a href="https://www.instagram.com/duocafes?igsh=eTNweTFhMGpmbmox" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/share/1BMoy3uwRh/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                
                <div class="footer__nav">
                    <a href="/" class="footer__link">Home</a>
                    <a href="/menu" class="footer__link">Menu</a>
                    <a href="/contacts" class="footer__link">Contacts</a>
                </div>
                
                <div class="footer__info">
                    <div class="footer__info-block">
                        <h4>Location</h4>
                        <p>Plzeňská <br>182/179</p>
                    </div>
                    <div class="footer__info-block">
                        <h4>Hours</h4>
                        <p>Mon-Fri: 7am - 8pm<br>Sat-Sun: 8am - 8pm</p>
                    </div>
                </div>
            </div>
            
            <div class="footer__bottom">
                <p>Made with Love and Caffeine.</p>
            </div>
        </div>
    </footer>
    `
}