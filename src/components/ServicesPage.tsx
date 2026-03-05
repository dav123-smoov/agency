import Sponsors from './Sponsors';
import './ServicesPage.css';

export default function ServicesPage() {
    const serviceCards = [
        {
            title: 'UI/UX and Product Design',
            desc: 'The Advanced Threat Protection (ATP) Suite Development project focuses on creating a robust and comprehensive...',
            img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=600&q=80', // design/creative team
        },
        {
            title: 'Web Application Development',
            desc: 'Our engineering team leverages modern web technologies to build scalable, high-performance web applications tailored to your needs.',
            img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80', // coding/laptop
        },
        {
            title: 'Cloud Infrastructure & DevOps',
            desc: 'We architect and migrate systems to secure cloud environments, optimizing your deployment pipelines for maximum efficiency.',
            img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80', // tech/cloud abstract
        },
        {
            title: 'Data Analytics & Insights',
            desc: 'Unlock the value of your data with our advanced analytics tools, giving you actionable insights to drive your business forward.',
            img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80', // data/charts
        },
        {
            title: 'Cybersecurity Solutions',
            desc: 'Protect your enterprise with our comprehensive security audits, threat detection, and continuous monitoring services.',
            img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80', // cyber tech
        },
        {
            title: 'IT Consulting & Strategy',
            desc: 'Align your technology strategy with your business goals. Our seasoned consultants guide you through digital transformation.',
            img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80', // consulting/meeting
        }
    ];

    const steps = [
        {
            num: 1,
            title: 'Planning & Strategy',
            desc: 'We begin by understanding your business needs, challenges, and objectives. Our expert consultants work closely.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            )
        },
        {
            num: 2,
            title: 'Development & Execution',
            desc: 'We begin by understanding your business needs, challenges, and objectives. Our expert consultants work closely.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            )
        },
        {
            num: 3,
            title: 'Support & Optimization',
            desc: 'We begin by understanding your business needs, challenges, and objectives. Our expert consultants work closely.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3"></circle>
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
            )
        }
    ];

    return (
        <div className="services-page-wrapper">
            {/* ── Hero section ── */}
            <section className="services-hero">
                <div className="services-hero-overlay"></div>
                <div className="services-hero-content">
                    <h1>Our Service</h1>
                    <p>Home | Our Service</p>
                </div>
            </section>

            {/* ── Services Grid ── */}
            <section className="services-grid-section">
                <div className="grid-container">
                    <div className="cards-grid">
                        {serviceCards.map((card, i) => (
                            <div className="svc-card" key={i}>
                                <div className="svc-img-wrap">
                                    <img src={card.img} alt={card.title} className="svc-img" />
                                    <div className="svc-icon-overlay">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="svc-card-body">
                                    <h3 className="svc-title">{card.title}</h3>
                                    <p className="svc-desc">{card.desc}</p>
                                    <a href="#" className="svc-read-btn">Read More</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Sponsors ── */}
            <Sponsors />

            {/* ── How We Works ── */}
            <section className="how-works-section">
                <div className="how-works-inner">
                    <div className="how-works-header">
                        <span className="blue-label">WORK PROCESS</span>
                        <h2>How We Works</h2>
                        <p>Our team is dedicated to delivering exceptional IT solutions tailored to meet<br />the unique needs of each client.</p>
                    </div>

                    <div className="steps-row">
                        {steps.map((step, i) => (
                            <div className="process-step" key={i}>
                                <div className="step-bg-text">Step {step.num}</div>
                                <div className="step-content">
                                    <div className="step-icon">
                                        {step.icon}
                                    </div>
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
