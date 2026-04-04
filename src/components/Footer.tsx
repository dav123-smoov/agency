export default function Footer() {
    return (
        <footer className="footer-section">
            {/* Background Mesh Elements */}
            <div className="footer-bg-shape footer-bg-plus">+++</div>
            <div className="footer-bg-shape footer-bg-circle"></div>
            <div className="footer-bg-shape footer-bg-zigzag">
                <svg width="60" height="30" viewBox="0 0 60 30" fill="none" stroke="#1e3a8a" strokeWidth="2">
                    <path d="M0 15l10-10 10 10 10-10 10 10 10-10 10 10M0 25l10-10 10 10 10-10 10 10 10-10 10 10" />
                </svg>
            </div>
            <div className="footer-bg-shape footer-bg-diamond"></div>

            {/* ── Newsletter ── */}
            <div className="section-inner newsletter-inner">
                <div className="newsletter-content">
                    <div className="newsletter-icon-wrap">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>
                    </div>
                    <div>
                        <h3 className="newsletter-heading">Sign Up To Our Newsletters.</h3>
                        <p className="newsletter-subtext">Subscribe to our Newsletter &amp; Event Right Now to be Updated</p>
                    </div>
                </div>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter Your Email" className="newsletter-input" />
                    <button type="button" className="newsletter-btn">Subscribe Now</button>
                </form>
            </div>

            <div className="footer-divider"></div>

            <div className="section-inner footer-inner">
                <div className="footer-brand-col">
                    <div className="footer-logo">
                        <span className="footer-logo-icon">
                            {/* Premium DAQS SVG Logo for Footer */}
                            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="daqs-grad-footer" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#38bdf8" />
                                        <stop offset="100%" stopColor="#2563eb" />
                                    </linearGradient>
                                </defs>
                                <path d="M16 2L28 8.9V23.1L16 30L4 23.1V8.9L16 2Z" stroke="url(#daqs-grad-footer)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
                                <path d="M10 10V22M10 10H16C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22H10" stroke="url(#daqs-grad-footer)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="16" cy="16" r="1.5" fill="#38bdf8" />
                            </svg>
                        </span>
                        DAQS web agency
                    </div>
                    <p className="footer-brand-desc">
                        Our dedicated support team is available 24/7 to ensure smooth web operations, quick issue resolution, and zero downtime for your projects.
                    </p>
                    <div className="footer-socials">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="Instagram">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
                        </a>
                        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="TikTok">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a.097.097 0 0 0-.04-.01c-.01 3.87.01 7.73-.02 11.59-.13 3.08-2.55 5.51-5.59 5.71-3.32.22-6.42-2.12-6.77-5.41-.33-3.04 1.61-6.15 4.63-6.86.31-.07.63-.12.95-.15V11.5c-.32.02-.64.04-.95.09-3.26.54-5.83 3.19-6.23 6.45-.4 3.26 1.07 6.64 3.83 8.35 2.76 1.7 6.41 1.48 8.93-.55 2.51-2.03 3.42-5.46 2.21-8.41-.12-.3-.28-.58-.45-.85V.02h-.01z"/></svg>
                        </a>
                        <a href="https://wa.me/447442507562" target="_blank" rel="noopener noreferrer" className="footer-social-btn" title="WhatsApp">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        </a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4 className="footer-col-heading">Our Services</h4>
                    <ul className="footer-link-list">
                        {['Custom Web Apps', 'AI Chatbots', 'Web Development', 'Automated Systems', 'Digital Marketing'].map((item, i) => (
                            <li key={i}><a href="#"><span className="footer-link-arrow">&gt;</span> {item}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-col-heading">Address Company</h4>
                    <ul className="footer-contact-list">
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> Level 24, The Shard, London, UK</li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg> Call Us : <a href="tel:+447442507562" style={{ color: 'inherit', textDecoration: 'none' }}>+44 7442 507562</a></li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1-.9-2-2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Mail: <a href="mailto:info@daqswebagency.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@daqswebagency.com</a></li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Office : 8:00 AM - 7:00 PM</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-col-heading">Latest Posts</h4>
                    <div className="footer-posts-list">
                        {[
                            { img: 'https://api.builder.io/api/v1/image/assets/TEMP/58e58e2775e62d961e9c5417217294a36d247268?width=80', title: 'How Businesses Can Leverage AI for Growth', date: 'May 17, 2025' },
                            { img: 'https://api.builder.io/api/v1/image/assets/TEMP/6e76bea5071b91488244378e1e6394801b520807?width=80', title: 'Web Industry Key Trends for 2024', date: 'May 17, 2025' },
                        ].map((post, i) => (
                            <div className="footer-post-item" key={i}>
                                <img src={post.img} alt={post.title} className="footer-post-img" />
                                <div>
                                    <p className="footer-post-date"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> {post.date}</p>
                                    <a href="#" className="footer-post-latest-title">{post.title}</a>
                                    <a href="#" className="footer-post-readmore">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="section-inner footer-bottom-inner">
                    <p className="footer-copyright">Copyright @ 2025 DAQS Web Agency. All Rights Received.</p>
                    <div className="footer-bottom-links">
                        <a href="#">Privacy policy</a>
                        <a href="#">Terms of use</a>
                        <a href="#">Site map</a>
                    </div>
                </div>
                <button className="footer-scroll-top" onClick={() => window.scrollTo(0, 0)}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                </button>
            </div>
        </footer>
    );
}
