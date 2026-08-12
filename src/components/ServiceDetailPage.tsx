import { useParams, Link } from 'react-router-dom';
import Sponsors from './Sponsors';
import { servicesData } from '../data/servicesData';
import './ServiceDetailPage.css';

export default function ServiceDetailPage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  if (!service) {
    return (
      <div className="service-not-found">
        <div className="not-found-inner">
          <h2>Service Not Found</h2>
          <p>The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/services" className="btn-primary">View All Services</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="service-detail-page">
      {/* ── Hero section ── */}
      <section className="service-hero" style={{ backgroundImage: `url(${service.heroImg})` }}>
        <div className="service-hero-overlay"></div>
        <div className="service-hero-content">
          <span className="service-label-top">Elite SME Solutions</span>
          <h1>{service.title}</h1>
          <div className="service-quick-stats">
             {Object.entries(service.stats).map(([key, value]) => (
               <div className="stat-pill" key={key}>
                 <span className="stat-value">{value as string}</span>
                 <span className="stat-key">{key.toUpperCase()}</span>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* ── Main content ── */}
      <section className="service-main-content">
        <div className="section-inner service-inner">
          
          <div className="service-content-grid">
            <div className="service-text-block">
              <div className="content-label blue-label">THE CHALLENGE</div>
              <h2 className="content-heading">What SMEs Are Facing</h2>
              <p className="content-text">{service.challenge}</p>
            </div>

            <div className="service-text-block">
              <div className="content-label purple-label">OUR SCIENTIFIC SOLUTION</div>
              <h2 className="content-heading">The DAQS Approach</h2>
              <p className="content-text">{service.solution}</p>
            </div>

            <div className="service-text-block full-width">
              <div className="content-label green-label">BUSINESS IMPACT</div>
              <h2 className="content-heading">The Measurable Result</h2>
              <p className="content-text">{service.impact}</p>
            </div>
          </div>

          <div className="service-features-grid">
            <div className="features-header">
               <span className="blue-label">CORE FEATURES</span>
               <h2>Deliverables for your SME</h2>
            </div>
            <div className="features-list">
               {service.keyFeatures.map((feat, i) => (
                 <div className="feature-item-detail" key={i}>
                    <div className="feature-dot"></div>
                    <span>{feat}</span>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA section ── */}
      <section className="service-cta">
        <div className="section-inner cta-card-detail">
           <h2>Transform Your SME Today</h2>
           <p>Ready to integrate these {service.title} capabilities into your business model?</p>
           <Link to="/contact" className="btn-primary">Book Your Free Consultancy</Link>
        </div>
      </section>

      <Sponsors />
    </div>
  );
}
