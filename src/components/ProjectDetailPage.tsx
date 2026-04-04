import { useParams, Link } from 'react-router-dom';
import Sponsors from './Sponsors';
import './ProjectDetailPage.css';
import webEngImg from '../assets/web_engineering.png';
import aiAutoImg from '../assets/ai_automation.png';
import marketingImg from '../assets/marketing.png';

const projectsData: Record<string, any> = {
  'ecommerce': {
    title: 'E-Commerce Web Application',
    client: 'EcoRetail SME',
    industry: 'Consumer Goods',
    heroImg: webEngImg,
    stats: { roi: '900%', increase: '12x', time: '4 Months' },
    challenge: 'EcoRetail, a growing SME, struggled with a legacy platform that was slow, non-responsive, and failed to convert mobile traffic. Their cart abandonment rate was over 75%, and their backend systems were not integrated with physical inventory.',
    solution: 'We architected a custom, headless e-commerce solution using React and a high-performance backend. We implemented a mobile-first UI/UX, one-click checkout, and a real-time inventory synchronization engine to ensure zero overselling across channels.',
    result: 'Within the first quarter of launch, EcoRetail saw a 900% increase in mobile conversions. The automated inventory system saved the team 20 hours of manual work per week, and the overall load time dropped from 8 seconds to under 1.5 seconds.'
  },
  'ai-support': {
    title: 'AI Customer Support Assistant',
    client: 'GlobalTech Solutions',
    industry: 'SaaS / Tech',
    heroImg: aiAutoImg,
    stats: { automation: '80%', supportCost: '-45%', satisfaction: '+30%' },
    challenge: 'GlobalTech was overwhelmed by a 300% surge in support tickets. Their human team was bogged down by repetitive queries, leading to 48-hour response times and declining customer satisfaction scores.',
    solution: 'We developed a custom AI Customer Support Assistant trained on GlobalTech’s unique knowledge base. We integrated it directly into their existing CRM and Slack channels, allowing for instant, multi-lingual query resolution and smart ticket escalation.',
    result: 'The AI assistant now handles 80% of all initial inquiries with 0ms wait time. Support costs were reduced by 45%, and the human team is now freed up to focus on high-value complex enterprise clients.'
  },
  'marketing': {
    title: 'Global Digital Marketing Campaign',
    client: 'Vanguard Logistics',
    industry: 'Logistics / SME',
    heroImg: marketingImg,
    stats: { leads: '150%', reach: '2M+', cac: '-40%' },
    challenge: 'Vanguard Logistics wanted to expand into international markets but lacked a data-driven marketing strategy. Their generic ad campaigns were expensive and yielded low-quality leads that didn\'t convert.',
    solution: 'We implemented an AI-driven multi-channel marketing engine. By leveraging predictive analytics to identify high-intent SME partners and optimizing ad spend across LinkedIn and Google Search in real-time, we matched their services to specific regional needs.',
    result: 'The campaign reached over 2 million targeted decision-makers. We achieved a 150% increase in qualified international leads while simultaneously reducing the Cost Per Acquisition (CAC) by 40%.'
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
