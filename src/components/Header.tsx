import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* ── Topbar ── */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
              128 Munich 1258, Germany.
            </span>
            <span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              help.me@example.com
            </span>
          </div>
          <div className="topbar-right">
            <span>Follow Us:</span>
            <div className="topbar-socials">
              <a href="#">f</a>
              <a href="#">Bē</a>
              <a href="#">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Navbar ── */}
      <div className="navbar-wrapper">
        <nav className="navbar">
          <div className="navbar-inner">
            <Link to="/" className="nav-logo">
              <div className="nav-logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 8V5h14v3" />
                  <path d="M12 5v14" />
                  <circle cx="9" cy="18" r="1.5" />
                  <circle cx="16" cy="11" r="1.5" />
                  <circle cx="5" cy="11" r="1.5" />
                  <path d="M7 15l-1-2.5" />
                  <path d="M12 11l2.5-1.5" />
                </svg>
              </div>
              Tekly
            </Link>
            <div className={`nav-menu-container ${isMobileMenuOpen ? 'open' : ''}`}>
              <ul className="nav-links">
                <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
                <li><Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link></li>
                <li><Link to="/blog" className={location.pathname === '/blog' ? 'active' : ''}>Blog</Link></li>
                <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>
              </ul>
              <div className="nav-actions">
                <div className="nav-phone-wrap">
                  <div className="nav-phone-icon">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" /></svg>
                  </div>
                  <div className="nav-phone-text">
                    <span className="nav-phone-label">Hotline 24/7</span>
                    <span className="nav-phone-number">+1 (555) 123-4567</span>
                  </div>
                </div>
                <a href="#" className="btn-primary btn-talk">Let's Talk <span className="plus-icon"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M5 12h14" /></svg></span></a>
              </div>
            </div>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <path d="M18 6L6 18" />
                    <path d="M6 6l12 12" />
                  </>
                ) : (
                  <>
                    <path d="M3 12h18" />
                    <path d="M3 6h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </>
  );
}
