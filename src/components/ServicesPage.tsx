import { Link } from 'react-router-dom';
import Sponsors from './Sponsors';
import './ServicesPage.css';

// Import the new high-quality assets
import smeDesignImg from '../assets/sme_design.png';
import webEngImg from '../assets/web_engineering.png';
import cloudAiImg from '../assets/cloud_ai.png';
import aiAutoImg from '../assets/ai_automation.png';
import marketingImg from '../assets/marketing.png';
import strategyImg from '../assets/strategy.png';

export default function ServicesPage() {
    const serviceCards = [
        {
            id: 'sme-design',
            title: 'SME Digital Product Design',
            desc: 'We create intuitive, conversion-focused user experiences that help SMEs engage customers and build a strong brand presence.',
            img: smeDesignImg,
        },
        {
            id: 'web-engineering',
            title: 'Enterprise-Grade Web Engineering',
            desc: 'Our engineering team builds secure, high-performance web applications using modern frameworks, tailored for speed and high-traffic scalability.',
            img: webEngImg,
        },
        {
            id: 'cloud-ai',
            title: 'AI-Powered Cloud Solutions',
            desc: 'We architect and optimize cloud systems specifically for AI workloads, ensuring your tech stack is reliable, secure, and ready for future global growth.',
            img: cloudAiImg,
        },
        {
            id: 'ai-automation',
            title: 'Custom AI Agents & Automation',
            desc: 'Deploy advanced AI bots and automated workflows that handle repetitive tasks, enhance efficiency, and reduce operational costs for your SME.',
            img: aiAutoImg,
        },
        {
            id: 'marketing',
            title: 'Growth-Driven Digital Marketing',
            desc: 'A comprehensive mix of SEO, paid ads, and brand strategy designed to maximize visibility and drive measurable ROI for small to medium enterprises.',
            img: marketingImg,
        },
        {
            id: 'strategy',
            title: 'Tech Transformation Strategy',
            desc: 'Our experts guide SMEs through digital modernization, helping you integrate AI tools and web strategies into your current business model effectively.',
            img: strategyImg,
        }
    ];

    const steps = [
        {
            num: 1,
            title: 'Diagnosis & Strategy',
            desc: 'We analyze your SME operations to build a tailored tech and marketing roadmap that delivers measurable results.',
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
            title: 'Agile Implementation',
            desc: 'Our team builds your custom web and AI solutions with a rapid, agile approach, ensuring the fastest time-to-market.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
            )
        },
        {
            num: 3,
            title: 'Growth & Optimization',
            desc: 'We provide maintenance and marketing support to keep your digital assets performing and growing at their peak.',
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
                    <h1>Elite SME Digital Services</h1>
                    <p>Home | Our Services</p>
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
                                    <Link to={`/service/${card.id}`} className="svc-read-btn">Read More</Link>
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
                        <h2>How We Work</h2>
                        <p>Our team is dedicated to delivering professional Web & AI solutions designed to scale<br />your business in the most efficient way possible.</p>
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
