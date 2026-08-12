import { useParams, Link } from 'react-router-dom';
import Sponsors from './Sponsors';
import './ProjectDetailPage.css';
import ksAiAutoImg from '../assets/ks_ai_automation.jpg';
import trvStudioImg from '../assets/trv_studio_mockup.jpg';
import ksDigitalImg from '../assets/ks_digital_mockup.jpg';
import clearspaceImg from '../assets/clearspace_mockup.jpg';
import brand45Img from '../assets/brand45_mockup.jpg';
import cloudAiImg from '../assets/cloud_ai.png';
import smeDesignImg from '../assets/sme_design.png';
import strategyImg from '../assets/strategy.png';

const projectsData: Record<string, any> = {
  'ks-digital': {
    title: 'K.S Digital Innovations - AEC Software Store',
    client: 'K.S Digital Innovations (ksdigital.tech)',
    industry: 'AEC Construction Software & Autodesk Developer',
    heroImg: ksDigitalImg,
    stats: { sales: '+520%', users: '2,000+', conversion: 'Direct Web' },
    challenge: 'K.S Digital Innovations, an Autodesk Authorized Developer, needed an e-commerce platform and web software marketplace to showcase smart, affordable AI-powered construction plugins with multi-currency pricing (NGN/USD), enabling architects, engineers, and construction experts worldwide to purchase and download tools directly.',
    solution: 'DAQS Web Agency engineered a high-performance web software store for studio.ksdigital.tech featuring instant product search, dynamic multi-currency converter, user account portals, automated license key delivery, and seamless payment gateway integration.',
    result: 'Within months of launch, K.S Digital Innovations generated a 520% surge in direct online plugin purchases, empowering over 2,000+ AEC professionals globally without third-party marketplace fee overheads.'
  },
  'trv-studio': {
    title: 'TRV Studio - Brand & Web Design Platform',
    client: 'TRV Studio (trvstudio.com)',
    industry: 'Brand Design & Identity',
    heroImg: trvStudioImg,
    stats: { leads: '+380%', speed: '1.1s', status: 'Top Rated' },
    challenge: 'TRV Studio needed a high-converting, modern web platform to showcase their premium brand identity, logo design, packaging, printing, and CAC setup services to 7 & 8-figure D2C brands looking to build trust and scale revenue.',
    solution: 'DAQS Web Agency engineered a custom dark-mode web application for trvstudio.com featuring interactive service cards (Logo Design, Web Dev, CAC Setup, Printing, Packaging), seamless mobile responsiveness, and direct WhatsApp lead conversion hooks.',
    result: 'TRV Studio experienced a 380% increase in high-paying client inquiries, establishing trvstudio.com as a premier brand design hub for growing D2C brands across Nigeria and internationally.'
  },
  'clearspace': {
    title: 'ClearSpace Property Services - Logo & Booking Website',
    client: 'ClearSpace Property Services (clearspacepropertyservice.netlify.app)',
    industry: 'Property Management & Waste Clearance',
    heroImg: clearspaceImg,
    stats: { bookings: '+450%', bounceRate: '-35%', loading: '0.9s' },
    challenge: 'ClearSpace Property Services, a waste clearance company in the UK, needed a professional brand logo and an easy-to-use booking website so that commercial and residential clients could view service areas, pricing, and book quotes online.',
    solution: 'DAQS Web Agency designed a professional modern logo and built a high-performance service showcase and booking platform, featuring interactive service listings, clear coverage area maps, pricing guides, transparent customer review modules, and a conversion-oriented quote form.',
    result: 'ClearSpace saw a 450% surge in online quote submissions and bookings. Mobile visitors now schedule waste clearance services within seconds, backed by a fast, SEO-optimized loading speed of under 1 second.'
  },
  'ks-ai-automation': {
    title: 'K.S Digital - AI Email & Chatbot Automation',
    client: 'K.S Digital Innovations',
    industry: 'AI Automation & Workflows',
    heroImg: ksAiAutoImg,
    stats: { responseTime: 'Instant', followUps: 'Automated (n8n)', accuracy: '98% Context' },
    challenge: 'K.S Digital Innovations wanted to eliminate the manual overhead of following up on client emails and answering repeated product operations queries. They needed an AI follow-up pipeline and an intelligent chatbot with full context of their operations, Revit plugins, and Autodesk tools.',
    solution: 'DAQS Web Agency designed and deployed an AI email follow-up engine using n8n workflows that triggers on incoming Gmail queries, analyzes intent, draft replies using custom LLMs, and flags high-value threads. Additionally, we built a context-aware AI chatbot widget integrated on their website to answer client technical operational inquiries.',
    result: 'The AI email follow-up automation handles client follow-ups within 30 seconds. The chatbot resolves 85% of customer support queries instantly, reducing manual support tickets to almost zero.'
  },
  'brand-45': {
    title: 'Brand 45 - Men’s Fashion E-Commerce Platform',
    client: 'Brand 45 (brandforty5ive.com)',
    industry: 'Fashion, Tailoring & Retail',
    heroImg: brand45Img,
    stats: { revenue: '+320%', checkouts: '+280%', loading: '1.2s' },
    challenge: 'Brand 45, a premium men’s fashion brand specializing in custom kaftans and refined wear, needed a modern e-commerce storefront to showcase their collections, handle online sizing customization, and capture direct orders globally.',
    solution: 'DAQS Web Agency engineered a high-converting e-commerce web platform for brandforty5ive.com featuring a minimalist luxury interface, catalog filters, customized fit parameter selectors, and an optimized checkout pipeline with WhatsApp ordering fallback.',
    result: 'Brand 45 generated a 320% increase in direct-to-consumer online clothing orders. Sizing personalization decreased fit returns by 70%, establishing their digital brand presence across Nigeria and internationally.'
  },
  'smart-crm': {
    title: 'AI Automated Workflow & Document Processing',
    client: 'Apex Financial',
    industry: 'Financial Services',
    heroImg: cloudAiImg,
    stats: { accuracy: '99.4%', savings: '85%', speed: '10x Faster' },
    challenge: 'Apex Financial struggled with manual overhead from auditing, processing, and indexing thousands of invoices, receipts, and contract documents weekly. The process was error-prone and caused critical operational delays.',
    solution: 'DAQS Web Agency designed a custom AI automated document processing pipeline. We integrated advanced OCR and intent-classification LLMs to extract metadata, flag discrepancies, and sync data directly into their central CRM database.',
    result: 'The system achieves 99.4% metadata extraction accuracy. Processing times were reduced by 85%, freeing the operations team to focus on high-value account audits instead of data entry.'
  },
  'brand-identity': {
    title: 'SME Portal & Visual Graphic Rebrand',
    client: 'Kora Healthcare',
    industry: 'Healthcare & Wellness',
    heroImg: smeDesignImg,
    stats: { bookings: '+320%', bounceRate: '-45%', satisfaction: '4.9/5' },
    challenge: 'Kora Healthcare needed to modernize its visual identity and offer clients a secure digital booking portal. The existing interface felt cold and lacked trust hooks, resulting in high bounce rates and low conversion.',
    solution: 'We orchestrated a comprehensive graphic rebrand and built a secure, warm, and responsive SME portal. The platform enables clients to schedule consultations, read provider bios, and securely access wellness materials.',
    result: 'Kora Healthcare experienced a 320% increase in online bookings. The new visual identity boosted trust, reducing mobile bounce rates by 45%.'
  },
  'performance-seo': {
    title: 'Omnichannel SEO & Performance Growth Engine',
    client: 'Novus Commercial',
    industry: 'Real Estate & Property',
    heroImg: strategyImg,
    stats: { rankings: '#1 (18 Keywords)', traffic: '+410%', roi: '3.8x' },
    challenge: 'Novus Commercial wanted to dominate organic search results for commercial real estate queries but faced high CPC costs and weak organic search visibility in competitive regions.',
    solution: 'We deployed an omnichannel performance SEO program. By auditing technical structure, optimizing keyword mapping, and running targeted search advertising, we captured high-intent commercial property search queries.',
    result: 'Novus Commercial reached Google #1 ranking for 18 primary keywords. Organic traffic surged by 410% within 6 months, delivering a 3.8x return on ad spend (ROI).'
  }
};

