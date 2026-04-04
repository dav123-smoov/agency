import './ContactPage.css';

export default function ContactPage() {
    return (
        <div className="contact-page">
            {/* 1. Hero Section */}
            <section className="contact-hero">
                <div className="contact-hero-overlay"></div>
                <div className="contact-hero-content">
                    <h1>Contact Us</h1>
                    <p>Home | Contact Us</p>
                </div>
            </section>

            {/* 2. Contact Info Cards & Map Section */}
            <section className="contact-info-section section-inner">
                <div className="info-map-container">
                    <div className="contact-info-cards">
                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            </div>
                            <div className="info-text">
                                <h3>Our Office Address:</h3>
                                <p>Level 24, The Shard, London, UK</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="info-text">
                                <h3>Email Address:</h3>
                                <p><a href="mailto:info@daqswebagency.com" style={{ color: 'inherit', textDecoration: 'none' }}>info@daqswebagency.com</a></p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path></svg>
                            </div>
                            <div className="info-text">
                                <h3>Phone Number:</h3>
                                <p><a href="tel:+447442507562" style={{ color: 'inherit', textDecoration: 'none' }}>+44 7442 507562</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        {/* Placeholder for Map - highly identical look with custom styles */}
                        <div className="map-placeholder">
                            <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80" alt="Map View" />
                            <div className="map-marker">
                                <div className="marker-dot"></div>
                            </div>
                            <div className="map-controls">
                                <button>+</button>
                                <button>-</button>
                            </div>
                            <div className="map-label">View larger map</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Contact Form Section */}
            <section className="contact-form-section">
                <div className="section-inner form-flex">
                    <div className="form-content">
                        <span className="section-label">CONTACT US</span>
                        <h2 className="section-title">Let’s Scale Your SME Together!</h2>

                        <form className="contact-form">
                            <div className="form-row">
                                <input type="text" placeholder="First Name*" required />
                                <input type="text" placeholder="Last Name*" required />
                            </div>
                            <div className="form-row">
                                <input type="email" placeholder="Your Mail*" required />
                                <input type="tel" placeholder="Phone Number*" required />
                            </div>
                            <div className="form-row">
                                <input type="text" placeholder="Your Subject*" required />
                            </div>
                            <div className="form-row">
                                <textarea placeholder="Write your message*" rows={6} required></textarea>
                            </div>
                            <button type="submit" className="send-message-btn">Send Message</button>
                        </form>
                    </div>

                    <div className="form-image">
                        <div className="man-image-container">
                            <img src="/man-pointing-laptop.png" alt="Consultant Pointing to Laptop" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
