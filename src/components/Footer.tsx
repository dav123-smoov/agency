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
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v16H4z M12 4v16M4 12h16" strokeDasharray="2 2" color="#0ea5e9"></path></svg>
                        </span>
                        Tekly
                    </div>
                    <p className="footer-brand-desc">
                        Our dedicated support team is available 24/7 to ensure smooth IT operations, quick issue resolution
                    </p>
                    <div className="footer-socials">
                        <a href="#" className="footer-social-btn">f</a>
                        <a href="#" className="footer-social-btn"></a>
                        <a href="#" className="footer-social-btn">Bē</a>
                        <a href="#" className="footer-social-btn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.186 0 12 0 12s0 3.814.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.814 24 12 24 12s0-3.814-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg></a>
                    </div>
                </div>
                <div className="footer-col">
                    <h4 className="footer-col-heading">Our Services</h4>
                    <ul className="footer-link-list">
                        {['Database Solution', 'Data Protection', 'App Development', 'Machine Learning', 'Helpdesk Services'].map((item, i) => (
                            <li key={i}><a href="#"><span className="footer-link-arrow">&gt;</span> {item}</a></li>
                        ))}
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-col-heading">Address Company</h4>
                    <ul className="footer-contact-list">
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> 12 Tech Avenue, SuiteInnovation City, United States</li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg> Call Us : +12456978963</li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1-.9-2-2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg> Mail: tekz@gmail.com</li>
                        <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> Office : 8:00 AM - 7:00 PM</li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4 className="footer-col-heading">Latest Posts</h4>
                    <div className="footer-posts-list">
                        {[
                            { img: 'https://api.builder.io/api/v1/image/assets/TEMP/58e58e2775e62d961e9c5417217294a36d247268?width=80', title: 'How Businesses Can...', date: 'May 17, 2025' },
                            { img: 'https://api.builder.io/api/v1/image/assets/TEMP/6e76bea5071b91488244378e1e6394801b520807?width=80', title: 'IT Industry Key...', date: 'May 17, 2025' },
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
                    <p className="footer-copyright">Copyright @ 2025 Tekly. All Rights Received.</p>
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
