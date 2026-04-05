import { useState } from 'react';
import { Link } from 'react-router-dom';
import Sponsors from './Sponsors';
import './LandingPage.css';
import webEngImg from '../assets/web_engineering.png';
import aiAutoImg from '../assets/ai_automation.png';
import marketingImg from '../assets/marketing.png';

export default function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Jenkins',
      role: 'Founder of EcoStore',
      text: 'The custom e-commerce solution built by DAQS transformed our SME. Our sales doubled within months thanks to the intuitive design and AI-driven recommendations.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/ed85b22c835aca1b0ff80954f150b0bd0b69115f?width=120'
    },
    {
      name: 'Michael Chen',
      role: 'CTO of NexaSoft',
      text: 'Implementing their AI automation workflow saved us over 40 hours of manual data entry every week. Their engineering team is top-tier and highly responsive.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/ce013a97cb3440cb1bbbc759b15d42ab5f4a5634?width=120'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Marketing Director at BloomWell',
      text: "Our digital marketing ROI skyrocketed by 150% after DAQS's team took over. Their data-driven approach and AI insights are truly future-ready.",
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/722a8fe09ba0ee43ab03f980f1c32f3a027f180e?width=120'
    },
    {
      name: 'David Thompson',
      role: 'CEO of LogiTrack',
      text: 'The high-performance web dashboard they built for our fleet management has become indispensable. Seamless, fast, and secure—exactly what we needed.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/de1a31ed0fb9e94f0d12d567483d881d5b833c7b?width=120'
    },
    {
      name: 'Amina Yusuf',
      role: 'Owner of UrbanCraft',
      text: 'As an SME, we needed a partner who understood our vision. DAQS delivered a stunning brand presence that feels premium and builds instant trust.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/51053c8a856528b0ab3b6c1dde3716c704f1b302?width=120'
    },
    {
      name: 'James Wilson',
      role: 'Tech Lead at EduFlow',
      text: 'Their web engineering practices are impeccable. The scalability of the platform they built allows us to grow without any technical bottlenecks.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/ed85b22c835aca1b0ff80954f150b0bd0b69115f?width=120'
    },
    {
      name: 'Sophia Lee',
      role: 'Operations Manager at FinPulse',
      text: 'The AI customer support bot they integrated into our CRM has reduced response times by 80%. Exceptional work from a truly professional team.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/722a8fe09ba0ee43ab03f980f1c32f3a027f180e?width=120'
    },
    {
      name: 'Robert Miller',
      role: 'Founder of GreenGrid',
      text: "DAQS's digital strategy helped us expand into three new markets last year. Their insights into SME growth and AI automation are invaluable.",
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/ce013a97cb3440cb1bbbc759b15d42ab5f4a5634?width=120'
    },
    {
      name: 'Isabella Garcia',
      role: 'Creative Director at StudioX',
      text: 'Collaborating with DAQS was a breeze. They perfectly captured our brand essence in the new web portal, delivering a world-class user experience.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/de1a31ed0fb9e94f0d12d567483d881d5b833c7b?width=120'
    },
    {
      name: 'Liam O\'Connor',
      role: 'MD of HealthHive',
      text: 'Reliable, professional, and innovative. DAQS is the best tech partner for any SME looking to scale rapidly through web and AI technology.',
      img: 'https://api.builder.io/api/v1/image/assets/TEMP/51053c8a856528b0ab3b6c1dde3716c704f1b302?width=120'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      {/* ── Vertical Left Nav ── */}
      <div className="side-nav">
        <button className="side-nav-arrow">&#8593;</button>
        <div className="side-nav-dots">
          <span className="dot dot-1">1</span>
          <span className="dot dot-2 active">2</span>
          <span className="dot dot-3">3</span>
        </div>
        <button className="side-nav-arrow">&#8595;</button>
      </div>


      {/* ── Hero ── */}
      <section className="hero-section">
        {/* Background Shapes */}
        <div className="hero-bg">
          <div className="bg-circle-left"></div>
          <div className="bg-circle-right"></div>
          <div className="bg-contrast-blue"></div>
          <svg className="bg-curve-line" viewBox="0 0 1000 800" preserveAspectRatio="none">
            <path d="M200,0 C400,300 600,600 800,800" fill="none" stroke="#2563eb" strokeWidth="1" strokeOpacity="0.4" />
          </svg>
        </div>

        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-icon">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M7 2v11h3v9l7-12h-4l4-8z" /></svg>
              </span>
              <span className="hero-badge-text">WELCOME TO DAQS WEB AGENCY</span>
            </div>
            <h1 className="hero-heading">
              We Build Ideas Driven<br />by the Future<span className="dot-accent">.</span>
            </h1>
            <p className="hero-subtext">
              We build high-performance web applications and leverage AI<br />
              to scale your brand online.
            </p>
            <div className="hero-cta-row">
              <Link to="/contact" className="btn-primary">Get Started</Link>
              <span className="hero-hotline">
                <a href="tel:+447442507562" style={{ color: 'inherit', textDecoration: 'none' }}>
                  <strong>Hotline: +44 7442 507562</strong>
                </a>
              </span>
            </div>
          </div>

          <div className="hero-images-container">
            {/* The collage from the image */}
            <div className="hero-img-main">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/2044da9d5657132d984ad54ae5f30db63872aca3?width=700" alt="Man using laptop" />
            </div>

            <div className="hero-img-secondary">
              <img src="https://api.builder.io/api/v1/image/assets/TEMP/33a45a16eb506518c2cf6eef5a10d6c9d3fb1dc3?width=632" alt="Team discussing" />
            </div>



            <div className="hero-chart-card">
              <div className="chart-header">
                <span className="chart-amount">$120,544</span>
                <span className="chart-sub">From $100,000</span>
              </div>
              <div className="chart-graph">
                {/* SVG curve for chart */}
                <svg viewBox="0 0 100 40" preserveAspectRatio="none">
                  <path d="M0,30 Q10,10 20,25 T40,15 T60,25 T80,5 T100,20 L100,40 L0,40 Z" fill="url(#chart-grad)" />
                  <path d="M0,30 Q10,10 20,25 T40,15 T60,25 T80,5 T100,20" fill="none" stroke="#8b5cf6" strokeWidth="1.5" />
                  <defs>
                    <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Chart vertical line / dot */}
                <div className="chart-overlay-line"></div>
              </div>
            </div>

            <div className="hero-avatars-card">
              <div className="avatar-stack">
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/ce013a97cb3440cb1bbbc759b15d42ab5f4a5634?width=100" alt="A1" className="av-img" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/de1a31ed0fb9e94f0d12d567483d881d5b833c7b?width=100" alt="A2" className="av-img" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/722a8fe09ba0ee43ab03f980f1c32f3a027f180e?width=100" alt="A3" className="av-img" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/51053c8a856528b0ab3b6c1dde3716c704f1b302?width=100" alt="A4" className="av-img" />
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/ce013a97cb3440cb1bbbc759b15d42ab5f4a5634?width=100" alt="A5" className="av-img" />
                <div className="avatar-plus">+</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="features-section">
        <div className="section-inner features-inner">
          <div className="section-header-centered features-header">
            <span className="section-label blue-label">OUR UNIQUE FEATURES</span>
            <h2 className="features-title">Discover Our Unique Features</h2>
          </div>
          <div className="features-grid">
            {[
              {
                title: 'Web Development',
                desc: 'Custom web apps built for performance and stunning user experiences.',
                svg: (
                  <svg width="40" height="40" viewBox="0 0 70 70" fill="none">
                    <path d="M68.8619 49.7088L67.5405 49.0507L37.7621 63.8817C36.053 64.7441 33.947 64.7441 32.2379 63.8817L2.45947 49.0507L1.13812 49.7088C0.440588 50.056 0 50.7661 0 51.543C0 52.3198 0.440588 53.0299 1.13812 53.3772L34.0793 69.7834C34.6588 70.0722 35.3412 70.0722 35.9207 69.7834L68.8619 53.3772C69.5594 53.0299 70 52.3198 70 51.543C70 50.7661 69.5594 50.056 68.8619 49.7088Z" fill="#1e1b4b" />
                    <path d="M68.8619 40.1384L67.5405 39.4803L37.7621 54.3113C36.053 55.1737 33.947 55.1737 32.2379 54.3113L2.45947 39.4803L1.13812 40.1384C0.440588 40.4856 0 41.1957 0 41.9726C0 42.7494 0.440588 43.4595 1.13812 43.8068L34.0793 60.213C34.6588 60.5018 35.3412 60.5018 35.9207 60.213L68.8619 43.8068C69.5594 43.4595 70 42.7494 70 41.9726C70 41.1957 69.5594 40.4856 68.8619 40.1384Z" fill="#1e1b4b" />
                    <path d="M35 12.3047C38.4057 12.3047 41.1765 15.0646 41.1765 18.457C41.1765 21.8494 38.4057 24.6094 35 24.6094C31.5943 24.6094 28.8235 21.8494 28.8235 18.457C28.8235 15.0646 31.5943 12.3047 35 12.3047Z" fill="#38bdf8" />
                    <path d="M16.8943 24.1335L21.0119 31.2376C21.5804 32.2185 22.8396 32.5546 23.8244 31.9882L25.5198 31.0131C26.5478 31.7896 27.6521 32.4294 28.8235 32.9272V34.8633C28.8235 35.9959 29.7453 36.9141 30.8823 36.9141H39.1176C40.2547 36.9141 41.1765 35.9959 41.1765 34.8633V32.9272C42.3479 32.4294 43.4522 31.7896 44.4802 31.0131L46.1756 31.9882C47.1602 32.5545 48.4194 32.2185 48.9879 31.2376L53.1056 24.1335C53.6741 23.1526 53.3367 21.8984 52.352 21.3321L50.6638 20.3611C50.744 19.7225 50.7843 19.0859 50.7843 18.457C50.7843 17.8281 50.744 17.1916 50.6639 16.5529L52.3522 15.582C53.3368 15.0157 53.6742 13.7614 53.1057 12.7806L48.9881 5.67643C48.4195 4.69561 47.1604 4.35941 46.1757 4.92584L44.4802 5.90078C43.4524 5.12449 42.3479 4.48451 41.1765 3.98672V2.05078C41.1765 0.918203 40.2547 0 39.1176 0H30.8823C29.7453 0 28.8235 0.918203 28.8235 2.05078V3.98672C27.6521 4.48451 26.5476 5.12449 25.5198 5.90078L23.8244 4.9257C22.8398 4.35941 21.5806 4.69547 21.0121 5.67629L16.8944 12.7805C16.3259 13.7613 16.6633 15.0155 17.648 15.5818L19.3362 16.5528C19.256 17.1916 19.2157 17.8281 19.2157 18.457C19.2157 19.0859 19.256 19.7225 19.3361 20.3611L17.6478 21.3321C16.6632 21.8984 16.3258 23.1526 16.8943 24.1335Z" fill="#38bdf8" />
                  </svg>
                ),
              },
              {
                title: 'AI Automation',
                desc: 'Streamline operations with customized AI-driven automation systems.',
                svg: (
                  <svg width="40" height="40" viewBox="0 0 66 65" fill="none">
                    <path d="M51.2354 54.1667C49.1002 54.1667 47.2686 55.4866 46.5106 57.353H42.0589V61.1765H46.5106C47.2686 63.0429 49.1002 64.3628 51.2354 64.3628C54.0464 64.3628 56.3334 62.0759 56.3334 59.2648C56.3334 56.4537 54.0464 54.1667 51.2354 54.1667Z" fill="#38bdf8" />
                    <path d="M19.1176 32.5C19.1176 39.879 25.1209 45.8823 32.5 45.8823C34.5513 45.8823 36.4959 45.4178 38.2353 44.5893V20.4106C36.4959 19.5822 34.5513 19.1176 32.5 19.1176C25.1209 19.1176 19.1176 25.1209 19.1176 32.5Z" fill="#1e1b4b" />
                    <path d="M36.3235 0H28.6765C27.6207 0 26.7647 0.855961 26.7647 1.91176V4.40025C23.1773 5.13105 19.7443 6.55327 16.6864 8.57541L14.9263 6.81544C14.1797 6.06883 12.9693 6.06883 12.2227 6.81544L6.81544 12.2227C6.06883 12.9692 6.06883 14.1797 6.81544 14.9263L8.57541 16.6864C6.55327 19.7443 5.13105 23.1773 4.40025 26.7647H1.91176C0.855961 26.7647 0 27.6207 0 28.6765V36.3235C0 37.3793 0.855961 38.2353 1.91176 38.2353H4.40025C5.13105 41.8227 6.55327 45.2557 8.57541 48.3137L6.81531 50.0738C6.06883 50.8204 6.06883 52.0308 6.81531 52.7773L12.2227 58.1847C12.9693 58.9312 14.1797 58.9312 14.9263 58.1847L16.6864 56.4246C19.7443 58.4467 23.1773 59.8688 26.7647 60.5998V63.0882C26.7647 64.144 27.6207 65 28.6765 65H36.3235C37.3793 65 38.2353 64.144 38.2353 63.0882V16.2783C36.4405 15.6418 34.5103 15.2941 32.5 15.2941C23.0127 15.2941 15.2941 23.0127 15.2941 32.5C15.2941 41.9873 23.0127 49.7059 32.5 49.7059C34.5103 49.7059 36.4405 49.3582 38.2353 48.7217V63.0882C38.2353 64.144 37.3793 65 36.3235 65Z" fill="#1e1b4b" />
                  </svg>
                ),
              },
              {
                title: 'Digital Marketing',
                desc: 'Data-driven campaigns to maximize ROI and scale your brand visibility.',
                svg: (
                  <svg width="40" height="40" viewBox="0 0 65 65" fill="none">
                    <path d="M26.7819 6.97352C34.4156 2.75694 43.7771 2.74996 51.4233 6.97352C52.3437 7.48197 53.5024 7.14808 54.011 6.2274C54.5196 5.30672 54.1854 4.14812 53.2649 3.63966C44.4864 -1.20928 33.7331 -1.21716 24.9404 3.63966C24.0199 4.14812 23.6857 5.30672 24.1943 6.2274C24.7026 7.14783 25.8611 7.48236 26.7819 6.97352Z" fill="#38bdf8" />
                    <path d="M10.5407 30.5948H1.647C0.737358 30.5948 0 31.4475 0 32.4992V63.0956C0 64.1473 0.737358 64.9998 1.647 64.9998H10.5407C11.4504 64.9998 12.1877 64.1473 12.1877 63.0956V32.4992C12.1877 31.4473 11.4504 30.5948 10.5407 30.5948Z" fill="#1e1b4b" />
                    <path d="M65.0013 45.7851C65.0013 47.287 64.1419 48.6569 62.7898 49.3107L36.7677 61.8882C35.314 62.5903 33.6763 62.8137 32.0894 62.5242L15.9965 59.598V36.7206L22.3074 35.5107C25.5562 34.8887 28.9167 35.7038 31.5181 37.7477L41.6415 45.7027L41.4041 46.0354C39.76 48.3371 36.7296 49.0899 34.2006 47.8242L31.8964 46.6727C30.9556 46.203 29.8118 46.5838 29.342 47.5246C28.871 48.4653 29.2532 49.6092 30.1939 50.0789L32.4969 51.2317C36.6763 53.3214 41.7761 52.0683 44.5031 48.2495L46.7006 45.2037C46.9814 44.8144 47.3988 44.5457 47.8693 44.451L60.3141 41.9474C62.7377 41.4599 65.0013 43.3134 65.0013 45.7851Z" fill="#1e1b4b" />
                    <path d="M39.3563 12.3057C43.7706 12.3057 47.3622 15.8972 47.3622 20.3117C47.3622 24.7262 43.7706 28.3175 39.3563 28.3175C34.9419 28.3175 31.3503 24.7261 31.3503 20.3116C31.3503 15.8971 34.9419 12.3057 39.3563 12.3057Z" fill="#38bdf8" />
                    <path d="M63.488 19.1818C58.1189 11.8944 48.9856 7.23523 39.3563 7.23523C29.7343 7.23523 20.0628 11.925 14.7167 19.1818C14.2228 19.8534 14.2228 20.77 14.7167 21.4416C20.0628 28.6984 29.7343 33.3881 39.3563 33.3881C48.9848 33.3881 58.1184 28.7296 63.488 21.4416C63.9818 20.7699 63.9818 19.8534 63.488 19.1818Z" fill="#38bdf8" />
                  </svg>
                ),
              },
              {
                title: 'AI Integration',
                desc: 'Seamlessly integrate advanced AI models into your workflows now.',
                svg: (
                  <svg width="40" height="40" viewBox="0 0 65 65" fill="none">
                    <path d="M65 43.9893C65 35.9233 60.3727 28.7246 53.4423 25.223C53.2271 40.6885 40.6885 53.2271 25.223 53.4423C28.7246 60.3727 35.9233 65 43.9893 65C47.7711 65 51.4488 63.9928 54.6801 62.0791L64.9083 64.9083L62.0791 54.6801C63.9928 51.4488 65 47.7711 65 43.9893Z" fill="#1e1b4b" />
                    <path d="M49.6387 24.8193C49.6387 11.1337 38.505 0 24.8193 0C11.1337 0 0 11.1337 0 24.8193C0 29.2796 1.18721 33.6222 3.44162 37.4348L0.0912476 49.5469L12.2039 46.1971C16.0164 48.4515 20.3591 49.6387 24.8193 49.6387C38.505 49.6387 49.6387 38.505 49.6387 24.8193ZM21.0107 19.043H17.2022C17.2022 14.8426 20.619 11.4258 24.8193 11.4258C29.0197 11.4258 32.4365 14.8426 32.4365 19.043C32.4365 21.1749 31.534 23.224 29.9595 24.6641L26.7236 27.6257V30.5957H22.915V25.9485L27.3882 21.8543C28.1876 21.1228 28.6279 20.1246 28.6279 19.043C28.6279 16.9428 26.9195 15.2344 24.8193 15.2344C22.7192 15.2344 21.0107 16.9428 21.0107 19.043ZM22.915 34.4043H26.7236V38.2129H22.915V34.4043Z" fill="#38bdf8" />
                  </svg>
                ),
              },
              {
                title: 'Growth Strategy',
                desc: 'Scale SMEs rapidly through intelligent marketing and analytics.',
                svg: (
                  <svg width="40" height="40" viewBox="0 0 70 70" fill="none">
                    <path d="M68.8619 49.7088L67.5405 49.0507L37.7621 63.8817C36.053 64.7441 33.947 64.7441 32.2379 63.8817L2.45947 49.0507L1.13812 49.7088C0.440588 50.056 0 50.7661 0 51.543C0 52.3198 0.440588 53.0299 1.13812 53.3772L34.0793 69.7834C34.6588 70.0722 35.3412 70.0722 35.9207 69.7834L68.8619 53.3772C69.5594 53.0299 70 52.3198 70 51.543C70 50.7661 69.5594 50.056 68.8619 49.7088Z" fill="#1e1b4b" />
                    <path d="M68.8619 40.1384L67.5405 39.4803L37.7621 54.3113C36.053 55.1737 33.947 55.1737 32.2379 54.3113L2.45947 39.4803L1.13812 40.1384C0.440588 40.4856 0 41.1957 0 41.9726C0 42.7494 0.440588 43.4595 1.13812 43.8068L34.0793 60.213C34.6588 60.5018 35.3412 60.5018 35.9207 60.213L68.8619 43.8068C69.5594 43.4595 70 42.7494 70 41.9726C70 41.1957 69.5594 40.4856 68.8619 40.1384Z" fill="#1e1b4b" />
                    <path d="M35 12.3047C38.4057 12.3047 41.1765 15.0646 41.1765 18.457C41.1765 21.8494 38.4057 24.6094 35 24.6094C31.5943 24.6094 28.8235 21.8494 28.8235 18.457C28.8235 15.0646 31.5943 12.3047 35 12.3047Z" fill="#38bdf8" />
                    <path d="M16.8943 24.1335L21.0119 31.2376C21.5804 32.2185 22.8396 32.5546 23.8244 31.9882L25.5198 31.0131C26.5478 31.7896 27.6521 32.4294 28.8235 32.9272V34.8633C28.8235 35.9959 29.7453 36.9141 30.8823 36.9141H39.1176C40.2547 36.9141 41.1765 35.9959 41.1765 34.8633V32.9272C42.3479 32.4294 43.4522 31.7896 44.4802 31.0131L46.1756 31.9882C47.1602 31.9882 48.4194 32.2185 48.9879 31.2376L53.1056 24.1335C53.6741 23.1526 53.3367 21.8984 52.352 21.3321L50.6638 20.3611C50.744 19.7225 50.7843 19.0859 50.7843 18.457C50.7843 17.8281 50.744 17.1916 50.6639 16.5529L52.3522 15.582C53.3368 15.0157 53.6742 13.7614 53.1057 12.7806L48.9881 5.67643C48.4195 4.69561 47.1604 4.35941 46.1757 4.92584L44.4802 5.90078C43.4524 5.12449 42.3479 4.48451 41.1765 3.98672V2.05078C41.1765 0.918203 40.2547 0 39.1176 0H30.8823C29.7453 0 28.8235 0.918203 28.8235 2.05078V3.98672C27.6521 4.48451 26.5476 5.12449 25.5198 5.90078L23.8244 4.9257C22.8398 4.35941 21.5806 4.69547 21.0121 5.67629L16.8944 12.7805C16.3259 13.7613 16.6633 15.0155 17.648 15.5818L19.3362 16.5528C19.256 17.1916 19.2157 17.8281 19.2157 18.457C19.2157 19.0859 19.256 19.7225 19.3361 20.3611L17.6478 21.3321C16.6632 21.8984 16.3258 23.1526 16.8943 24.1335Z" fill="#38bdf8" />
                  </svg>
                ),
              },
            ].map((feat, i) => (
              <div className="feature-card" key={i}>
                <div className="feature-icon">{feat.svg}</div>
                <h3 className="feature-card-title">{feat.title}</h3>
                <p className="feature-card-desc">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="about-section">
        <div className="section-inner about-inner">
          <div className="about-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="About us"
              className="about-img"
            />
          </div>
          <div className="about-content">
            <span className="section-label blue-label">ABOUT OUR COMPANY</span>
            <h2 className="about-heading">
              We provide perfect Web & AI solutions to scale your small to medium business.
            </h2>
            <p className="about-desc">
              Deliver robust web apps and AI automations that save time every day. Custom
              solutions for every client. Data-driven marketing strategies. Build campaigns that
              lead to conversions.
            </p>
            <div className="about-feature-item-new">
              <div className="about-feature-icon-circle">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#4B9ED3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
              <div className="about-feature-text">
                <h4 className="about-feature-title-new">Advanced Web & AI Tech</h4>
                <p className="about-feature-desc-new">
                  Cutting-edge engineering and automated workflows will close the loop on scaling rapidly
                </p>
              </div>
            </div>
            <Link to="/contact" className="btn-primary-about">Get Our Services</Link>
          </div>
        </div>
      </section>

      {/* ── Services (dark) ── */}
      <section className="services-section">
        <div className="section-inner">
          <div className="services-header">
            <span className="blue-label">OUR SERVICES</span>
            <h2 className="services-main-title">Our Unique Services</h2>
            <p className="services-subtitle">
              Our team is dedicated to delivering exceptional Web & AI solutions tailored to meet<br />
              the unique needs of each client.
            </p>
          </div>
          <div className="services-layout">
            <div className="services-text-col">
              <span className="blue-label">UNIQUE SERVICE FEATURES</span>
              <h3 className="services-sub-heading">The Web & AI Overview You Always Wanted</h3>
              <div className="services-feature-list">
                {[
                  { title: 'Custom Web Development Platforms', desc: 'Our web development team is dedicated to transforming online potential into tangible success' },
                  { title: 'Dedicated AI Automation Systems', desc: 'Our AI automation agency is dedicated to transforming manual workloads into massive efficiency' },
                  { title: 'Sustainability-Focused Marketing', desc: 'Our digital marketing agency is dedicated to transforming online potential into tangible success' },
                ].map((item, i) => (
                  <div className="services-feature-item" key={i}>
                    <div className="services-feature-icon">
                      <svg width="34" height="35" viewBox="0 0 34 35" fill="none">
                        <path d="M16.9897 6.63086C11.2759 6.63086 6.62729 11.2794 6.62729 16.9933C6.62729 20.6024 8.49515 23.9256 11.5415 25.8092V30.8984H13.1796V31.1899C13.1796 33.2908 14.8888 35 16.9897 35C19.0906 35 20.7998 33.2908 20.7998 31.1899V30.8984H22.4379V25.8092C25.4842 23.9256 27.3521 20.6024 27.3521 16.9933C27.3521 11.2794 22.7035 6.63086 16.9897 6.63086Z" fill="#4B9ED3" />
                        <path d="M15.9643 0H18.0151V4.44336H15.9643V0Z" fill="#4B9ED3" />
                        <path d="M15.6985 17.5086L14.2464 16.0566L12.7963 17.5067L15.6985 20.4089L21.1831 14.9243L19.733 13.4741L15.6985 17.5086Z" fill="#4B9ED3" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="services-feature-title">{item.title}</h4>
                      <p className="services-feature-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="services-image-col">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/0f26d93c4e4cbdf797f54c30700d4930829ca812?width=1255"
                alt="Services"
                className="services-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="team-section">
        <div className="section-inner">
          <div className="section-header-centered">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">Skilled Expert Team</h2>
            <p className="section-subtitle">
              Our team is dedicated to delivering exceptional Web & AI solutions tailored to meet<br />
              the unique needs of each client.
            </p>
          </div>
          <div className="team-grid">
            {[
              { name: 'Victoria Mansfield', role: 'Web Director', img: 'https://api.builder.io/api/v1/image/assets/TEMP/ef7a21aa65e0b26ee5d400acffb0f3a703611aae?width=820' },
              { name: 'William Harrison', role: 'AI Systems Analyst', img: 'https://api.builder.io/api/v1/image/assets/TEMP/10afe836e594e17ddcdac4cc363c1cebfe4e9803?width=820' },
              { name: 'Olivia Spencer', role: 'Frontend Developer', img: 'https://api.builder.io/api/v1/image/assets/TEMP/ef7a21aa65e0b26ee5d400acffb0f3a703611aae?width=820' },
            ].map((member, i) => (
              <div className="team-card" key={i}>
                <div className="team-img-wrap">
                  <img src={member.img} alt={member.name} className="team-img" />
                </div>
                <div className="team-card-footer">
                  <div className="team-social-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                      <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                    </svg>
                  </div>
                  <div className="team-info">
                    <h4 className="team-name">{member.name}</h4>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / Mission ── */}
      <section className="cta-section">
        <div className="section-inner cta-inner">
          <div className="cta-content">
            <span className="section-label">Book A Consultancy</span>
            <h2 className="cta-heading">
              Our mission is to look after<br />
              your digital brand growth<br />
              with AI automation
            </h2>
            <div className="cta-action-row">
              <Link to="/contact" className="btn-primary cta-btn-placeholder-hook">Book a Service</Link>
            </div>
          </div>
          <div className="cta-images">
            {[
              'https://api.builder.io/api/v1/image/assets/TEMP/3acee39274c936b69813d8a1522c34ac157a49e0?width=782',
              'https://api.builder.io/api/v1/image/assets/TEMP/0c62d2bfdb18060cfd662e05c636c378588a32ff?width=782',
              'https://api.builder.io/api/v1/image/assets/TEMP/eae5fcbd8726f20ef02a19ee366fa5142e58dc5b?width=782',
              'https://api.builder.io/api/v1/image/assets/TEMP/1a3b2b3566c4e6360ac0541a6150784817f968f0?width=782',
            ].map((src, i) => (
              <div className={`cta-img-card cta-img-card--${i + 1}`} key={i}>
                <img src={src} alt="Mission" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects (dark) ── */}
      <section className="projects-section">
        {/* Abstract Concentric Rings Background */}
        <svg className="projects-bg-rings" viewBox="0 0 800 1200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="-100" cy="50%" r="600" stroke="rgba(75, 158, 211, 0.2)" strokeWidth="80" />
          <circle cx="-100" cy="50%" r="450" stroke="rgba(75, 158, 211, 0.15)" strokeWidth="60" />
          <circle cx="-100" cy="50%" r="300" stroke="rgba(75, 158, 211, 0.1)" strokeWidth="40" />
        </svg>

        <div className="section-inner projects-inner">
          <div className="section-header-centered projects-header">
            <span className="section-label blue-label projects-label">Our Projects</span>
            <h2 className="projects-title">Our Recent Projects</h2>
            <p className="section-subtitle projects-subtitle">
              Our team is dedicated to delivering exceptional Web & AI solutions tailored to meet<br />
              the unique needs of each client.
            </p>
          </div>
          <div className="projects-list">
            {[
              { id: 'ecommerce', title: 'E-Commerce Web Application', img: webEngImg, desc: 'We built a custom high-performance e-commerce platform that helped our SME client increase their online sales by 900% through seamless UX.' },
              { id: 'ai-support', title: 'AI Customer Support Assistant', img: aiAutoImg, desc: 'Our custom AI chatbot integrated with the existing CRM to automate 80% of customer inquiries, significantly reducing support costs for the business.' },
              { id: 'marketing', title: 'Global Digital Marketing Campaign', img: marketingImg, desc: 'A comprehensive multi-channel marketing strategy that leveraged AI analytics to target high-intent customers across multiple regions.' },
            ].map((proj, i) => (
              <div className="project-card" key={i}>
                <div className="project-card-body">
                  <h3 className="project-title">{proj.title}</h3>
                  <p className="project-desc">{proj.desc}</p>
                  <div className="project-stats">
                    <span className="project-stat"><span className="stat-check">&#10003;</span> 900% increase in ROI</span>
                    <span className="project-stat"><span className="stat-check">&#10003;</span> 40% decrease in CAC</span>
                  </div>
                  <Link to={`/project/${proj.id}`} className="btn-primary project-btn">Read Full Case Study</Link>
                </div>
                <div className="project-img-wrap">
                  <img src={proj.img} alt={proj.title} className="project-img" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="testimonials-section">
        <div className="testimonials-wave">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="testimonials-wave-svg">
            <path fill="#ffffff" fillOpacity="1" d="M0,192 C480,320 960,64 1440,192 L1440,320 L0,320 Z"></path>
          </svg>
        </div>

        {/* Abstract background mesh lines */}
        <svg className="testimonials-bg-mesh" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-100,800 L1440,-100 M-200,800 L1440,-200 M-300,800 L1440,-300 M-400,800 L1440,-400" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
          <path d="M1500,800 L-100,-100 M1600,800 L0,-100 M1700,800 L100,-100 M1800,800 L200,-100" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="2" />
        </svg>

        <div className="section-inner testimonials-inner">
          <div className="section-header-centered">
            <span className="testimonials-label">TESTIMONIAL</span>
            <h2 className="testimonials-heading">
              Our Clients Share Their<br />Success Stories.
            </h2>
          </div>
          <div className="testimonial-slider">
            <button className="testimonial-arrow testimonial-arrow--prev" onClick={prevTestimonial}>&larr;</button>
            <div className="testimonial-card">
              <div className="testimonial-card-top">
                <div className="testimonial-quote-icon">❝</div>
                <p className="testimonial-text">
                  "{testimonials[currentTestimonial].text}"
                </p>
              </div>
              <div className="testimonial-author-row">
                <img
                  src={testimonials[currentTestimonial].img}
                  alt={testimonials[currentTestimonial].name}
                  className="testimonial-avatar"
                  style={{ width: '48px', height: '48px' }}
                />
                <div>
                  <p className="testimonial-name">{testimonials[currentTestimonial].name}</p>
                  <p className="testimonial-role">{testimonials[currentTestimonial].role}</p>
                </div>
                <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              </div>
            </div>
            <button className="testimonial-arrow testimonial-arrow--next" onClick={nextTestimonial}>&rarr;</button>
          </div>
        </div>
      </section>

      {/* ── Blog ── */}
      <section className="blog-section">
        <div className="section-inner">
          <div className="section-header-centered">
            <h2 className="section-title" style={{ color: '#111827' }}>Read our latest blog</h2>
            <p className="section-subtitle">
              Our team is dedicated to delivering exceptional Web & AI solutions tailored to meet<br />
              the unique needs of each client.
            </p>
          </div>
          <div className="blog-grid">
            {[
              { img: 'https://api.builder.io/api/v1/image/assets/TEMP/6e76bea5071b91488244378e1e6394801b520807?width=817', title: 'The Importance of Digital Marketing Services from Experts', date: 'January 10, 2024' },
              { img: 'https://api.builder.io/api/v1/image/assets/TEMP/f06a68f39723a1e20137a9516a5407c8daa02131?width=817', title: 'How Custom Web App Development Is Changing the Game', date: 'January 10, 2024' },
              { img: 'https://api.builder.io/api/v1/image/assets/TEMP/6e4bd2a7d42139dd72ffddc1f0e5052adc5d32fb?width=817', title: 'How Emerging AI Technologies Are Reshaping Business', date: 'January 10, 2024' },
            ].map((post, i) => (
              <div className="blog-card" key={i}>
                <img src={post.img} alt={post.title} className="blog-card-img" />
                <div className="blog-card-body">
                  <div className="blog-meta">
                    <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg> {post.date}</span>
                    <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> By DAQS</span>
                  </div>
                  <h3 className="blog-post-title">{post.title}</h3>
                  <Link to="/blog" className="blog-read-link">Read Details &rarr;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sponsors ── */}
      <Sponsors />
    </>
  );
}
