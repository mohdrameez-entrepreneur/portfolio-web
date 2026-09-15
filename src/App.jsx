import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import brandLogo from '../ext-resources/logos/essenziat-digital-logo.jpeg';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import FooterSection from './components/FooterSection';
import BrandMark from './components/BrandMark';
import IntroLoader from './components/IntroLoader';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-brand-blue selection:text-white font-sans antialiased overflow-x-hidden">
      <IntroLoader brandLogo={brandLogo} />
      <AnimatedRoutes />
      <FooterSection BrandMarkComponent={BrandMark} brandLogo={brandLogo} />
    </div>
  );
}
