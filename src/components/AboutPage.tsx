import './AboutPage.css';

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
                            <span className="years-num">17</span>
                            <span className="years-text">YEARS OF<br />EXPERIENCE</span>
                        </div>

                        <button className="play-video-clean" aria-label="Play video">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                        </button>
                    </div>

                    {/* Right Content */}
                    <div className="agency-content">
                        <div className="section-header-left">
                            <span className="section-label">ABOUT OUR COMPANY</span>
                            <h2 className="section-title">We're a Trusted and Secure Web Agency</h2>
                        </div>
                        <p className="agency-desc">
                            An IT business thrives on innovation, utilizing advanced technologies like AI, cloud computing, blockchain, and cybersecurity to deliver efficient and future-proof solutions. Keeping up with the latest tech trends ensures businesses...
                        </p>

                        <div className="agency-features-split">
                            <div className="agency-success-block">
                                <div className="success-icon-box">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4b9ed3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13.5 2.5 7 13.5h7.5L10.5 21.5 17 10.5h-7.5L13.5 2.5z" /></svg>
                                </div>
                                <div className="success-text-box">
                                    <h4 className="success-title">Client Success Team</h4>
                                    <p className="success-desc">Our digital marketing agency is dedicated to transforming online</p>
                                </div>
                            </div>

                            <ul className="agency-checklist">
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                                    Leading Business Solution
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                                    Business is the best plan
                                </li>
                                <li>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="9 12 11 14 15 10"></polyline></svg>
                                    Services we provide
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
                                <strong>921+</strong>
                                <span>Active Reviews</span>
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
                        <h3 className="stat-number">53%</h3>
                        <div className="stat-blue-footer">SUCCESS RATE</div>
                    </div>

                    <div className="stat-card-overlap">
                        <div className="stat-pill-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                        </div>
                        <h3 className="stat-number">48%</h3>
                        <div className="stat-blue-footer">CLIENT SUCCESS</div>
                    </div>

                    <div className="stat-card-overlap">
                        <div className="stat-pill-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        </div>
                        <h3 className="stat-number">48%</h3>
                        <div className="stat-blue-footer">CLIENT SUCCESS</div>
                    </div>

                    <div className="stat-card-overlap">
                        <div className="stat-pill-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        <h3 className="stat-number">48%</h3>
                        <div className="stat-blue-footer">AWARD ACHIVED</div>
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
                        <span>IT SOLUTION</span> <span className="marquee-dot">•</span>
                        <span>TECHNOLOGY SOLUTION</span> <span className="marquee-dot">•</span>
                        <span>IT CONSULTANCY</span> <span className="marquee-dot">•</span>
                        <span>IT CONSULTANCY</span> <span className="marquee-dot">•</span>
                        <span>DEDICATED TEAM</span> <span className="marquee-dot">•</span>
                        <span>IT SOLUTION</span>
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
                                <h4>Expertise & Experience</h4>
                            </div>
                            <div className="card-bottom">
                                <div className="card-pill">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#4b9ed3" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                                </div>
                                <p>With years of Industry experience, our team of IT professionals</p>
                            </div>
                        </div>

                        <div className="success-float-card card-2">
                            <div className="card-top">
                                <h4>Custom IT Solutions</h4>
                            </div>
                            <div className="card-bottom">
                                <div className="card-pill">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#4b9ed3" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                                </div>
                                <p>With years of industry experience, our team of IT professionals</p>
                            </div>
                        </div>

                        <div className="success-float-card card-3">
                            <div className="card-top">
                                <h4>24/7 IT Support</h4>
                            </div>
                            <div className="card-bottom">
                                <div className="card-pill">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="#4b9ed3" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                                </div>
                                <p>With years of industry experience, our team of IT professionals</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="success-content">
                        <div className="section-header-left">
                            <span className="section-label">WHY CHOOSE US</span>
                            <h2 className="section-title">Increasing Business Success</h2>
                        </div>
                        <p className="success-desc-text">
                            we go beyond just providing IT solutions —we empower businesses with cutting-edge technology, reliable support, and future-ready innovation. Here's why we stand out as your ideal IT partner:
                        </p>
                        <button className="primary-btn">Get Started</button>
                    </div>
                </div>
            </section>

            {/* 6. Our Excellent Team (Blue variant) */}
            <section className="about-team-section">
                <div className="section-inner">
                    <div className="team-header-centered">
                        <span className="team-label-light">EXPERT TEAM</span>
                        <h2 className="team-title-light">Our Excellent Team</h2>
                        <p className="team-subtitle-light">Our team is dedicated to delivering exceptional IT solutions tailored to meet the unique needs of each client.</p>
                    </div>

                    <div className="about-team-grid">
                        {[
                            { name: 'James Harrington', role: 'Senior Advisor', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80' },
                            { name: 'Alex Josephina', role: 'Senior Advisor', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80' },
                            { name: 'Henry Fitzwilliam', role: 'Senior Advisor', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80' },
                            { name: 'Thomas Whitaker', role: 'Senior Advisor', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80' },
                            { name: 'Emily Fairchild', role: 'Senior Advisor', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80' },
                            { name: 'Olivia Pennington', role: 'Senior Advisor', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80' }
                        ].map((member, index) => (
                            <div className="about-team-card" key={index}>
                                <img src={member.img} alt={member.name} className="team-card-img" />
                                <div className="team-card-info">
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                    <div className="team-card-socials">
                                        <a href="#" className="social-icon">f</a>
                                        <div className="social-divider"></div>
                                        <a href="#" className="social-icon">Bē</a>
                                        <div className="social-divider"></div>
                                        <a href="#" className="social-icon">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Analytics Overview Content */}
            <section className="analytics-section section-inner">
                <div className="analytics-layout">
                    {/* Left List */}
                    <div className="analytics-content">
                        <div className="section-header-left">
                            <span className="section-label">IT MANAGEMENT</span>
                            <h2 className="section-title">Analytics Overview You've Always Wanted</h2>
                        </div>

                        <div className="analytics-list">
                            <div className="analytics-item">
                                <div className="analytics-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                                </div>
                                <div className="analytics-text">
                                    <h4>Tailored Solutions For Every Business</h4>
                                    <p>Our digital marketing agency is dedicated to maximizing client success in the business world.</p>
                                </div>
                            </div>

                            <div className="analytics-item">
                                <div className="analytics-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg>
                                </div>
                                <div className="analytics-text">
                                    <h4>Dedicated Client Success Team</h4>
                                    <p>Our digital marketing agency is dedicated to transforming ideas into the best in the market.</p>
                                </div>
                            </div>

                            <div className="analytics-item">
                                <div className="analytics-icon">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                                </div>
                                <div className="analytics-text">
                                    <h4>Sustainability-Focused IT Practices</h4>
                                    <p>Our digital forward approach is dedicated to designing IT forms and other key targets reliably.</p>
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
