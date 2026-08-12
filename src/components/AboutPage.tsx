import { Link } from 'react-router-dom';
import './AboutPage.css';
import baDavidImg from '../assets/ba_david.png';
import teamLeadImg from '../assets/team_lead.png';
import quayyumImg from '../assets/quayyum.png';

export default function AboutPage() {
    return (
        <div className="about-page">
            {/* 1. Hero Section */}
            <section className="about-hero">
                <div className="about-hero-overlay"></div>
                <div className="about-hero-content">
                    <h1>About Us</h1>
                    <p>Home | About Us</p>
                </div>
            </section>

            {/* 2. Trusted Agency Section */}
            <section className="trusted-agency section-inner">
                <div className="agency-layout">
                    {/* Left Main Image Layout */}
                    <div className="agency-images-clean">
                        <img className="main-agency-img" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Team collaborating" />

                        <div className="years-badge-clean">
                            <span className="years-num">100%</span>
                            <span className="years-text">DEDICATED TO<br />YOUR GROWTH</span>
                        </div>

                        <button className="play-video-clean" aria-label="Play video">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="agency-content">
                        <div className="section-header-left">
                            <span className="section-label">ABOUT DAQS AGENCY</span>
                            <h2 className="section-title">We're a Trusted Web, AI & Marketing Agency</h2>
                        </div>
                        <p className="agency-desc">
                            DAQS Web Agency empowers businesses with custom web development, graphic design, intelligent AI automations, and data-backed digital marketing. We build scalable digital products that deliver real efficiency and sustainable growth.
                        </p>

                        <div className="agency-features-split">
                            <div className="agency-success-block">
                                <div className="success-icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b9ed3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 2.5 7 13.5h7.5L10.5 21.5 17 10.5h-7.5L13.5 2.5z" /></svg>
                                </div>
                                <div className="success-text-box">
                                    <h4 className="success-title">Digital Growth Team</h4>
                                    <p className="success-desc">Our multidisciplinary team turns your vision into a high-performing digital asset.</p>
                                </div>
                            </div>

                            <ul className="agency-checklist">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                                    Custom Web App & Graphic Design
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                                    Tailored AI Automation Systems
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                                    ROI-Driven Digital Marketing
                                </li>
                            </ul>
                        </div>

                        <div className="agency-clients">
                            <div className="client-avatars">
                                <img src="https://i.pravatar.cc/100?img=11" alt="Client 1" />
                                <img src="https://i.pravatar.cc/100?img=12" alt="Client 2" />
                                <img src="https://i.pravatar.cc/100?img=13" alt="Client 3" />
                            </div>
                            <div className="client-stats-text">
                                <strong>250+</strong>
                                <span>Projects Completed</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Grid emerging from this section */}
                <div className="stats-grid-overlap">
                    <div className="stat-card-overlap">
                        <div className="stat-pill-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V10M18 20V4M6 20v-4" /></svg>
                        </div>
                        <h3 className="stat-number">99.9%</h3>
                        <div className="stat-blue-footer">UPTIME & SPEED</div>
                    </div>

                    <div className="stat-card-overlap">
                        <div className="stat-pill-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                        </div>
                        <h3 className="stat-number">250+</h3>
                        <div className="stat-blue-footer">PROJECTS DELIVERED</div>
                    </div>

                    <div className="stat-card-overlap">
                        <div className="stat-pill-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h3 className="stat-number">85%</h3>
                        <div className="stat-blue-footer">TIME & COST SAVED</div>
                    </div>

                    <div className="stat-card-overlap">
                        <div className="stat-pill-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        <h3 className="stat-number">98%</h3>
                        <div className="stat-blue-footer">CLIENT SATISFACTION</div>
                    </div>
                </div>
            </section>



            {/* 4. Full-width Image and Banner */}
            <section className="about-mid-banner">
                <div className="mid-banner-img-container">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Team meeting" />
                </div>
                <div className="marquee-ribbon">
                    <div className="marquee-content">
                        <span>WEB DEVELOPMENT</span> <span className="marquee-dot">•</span>
                        <span>GRAPHIC DESIGN</span> <span className="marquee-dot">•</span>
                        <span>AI AUTOMATION</span> <span className="marquee-dot">•</span>
                        <span>DIGITAL MARKETING</span> <span className="marquee-dot">•</span>
                        <span>AI CHATBOTS</span> <span className="marquee-dot">•</span>
                        <span>SEO & STRATEGY</span>
                    </div>
                </div>
            </section>

            {/* 5. Business Success Section */}
            <section className="business-success section-inner">
                <div className="success-layout">
                    {/* Left Staggered Cards */}
                    <div className="success-cards-container">
                        <div className="success-float-card card-1">
                            <div className="card-top">
                                <h4>Web Design & Graphic Branding</h4>
                            </div>
                            <div className="card-bottom">
                                <div className="card-pill">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#4b9ed3" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                                </div>
                                <p>Intuitive UI/UX, responsive frontends, and custom graphic design crafted to convert visitors into loyal clients.</p>
                            </div>
                        </div>

                        <div className="success-float-card card-2">
                            <div className="card-top">
                                <h4>AI Automations & Chatbots</h4>
                            </div>
                            <div className="card-bottom">
                                <div className="card-pill">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#4b9ed3" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <p>Automate repetitive support tickets, document extraction, and lead scoring to save hundreds of manual hours.</p>
                            </div>
                        </div>

                        <div className="success-float-card card-3">
                            <div className="card-top">
                                <h4>Digital Growth Marketing</h4>
                            </div>
                            <div className="card-bottom">
                                <div className="card-pill">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#4b9ed3" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                                </div>
                                <p>Data-backed search engine optimization, pay-per-click ad campaigns, and targeted social media strategies.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="success-content">
                        <div className="section-header-left">
                            <span className="section-label">WHY CHOOSE DAQS</span>
                            <h2 className="section-title">Scaling Your Business Success</h2>
                        </div>
                        <p className="success-desc-text">
                            We go beyond basic website templates—we engineer custom web applications, deploy intelligent AI automations, and run performance marketing campaigns that deliver real, measurable ROI.
                        </p>
                        <Link to="/contact" className="primary-btn">Get Started Today</Link>
                    </div>
                </div>
            </section>

            {/* 6. Founder & Leadership Section (White Background Open Layout) */}
            <section className="about-founder-white-section">
                <div className="section-inner">
                    <div className="founder-white-grid">
                        <div className="founder-photo-col">
                            <div className="founder-photo-card">
                                <img src={baDavidImg} alt="B.A. DAVID - Founder & CEO" className="founder-photo-img" />
                                <div className="founder-name-tag">
                                    <div className="tag-avatar-dot"></div>
                                    <div className="tag-text-wrap">
                                        <span className="tag-name">B.A. DAVID</span>
                                        <span className="tag-role">Founder & CEO | AI Automation Engineer</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="founder-text-col">
                            <span className="section-label-blue">FOUNDER & LEADERSHIP</span>
                            <h2 className="founder-main-title">
                                Engineering Intelligent Web Apps & AI Systems Since 2025
                            </h2>

                            <p className="founder-intro-text">
                                <strong>B.A. DAVID</strong> founded DAQS Web Agency in <strong>2025</strong> with a vision to build digital infrastructure that combines top-tier web development, graphic design precision, machine learning, and automated business workflows.
                            </p>

                            <div className="founder-pillars-list">
                                <div className="founder-pillar-item">
                                    <div className="pillar-icon-box">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
                                    </div>
                                    <div>
                                        <h4>Web Development & Graphic UI Design</h4>
                                        <p>Building high-speed web platforms, sleek user interfaces, and graphic assets that capture attention and drive sales.</p>
                                    </div>
                                </div>

                                <div className="founder-pillar-item">
                                    <div className="pillar-icon-box">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
                                    </div>
                                    <div>
                                        <h4>AI Automation & Machine Learning</h4>
                                        <p>Designing custom AI bots, document processors, and machine learning workflows that automate repetitive operations.</p>
                                    </div>
                                </div>

                                <div className="founder-pillar-item">
                                    <div className="pillar-icon-box">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>
                                    </div>
                                    <div>
                                        <h4>Digital Marketing & Performance SEO</h4>
                                        <p>Executing data-driven marketing strategies, paid advertising, and SEO to help businesses grow reliably.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6.5 Meet Our Team Section */}
            <section className="about-team-section">
                <div className="section-inner">
                    <div className="team-header-centered">
                        <span className="team-label-light">EXPERT TEAM</span>
                        <h2 className="team-title-light">Meet the Team</h2>
                        <p className="team-subtitle-light">
                            A highly-skilled team of engineers, designers, and marketers working together to build your digital future.
                        </p>
                    </div>

                    <div className="about-team-grid">
                        <div className="about-team-card">
                            <div className="team-card-img-wrap">
                                <img src={baDavidImg} alt="B.A. DAVID" className="team-card-img" />
                            </div>
                            <div className="team-card-info">
                                <h4>B.A. DAVID</h4>
                                <p>Founder & CEO | AI Engineer</p>
                            </div>
                        </div>

                        <div className="about-team-card">
                            <div className="team-card-img-wrap">
                                <img src={teamLeadImg} alt="J.A. WALTER" className="team-card-img" />
                            </div>
                            <div className="team-card-info">
                                <h4>J.A. WALTER</h4>
                                <p>Lead AI/Automation & Web Dev Engineer</p>
                            </div>
                        </div>

                        <div className="about-team-card">
                            <div className="team-card-img-wrap">
                                <img src={quayyumImg} alt="B.M. QUAYYUM" className="team-card-img" />
                            </div>
                            <div className="team-card-info">
                                <h4>B.M. QUAYYUM</h4>
                                <p>Lead Web Design & Digital Marketing</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. Analytics Overview Content */}
            <section className="analytics-section section-inner">
                <div className="analytics-layout">
                    {/* Left List */}
                    <div className="analytics-content">
                        <div className="section-header-left">
                            <span className="section-label">INTEGRATED CAPABILITIES</span>
                            <h2 className="section-title">Complete Web & AI Ecosystem</h2>
                        </div>

                        <div className="analytics-list">
                            <div className="analytics-item">
                                <div className="analytics-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <div className="analytics-text">
                                    <h4>Custom Web Engineering & Graphic Design</h4>
                                    <p>Scalable web applications built with modern frameworks, optimized for lightning-fast speeds and high conversion.</p>
                                </div>
                            </div>

                            <div className="analytics-item">
                                <div className="analytics-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                </div>
                                <div className="analytics-text">
                                    <h4>Dedicated AI Automation Specialists</h4>
                                    <p>Our AI engineers build, integrate, and train custom bots and workflow engines tailored specifically to your operations.</p>
                                </div>
                            </div>

                            <div className="analytics-item">
                                <div className="analytics-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                </div>
                                <div className="analytics-text">
                                    <h4>Performance Marketing & SEO</h4>
                                    <p>Multi-channel ad management, technical SEO, and brand positioning designed to expand your customer reach and grow revenue.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image Composite Layout */}
                    <div className="analytics-image-group">
                        <img className="analytics-img-cutout" src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Team reviewing analytics" />
                    </div>
                </div>
            </section>
        </div>
    );
}
