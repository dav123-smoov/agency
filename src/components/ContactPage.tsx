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
                                <p>1234 Techology Park, Suite 500 San Francisco, CA 94105, USA</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                            </div>
                            <div className="info-text">
                                <h3>Email Address:</h3>
                                <p>info@youritcompany.com<br />support@itcompany.com</p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                            </div>
                            <div className="info-text">
                                <h3>Business Hours:</h3>
                                <p>Monday – Friday: 9:00 AM – 6:00 PM<br />(PST)Saturday – Sunday: Closed</p>
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
                        <h2 className="section-title">Let’s Start Creating Together!</h2>

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
