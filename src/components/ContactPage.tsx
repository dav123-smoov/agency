import { useState } from 'react';
import './ContactPage.css';

const SERVICES = ['Web Dev & Design', 'AI Automations & Chatbots', 'Digital Marketing & SEO', 'Graphic UI/UX Design'];

// Web3Forms free access key — delivers form submissions directly to info@daqswebagency.com
// Replace with the key from https://web3forms.com if needed
const WEB3FORMS_KEY = 'YOUR_ACCESS_KEY_HERE';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        firstName: '', lastName: '', email: '', phone: '', subject: '', message: ''
    });
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleServiceToggle = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
        );
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        try {
            const payload = {
                access_key: WEB3FORMS_KEY,
                subject: `New Enquiry: ${formData.subject} — DAQS Web Agency`,
                from_name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                phone: formData.phone,
                services_requested: selectedServices.length ? selectedServices.join(', ') : 'None selected',
                message: formData.message,
                botcheck: '',
            };
            const res = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            });
            const data = await res.json();
            if (data.success) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
                setSelectedServices([]);
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

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
                                <p>Walter Carrington Cres, V.I, Lagos</p>
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
                                <h3>Call Us:</h3>
                                <p style={{ margin: 0, marginTop: '4px' }}>
                                    <a href="tel:+2347048043844" className="contact-phone-call-btn" title="Call Us" aria-label="Call Us">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
                                        <span>Click to Call</span>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="info-card">
                            <div className="info-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                            </div>
                            <div className="info-text">
                                <h3>Follow Us:</h3>
                                <div style={{ display: 'flex', gap: '10px', marginTop: '6px' }}>
                                    <a href="https://www.instagram.com/daqswebagency/" target="_blank" rel="noopener noreferrer" title="Instagram" style={{ color: '#38bdf8' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-1.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z"/></svg>
                                    </a>
                                    <a href="https://www.tiktok.com/@daqswebagency?_r=1&_t=ZS-98pAvJpz4ej" target="_blank" rel="noopener noreferrer" title="TikTok" style={{ color: '#38bdf8' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.6-4.12-1.31a.097.097 0 0 0-.04-.01c-.01 3.87.01 7.73-.02 11.59-.13 3.08-2.55 5.51-5.59 5.71-3.32.22-6.42-2.12-6.77-5.41-.33-3.04 1.61-6.15 4.63-6.86.31-.07.63-.12.95-.15V11.5c-.32.02-.64.04-.95.09-3.26.54-5.83 3.19-6.23 6.45-.4 3.26 1.07 6.64 3.83 8.35 2.76 1.7 6.41 1.48 8.93-.55 2.51-2.03 3.42-5.46 2.21-8.41-.12-.3-.28-.58-.45-.85V.02h-.01z"/></svg>
                                    </a>
                                    <a href="https://www.linkedin.com/in/bolaji-david-23b1692a4" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#38bdf8' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                                    </a>
                                    <a href="https://wa.me/2347038904187" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ color: '#25D366' }}>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.76-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="map-container">
                        <div className="map-placeholder" style={{ padding: 0, overflow: 'hidden' }}>
                            <iframe
                                title="Office Location Map"
                                src="https://maps.google.com/maps?q=Walter%20Carrington%20Cres,%20Victoria%20Island,%20Lagos&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0, width: '100%', height: '100%', minHeight: '350px' }}
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Contact Form Section */}
            <section className="contact-form-section">
                <div className="section-inner form-flex">
                    <div className="form-content">
                        <span className="section-label">CONTACT US</span>
                        <h2 className="section-title">Let's Scale Your SME Together!</h2>

                        {status === 'success' ? (
                            <div className="form-success-banner">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                <h3>Message Sent! 🎉</h3>
                                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                <button className="send-message-btn" style={{ marginTop: '16px' }} onClick={() => setStatus('idle')}>Send Another Message</button>
                            </div>
                        ) : (
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <input type="text" placeholder="First Name*" required value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                                    <input type="text" placeholder="Last Name*" required value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                                </div>
                                <div className="form-row">
                                    <input type="email" placeholder="Your Mail*" required value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                                    <input type="tel" placeholder="Phone Number*" required value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} />
                                </div>
                                <div className="form-row">
                                    <input type="text" placeholder="Your Subject*" required value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} />
                                </div>
                                <div className="form-row services-row">
                                    <label className="contact-services-title">Which services do you need? (Select 1 or more)*</label>
                                    <div className="contact-services-grid">
                                        {SERVICES.map(service => (
                                            <label className="contact-checkbox-item" key={service}>
                                                <input type="checkbox" checked={selectedServices.includes(service)} onChange={() => handleServiceToggle(service)} />
                                                <span className="contact-checkbox-custom"></span>
                                                <span className="contact-checkbox-text">{service}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-row">
                                    <textarea placeholder="Write your message*" rows={5} required value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
                                </div>
                                {status === 'error' && (
                                    <p className="form-error-msg">⚠️ Something went wrong. Please try again or email us directly.</p>
                                )}
                                <button type="submit" className="send-message-btn" disabled={status === 'sending'}>
                                    {status === 'sending' ? (
                                        <><span className="btn-spinner"></span> Sending...</>
                                    ) : 'Send Message'}
                                </button>
                            </form>
                        )}
                    </div>

                    <div className="form-image">
                        <div className="man-image-container">
                            <img src="/man-pointing-laptop.png" alt="Consultant Pointing to Laptop" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
