import smeDesignImg from '../assets/sme_design.png';
import webEngImg from '../assets/web_engineering.png';
import cloudAiImg from '../assets/cloud_ai.png';
import aiAutoImg from '../assets/ai_automation.png';
import marketingImg from '../assets/marketing.png';
import strategyImg from '../assets/strategy.png';

export interface ServiceData {
  id: string;
  title: string;
  heroImg: string;
  stats: Record<string, string>;
  challenge: string;
  solution: string;
  impact: string;
  keyFeatures: string[];
}

export const servicesData: Record<string, ServiceData> = {
  'sme-design': {
    id: 'sme-design',
    title: 'SME Digital Product Design',
    heroImg: smeDesignImg,
    stats: { engagement: '+150%', conversion: '+85%', accessibility: '100%' },
    challenge: 'Many SMEs operate with outdated, static websites that fail to communicate their modern value proposition. These businesses often struggle with high bounce rates and low digital engagement because their user interfaces are not intuitive or optimized for modern mobile-first consumers. A generic template is no longer enough to compete in a crowded digital marketplace.',
    solution: 'Our Digital Product Design service goes beyond aesthetics. We conduct deep-dive audits of your target SME audience to create tailor-made, high-conversion user experiences. Using advanced UI/UX principles, glassmorphism design trends, and rapid prototyping, we build digital products that are as functional as they are beautiful. We focus on clear calls-to-action, blazing-fast navigation, and brand storytelling that resonates with your specific customer base.',
    impact: 'By implementing our custom SME product design, our clients have seen an average of 150% increase in user session duration and an 85% boost in lead generation through the website. We transform your digital presence from a simple brochure into a powerful business growth engine.',
    keyFeatures: ['Custom UI/UX Prototypes', 'Conversion-First Design', 'Mobile-Responsive Architecture', 'Brand Identity Integration', 'Accessibility Compliance (WCAG)']
  },
  'web-engineering': {
    id: 'web-engineering',
    title: 'Enterprise-Grade Web Engineering',
    heroImg: webEngImg,
    stats: { loadTime: '-70%', uptime: '99.9%', security: 'Level 1' },
    challenge: 'As SMEs scale, their technical debt often grows with them. Legacy codebases, slow page loads, and fragile backend systems can lead to catastrophic crashes during high-traffic periods. SMEs need enterprise-level reliability without the enterprise-level overhead or complexity.',
    solution: 'We bring elite engineering standards to the SME sector. Our team builds secure, high-performance web applications using modern stacks like React, Node.js, and high-efficiency database architectures. We focus on clean code, automated testing, and CI/CD pipelines that ensure your application can handle thousands of concurrent users with zero lag. Our "Enterprise-Grade" approach means building for the future, ensuring your code remains maintainable and scalable for years to come.',
    impact: 'Clients transitioning to our engineered solutions experience a 70% reduction in page load times and near-perfect uptime. This technical stability directly correlates to higher search engine rankings and improved customer trust.',
    keyFeatures: ['React/Next.js Development', 'Scalable Backend API Design', 'Automated Security Audits', 'CI/CD Pipeline Setup', 'Database Optimization']
  },
  'cloud-ai': {
    id: 'cloud-ai',
    title: 'AI-Powered Cloud Solutions',
    heroImg: cloudAiImg,
    stats: { dataSpeed: '20x', costReduction: '40%', scalability: 'Global' },
    challenge: 'Modern SMEs generate vast amounts of data but often lack the infrastructure to process it. Traditional cloud setups are frequently unoptimized, leading to high monthly costs and slow data processing speeds that hinder AI adoption and real-time decision-making.',
    solution: 'We architect cloud environments specifically built for the AI era. By leveraging advanced cloud-native technologies (AWS/GCP/Azure), we create high-performance data lakes and elastic computing clusters. We integrate AI-powered monitoring to optimize resource allocation, ensuring you only pay for what you use. Our solutions allow SMEs to run complex AI models and process massive datasets with the speed and efficiency of a global tech giant.',
    impact: 'Our cloud transformations have enabled SMEs to reduce infrastructure costs by up to 40% while increasing data processing speeds by 20x. This allows for real-time business intelligence that was previously only available to billion-dollar corporations.',
    keyFeatures: ['AI-Optimized Infrastructure', 'Cost-Efficient Cloud Managed Services', 'Data Lake Architecture', 'Serverless Computing', 'Multi-Region High Availability']
  },
  'ai-automation': {
    id: 'ai-automation',
    title: 'Custom AI Agents & Automation',
    heroImg: aiAutoImg,
    stats: { timeSaved: '60%', errorRate: '-95%', roi: '400%' },
    challenge: 'SME teams are often bogged down by repetitive, manual administrative tasks that drain creativity and productivity. From manual invoice processing to basic customer support, these "hidden costs" prevent small teams from focusing on high-value strategic growth.',
    solution: 'We deploy custom-trained AI Agents and automated workflows designed to handle your business\'s specific "busy work." Whether it\'s an AI chat assistant that understands your product catalog or an automated document processing engine that handles 1,000 files in seconds, we automate with precision. Our agents are integrated directly into your existing tools (Slack, CRM, Email), providing a seamless boost to your team\'s capabilities without requiring an overhaul of your current processes.',
    impact: 'Implementing custom AI automation typically saves SME teams over 60% of their time on manual tasks. With a 95% reduction in manual data entry errors and a massive return on investment, AI automation is the ultimate force multiplier for small teams.',
    keyFeatures: ['Natural Language AI Agents', 'Automated Workflow Engines', 'Intelligent Document Processing', 'Customer Support Bots', 'Predictive Task Automation']
  },
  'marketing': {
    id: 'marketing',
    title: 'Growth-Driven Digital Marketing',
    heroImg: marketingImg,
    stats: { leadQuality: '+200%', adROI: '5x', reach: '500k+' },
    challenge: 'Digital marketing for SMEs is often a "black hole" of wasted ad spend. Traditional agencies often apply generic strategies that might work for large retailers but fail to capture the specific high-intent leads that SMEs need to grow sustainably.',
    solution: 'Our marketing strategy is purely data-driven and AI-optimized. We perform granular keyword analysis and competitor benchmarking to ensure your brand appears exactly where your customers are searching. By combining elite SEO practices with predictive ad-bid management, we maximize every dollar of your budget. We focus on "Lead Quality" over "Lead Quantity," ensuring that your sales team spends their time talking to decision-makers, not window shoppers.',
    impact: 'SMEs partnering with our marketing team consistently see a 200% increase in qualified lead quality and an average of 5x ROI on their ad spend. We provide transparent, real-time dashboards so you can see exactly how your growth is happening.',
    keyFeatures: ['AI-Driven Keyword Targeting', 'Conversion Rate Optimization (CRO)', 'Content Marketing Strategy', 'Performance Ad Management', 'Technical SEO Audits']
  },
  'strategy': {
    id: 'strategy',
    title: 'Tech Transformation Strategy',
    heroImg: strategyImg,
    stats: { efficiency: '+45%', marketShare: '+15%', futureProof: '100%' },
    challenge: 'In a rapidly changing tech world, many SMEs suffer from "analysis paralysis." They know they need to modernize and adopt AI but don\'t know where to start, leading to missed opportunities and a loss of market share to more agile competitors.',
    solution: 'We act as your Fractional CTO and Strategic Tech Partner. Our Tech Transformation Strategy is a comprehensive roadmap that aligns your business goals with the latest in web and AI technology. We don\'t just recommend tools; we build a holistic digital modernization plan that includes team training, legacy system migration, and future-proof architectural advice. We ensure that your digital transition is smooth, profitable, and strategically sound.',
    impact: 'A clear tech strategy has helped our SME clients increase operational efficiency by 45% and capture up to 15% more market share in their respective industries within the first year of modernization.',
    keyFeatures: ['Fractional CTO Services', 'Digital Modernization Roadmaps', 'AI Readiness Assessments', 'Technical Feasibility Studies', 'Vendor Ecosystem Management']
  }
};
