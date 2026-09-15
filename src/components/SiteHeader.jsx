import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BrandMark from './BrandMark';

export default function SiteHeader({ brandLogo, onContactClick }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Work', path: '/#work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3 md:px-8 transition-all duration-300">
      <div className={`w-full max-w-6xl rounded-full transition-all duration-300 flex items-center justify-between px-5 py-2.5 md:px-6 md:py-3 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-2xl border border-black/[0.08] shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)]'
          : 'bg-white/60 backdrop-blur-xl border border-black/[0.04]'
      }`}>
        <BrandMark brandLogo={brandLogo} />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-black/[0.03] border border-black/[0.05] rounded-full px-2 py-1">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                isActive
                  ? 'text-zinc-900 bg-white shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/[0.02]'
              }`
            }
          >
            Home
          </NavLink>
          <a
            href="/#work"
            className="px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-zinc-500 hover:text-zinc-900 hover:bg-black/[0.02] transition-all duration-200"
          >
            Ventures
          </a>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                isActive
                  ? 'text-zinc-900 bg-white shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/[0.02]'
              }`
            }
          >
            Capabilities
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                isActive
                  ? 'text-zinc-900 bg-white shadow-sm font-semibold'
                  : 'text-zinc-500 hover:text-zinc-900 hover:bg-black/[0.02]'
              }`
            }
          >
            Story
          </NavLink>
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactClick}
            className="relative group overflow-hidden rounded-full bg-zinc-900 text-white px-4 py-2 text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-black hover:shadow-[0_4px_16px_rgba(0,0,0,0.12)] flex items-center gap-2 cursor-pointer"
          >
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Let's Talk</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </motion.button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-600 hover:text-zinc-900"
            aria-label="Toggle Navigation"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 rounded-3xl bg-white/95 backdrop-blur-2xl border border-black/10 p-6 flex flex-col gap-4 shadow-2xl md:hidden"
          >
            <NavLink
              to="/"
              end
              className="text-base font-semibold text-zinc-800 hover:text-black py-2 border-b border-black/5"
            >
              Home
            </NavLink>
            <a
              href="/#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-semibold text-zinc-800 hover:text-black py-2 border-b border-black/5"
            >
              Ventures
            </a>
            <NavLink
              to="/services"
              className="text-base font-semibold text-zinc-800 hover:text-black py-2 border-b border-black/5"
            >
              Capabilities
            </NavLink>
            <NavLink
              to="/about"
              className="text-base font-semibold text-zinc-800 hover:text-black py-2 border-b border-black/5"
            >
              Story & Ethos
            </NavLink>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="mt-2 w-full py-3 rounded-full bg-zinc-900 text-white font-semibold text-sm text-center shadow-lg"
            >
              Start a Conversation
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

