import { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProjectsPage.css';
import smeDesignImg from '../assets/sme_design.png';
import strategyImg from '../assets/strategy.png';
import cloudAiImg from '../assets/cloud_ai.png';
import trvStudioImg from '../assets/trv_studio_mockup.jpg';
import ksDigitalImg from '../assets/ks_digital_mockup.jpg';
import ksAiAutoImg from '../assets/ks_ai_automation.jpg';
import clearspaceImg from '../assets/clearspace_mockup.jpg';
import brand45Img from '../assets/brand45_mockup.jpg';

interface ProjectItem {
  id: string;
  title: string;
  category: 'web' | 'ai' | 'marketing';
  categoryLabel: string;
  client: string;
  industry: string;
  heroImg: string;
  summary: string;
  metrics: string[];
  websiteUrl?: string;
}

const projectsList: ProjectItem[] = [
  {
    id: 'trv-studio',
    title: 'TRV Studio - Brand & Web Design Platform',
    category: 'web',
    categoryLabel: 'Web Development & Graphic UI',
    client: 'TRV Studio (trvstudio.com)',
    industry: 'Brand Identity & Design',
    heroImg: trvStudioImg,
    summary: 'Full dark-themed web platform for trvstudio.com featuring interactive service cards, mobile responsiveness, and high-converting client booking funnels.',
    metrics: ['+380% Qualified Leads', '1.1s Mobile Speed', 'trvstudio.com'],
    websiteUrl: 'https://trvstudio.com'
  },
  {
    id: 'ks-digital',
    title: 'K.S Digital Innovations - AEC Software Marketplace',
    category: 'web',
    categoryLabel: 'Web Dev & E-Commerce Marketplace',
    client: 'K.S Digital Innovations (ksdigital.tech)',
    industry: 'Construction Software & Autodesk Plugins',
    heroImg: ksDigitalImg,
    summary: 'Full e-commerce software marketplace for Autodesk plugins with dynamic multi-currency pricing (NGN/USD), instant checkout, and license key delivery.',
    metrics: ['+520% Online Plugin Sales', '2,000+ AEC Users', 'ksdigital.tech'],
    websiteUrl: 'https://studio.ksdigital.tech'
  },
  {
    id: 'clearspace',
    title: 'ClearSpace Property Services - Logo & Booking Platform',
    category: 'web',
    categoryLabel: 'Web Development & Logo Branding',
    client: 'ClearSpace Property Services',
    industry: 'Property Management & Waste Clearance',
    heroImg: clearspaceImg,
    summary: 'Professional brand logo design and high-performance service showcase and booking platform built for a waste clearance company based in the UK.',
    metrics: ['+450% Quote Bookings', '0.9s Loading Speed', 'clearspacepropertyservice.netlify.app'],
    websiteUrl: 'https://clearspacepropertyservice.netlify.app'
  },
  {
    id: 'ks-ai-automation',
    title: 'K.S Digital - AI Email & Chatbot Automation',
    category: 'ai',
    categoryLabel: 'AI Automation & Workflows',
    client: 'K.S Digital Innovations',
    industry: 'AI Automation & Workflows',
    heroImg: ksAiAutoImg,
    summary: 'Custom n8n AI email follow-up integration and context-aware client support chatbot to automate operations for Autodesk plugins.',
    metrics: ['Gmail & n8n Pipeline', 'Instant Support Bot', '85% Cost Savings'],
    websiteUrl: 'https://studio.ksdigital.tech'
  },
  {
    id: 'brand-45',
    title: 'Brand 45 - Men’s Fashion E-Commerce Store',
    category: 'web',
    categoryLabel: 'Web Dev & E-Commerce Store',
    client: 'Brand 45',
    industry: 'Fashion & Tailoring Retail',
    heroImg: brand45Img,
    summary: 'Luxury digital catalog and custom fit parameter checkout system for a premium men’s kaftan and custom tailoring brand.',
    metrics: ['+320% Online Orders', '70% Return Reduction', 'brandforty5ive.com'],
    websiteUrl: 'https://brandforty5ive.com'
  },
  {
    id: 'smart-crm',
    title: 'AI Automated Workflow & Document Processing',
    category: 'ai',
    categoryLabel: 'AI Automation & Workflows',
    client: 'Apex Financial',
    industry: 'Financial Services',
    heroImg: cloudAiImg,
    summary: 'Automated document extraction and contract auditing engine that processes thousands of invoices and client forms instantly.',
    metrics: ['99.4% Extraction Accuracy', '85% Time Savings', '10x Processing Speed']
  },
  {
    id: 'brand-identity',
    title: 'SME Portal & Visual Graphic Rebrand',
    category: 'web',
    categoryLabel: 'Web Development & Graphic Design',
    client: 'Kora Healthcare',
    industry: 'Healthcare & Wellness',
    heroImg: smeDesignImg,
    summary: 'Complete brand UI/UX overhaul and secure client web portal enabling patients to schedule consultations and view digital records.',
    metrics: ['+320% Online Bookings', '100% Mobile Friendly', '4.9/5 User Rating']
  },
  {
    id: 'performance-seo',
    title: 'Omnichannel SEO & Performance Growth Engine',
    category: 'marketing',
    categoryLabel: 'Digital Marketing & Growth',
    client: 'Novus Commercial',
    industry: 'Real Estate & Property',
    heroImg: strategyImg,
    summary: 'Technical SEO optimization, content architecture, and hyper-targeted search ads to dominate organic commercial real estate queries.',
    metrics: ['#1 Google Rank for 18 Keywords', '+410% Organic Traffic', '3.8x ROI']
  }
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'web' | 'ai' | 'marketing'>('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === activeFilter);

  return (
    <div className="projects-page">
      {/* ── 1. Hero Section ── */}
      <section className="projects-hero">
        <div className="projects-hero-overlay"></div>
        <div className="projects-hero-content">
          <span className="hero-badge">OUR PORTFOLIO & CASE STUDIES</span>
          <h1>Engineered Solutions. Proven Results.</h1>
          <p>Explore how DAQS Web Agency builds high-performance web applications, deploys custom AI automations, and drives measurable growth for clients.</p>
          <div className="hero-breadcrumbs">
            <Link to="/">Home</Link> <span>/</span> <span className="active">Projects</span>
          </div>
        </div>
      </section>

      {/* ── 2. Projects Showcase Grid & Filters ── */}
      <section className="projects-grid-section section-inner">
        {/* Filter Buttons */}
        <div className="projects-filter-bar">
          <button
            className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
            onClick={() => setActiveFilter('all')}
          >
            All Projects ({projectsList.length})
          </button>
          <button
            className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
            onClick={() => setActiveFilter('web')}
          >
            Web Dev & Graphic UI
          </button>
          <button
            className={`filter-btn ${activeFilter === 'ai' ? 'active' : ''}`}
            onClick={() => setActiveFilter('ai')}
          >
            AI Automations & Chatbots
          </button>
          <button
            className={`filter-btn ${activeFilter === 'marketing' ? 'active' : ''}`}
            onClick={() => setActiveFilter('marketing')}
          >
            Digital Marketing & SEO
          </button>
        </div>

        {/* Projects Cards Grid */}
        <div className="projects-cards-grid">
          {filteredProjects.map((proj) => (
            <div className="projects-card-item" key={proj.id}>
              <div className="card-img-wrap">
                <img src={proj.heroImg} alt={proj.title} className="card-img" loading="lazy" decoding="async" />
                <span className="card-cat-badge">{proj.categoryLabel}</span>
                <div className="card-img-hover-overlay">
                  <Link to={`/project/${proj.id}`} className="hover-view-btn">
                    View Case Study &rarr;
                  </Link>
                </div>
              </div>

              <div className="card-body">
                <span className="card-client-tag">{proj.client} • {proj.industry}</span>
                <h3 className="card-title">
                  <Link to={`/project/${proj.id}`}>{proj.title}</Link>
                </h3>
                <p className="card-summary">{proj.summary}</p>

                <div className="card-metrics-row">
                  {proj.metrics.map((metric, idx) => (
                    <span className="metric-chip" key={idx}>⚡ {metric}</span>
                  ))}
                </div>

                <div className="card-footer" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to={`/project/${proj.id}`} className="card-read-link">
                    Read Case Study <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                  {proj.websiteUrl && (
                    <a href={proj.websiteUrl} target="_blank" rel="noopener noreferrer" className="card-website-link">
                      Visit Site <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── 3. Stats Banner ── */}
      <section className="projects-stats-banner">
        <div className="section-inner stats-banner-inner">
          <div className="stat-box">
            <h3>250+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat-box">
            <h3>99.9%</h3>
            <p>Uptime & Speed</p>
          </div>
          <div className="stat-box">
            <h3>85%</h3>
            <p>Avg. Time Saved via AI</p>
          </div>
          <div className="stat-box">
            <h3>98%</h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </section>

      {/* ── 4. CTA Section ── */}
      <section className="projects-cta-section">
        <div className="section-inner projects-cta-inner">
          <h2>Ready To Build Your Next Web & AI Project?</h2>
          <p>Partner with DAQS Web Agency to build high-performance web platforms, automate your daily operations, and scale your brand revenue.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Book A Free Consultation</Link>
            <a href="https://wa.me/2347038904187" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              WhatsApp Us &rarr;
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
