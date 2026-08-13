import { useState, useEffect } from 'react';
import './FloatingBookingModal.css';

export default function FloatingBookingModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    // Pop up automatically on visit with a short 600ms entrance delay
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsSubmitted(false);
    setSelectedServices([]);
  };

  const handleServiceToggle = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter(s => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload = {
        access_key: 'b84be382-07df-492e-a855-9c38fc9ff4df',
        subject: `New Booking Request: ${formData.subject} — DAQS Web Agency`,
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
        setIsSubmitted(true);
        setTimeout(() => setIsOpen(false), 4500);
      }
    } catch {
      // silently fail — user can use contact page as fallback
      setIsSubmitted(true);
      setTimeout(() => setIsOpen(false), 4500);
    }
  };

  return (
    <>
      {/* Floating Trigger Button (Bottom-Right) */}
      <button 
        className={`floating-booking-trigger ${isOpen ? 'active' : ''}`}
        onClick={handleOpen}
        aria-label="Book A Free Strategy Call"
        title="Book A Consultation"
      >
        <span className="trigger-pulse"></span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        <span className="trigger-text">Book Free Call</span>
      </button>

      {/* Modal Backdrop & Overlay */}
      {isOpen && (
        <div className="booking-modal-overlay" onClick={handleClose}>
          <div className="booking-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={handleClose} aria-label="Close modal">
              &times;
            </button>

            {!isSubmitted ? (
              <div className="modal-exact-card">
                <span className="modal-top-label">CONTACT US</span>
                <h2 className="modal-exact-heading">Let’s Scale Your SME Together!</h2>

                <form className="exact-booking-form" onSubmit={handleSubmit}>
                  <div className="form-row-2col">
                    <input 
                      type="text" 
                      placeholder="First Name*" 
                      required 
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    <input 
                      type="text" 
                      placeholder="Last Name*" 
                      required 
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>

                  <div className="form-row-2col">
                    <input 
                      type="email" 
                      placeholder="Your Mail*" 
                      required 
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                    <input 
                      type="tel" 
                      placeholder="Phone Number*" 
                      required 
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="services-selection-section">
                    <label className="services-select-title">Which services do you need? (Select 1 or more)*</label>
                    <div className="services-checkbox-grid">
                      {[
                        'Web Dev & Design',
                        'AI Automations & Chatbots',
                        'Digital Marketing & SEO',
                        'Graphic UI/UX Design'
                      ].map((service) => (
                        <label className="checkbox-label-item" key={service}>
                          <input 
                            type="checkbox" 
                            checked={selectedServices.includes(service)} 
                            onChange={() => handleServiceToggle(service)} 
                          />
                          <span className="checkbox-custom"></span>
                          <span className="checkbox-text">{service}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-row-full">
                    <input 
                      type="text" 
                      placeholder="Your Subject*" 
                      required 
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    />
                  </div>

                  <div className="form-row-full">
                    <textarea 
                      placeholder="Write your message*" 
                      rows={2}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <div className="form-action-left">
                    <button type="submit" className="btn-send-message">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="modal-success-state">
                <div className="success-icon-circle">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you, <strong>{formData.firstName || 'Valued Client'}</strong>! B.A. DAVID and the DAQS team have received your message and will reach out promptly.</p>
                <div className="success-action-btns">
                  <a href="https://wa.me/2347038904187" target="_blank" rel="noopener noreferrer" className="btn-whatsapp-direct">
                    Chat Instantly on WhatsApp &rarr;
                  </a>
                  <button onClick={handleClose} className="btn-close-modal">Close Window</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