export default function ProjectDetailPage() {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectsData[projectId] : null;

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project Not Found</h2>
        <Link to="/" className="btn-primary">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      {/* ── Hero section ── */}
      <section className="project-hero" style={{ backgroundImage: `url(${project.heroImg})` }}>
        <div className="project-hero-overlay"></div>
        <div className="project-hero-content">
          <span className="project-client-label">{project.client} | {project.industry}</span>
          <h1>{project.title}</h1>
          <div className="project-quick-stats">
             {Object.entries(project.stats).map(([key, value]) => (
               <div className="stat-pill" key={key}>
                 <span className="stat-value">{value as string}</span>
                 <span className="stat-key">{key.toUpperCase()}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── Main Case Study Content ── */}
      <section className="case-study-section">
        <div className="section-inner case-study-inner">
          
          <div className="case-study-grid">
            <div className="case-study-content-block">
              <div className="content-label">THE CHALLENGE</div>
              <h2 className="content-heading">Understanding the Problem</h2>
              <p className="content-text">{project.challenge}</p>
            </div>

            <div className="case-study-content-block">
              <div className="content-label blue-label">OUR SOLUTION</div>
              <h2 className="content-heading">Strategy & Implementation</h2>
              <p className="content-text">{project.solution}</p>
            </div>

            <div className="case-study-content-block full-width">
              <div className="content-label green-label">THE RESULTS</div>
              <h2 className="content-heading">Measured Impact</h2>
              <p className="content-text">{project.result}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section className="project-cta-section">
         <div className="section-inner cta-box">
             <h2>Ready to achieve similar success for your SME?</h2>
             <p>Let's discuss how our Web & AI expertise can transform your business goals into reality.</p>
             <Link to="/contact" className="btn-primary">Start Your Project</Link>
         </div>
      </section>

      <Sponsors />
    </div>
  );
}
