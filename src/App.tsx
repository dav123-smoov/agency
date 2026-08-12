import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

// Code-split every page — loaded on demand, not upfront
const LandingPage      = lazy(() => import('./components/LandingPage'));
const ServicesPage     = lazy(() => import('./components/ServicesPage'));
const AboutPage        = lazy(() => import('./components/AboutPage'));
const ContactPage      = lazy(() => import('./components/ContactPage'));
const ProjectDetailPage = lazy(() => import('./components/ProjectDetailPage'));
const ServiceDetailPage = lazy(() => import('./components/ServiceDetailPage'));
const ProjectsPage     = lazy(() => import('./components/ProjectsPage'));
const BlogPage         = lazy(() => import('./components/BlogPage'));

// Minimal full-screen loading indicator shown between route transitions
function PageLoader() {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <div style={{
        width: 40,
        height: 40,
        border: '3px solid #e2e8f0',
        borderTop: '3px solid #3b82f6',
        borderRadius: '50%',
        animation: 'spin 0.7s linear infinite',
      }} />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="service/:serviceId" element={<ServiceDetailPage />} />
            <Route path="projects" element={<ProjectsPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="project/:projectId" element={<ProjectDetailPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
