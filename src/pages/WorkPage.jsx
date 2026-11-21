import { useState } from 'react';
import { motion } from 'framer-motion';
import brandLogo from '../../ext-resources/logos/essenziat-digital-logo.jpeg';
import cruvoShowcase from '../../ext-resources/images/cruvo-showcase.jpg';
import ruhverseShowcase from '../../ext-resources/images/ruhverse-showcase.jpg';
import udyvoShowcase from '../../ext-resources/images/udyvo-showcase.jpg';
import tttMain from '../../ext-resources/images/TTT.png';
import vfMain from '../../ext-resources/images/VF.png';
import SiteHeader from '../components/SiteHeader';
import { ContactModal, FullscreenPreviewModal, RequestSubmittedModal } from '../components/Modals';

const WORK_ITEMS = [
  {
    id: 'udyvo',
    title: 'Udyvo',
    tagline: 'A Simple & Powerful CRM to Manage Customers, Sales & Growth.',
    category: 'Software & Web',
    discipline: 'Subscription-Based B2B CRM Platform',
    badge: 'FLAGSHIP PLATFORM',
    image: udyvoShowcase,
    alt: 'Udyvo - CRM System for Modern Businesses',
    siteUrl: '',
    status: 'Operational SaaS',
    metric: 'B2B SaaS · Multi-Tenant Architecture',
    summary: 'A subscription-based CRM platform engineered for modern businesses. Streamlines customer relationship management, sales pipelines, follow-up automations, and growth analytics in one unified, high-performance web dashboard.',
    highlights: [
      'Multi-tenant subscription architecture with customer and sales analytics',
      'Automated daily follow-up tracking and reminder engine',
      'Unified pipeline management from initial enquiry to closed deal',
      'Clean, minimalist dashboard engineered for instant data retrieval'
    ],
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'SaaS Architecture', 'Cloud CRM', 'Analytics']
  },
  {
    id: 'cruvo',
    title: 'Cruvo',
    tagline: 'Group Riding, Reimagined.',
    category: 'Software & Web',
    discipline: 'Full-Stack Web & Mobile App',
    badge: 'FLAGSHIP PLATFORM',
    image: cruvoShowcase,
    alt: 'Cruvo - Real-Time Group Motorcycle Navigation & GPS Radar',
    siteUrl: 'https://cruvoride.vercel.app',
    status: 'Live & Operational',
    metric: 'Real-Time Telemetry · Zero-Lag Radar',
    summary: 'A real-time motorcycle touring and group GPS telemetry platform engineered independently by Mohd Rameez. Enables synchronized group rides with real-time location sharing, squad radar, pitstop flagging, and turn-by-turn route sync.',
    highlights: [
      'Synchronized real-time squad radar and GPS mapping',
      'One-tap SOS and urgent pitstop route alerts',
      'Engineered for low data consumption on long-distance highway routes',
      'Clean mobile UI designed for rapid glanceability while riding'
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Mapbox GPS', 'WebSockets', 'Vercel']
  },
  {
    id: 'ruhverse',
    title: 'RuhVerse',
    tagline: 'Read. Reflect. Remember.',
    category: 'Software & Web',
    discipline: 'Bespoke Web & Digital Experience',
    badge: 'FLAGSHIP PLATFORM',
    image: ruhverseShowcase,
    alt: 'RuhVerse Holy Quran Reading Platform',
    siteUrl: 'https://ruhverse.online',
    status: 'Live & Operational',
    metric: 'Sub-Second Load · Global Readers',
    summary: 'An ultra-fast, minimalist Quran study platform designed for readers worldwide. Engineered with sub-second page delivery, high-clarity Arabic typography, prayer times, and Qibla compass without distracting clutter or advertisements.',
    highlights: [
      'Cold-starts in under 0.8 seconds across mobile and desktop devices',
      'Integrated prayer schedules and accurate Qibla locator',
      'Distraction-free typography with custom Arabic font rendering',
      'Responsive reading layout optimized for low-bandwidth mobile networks'
    ],
    techStack: ['Next.js / React', 'Tailwind CSS', 'PWA Architecture', 'Edge CDN', 'Global DNS']
  },
  {
    id: 'the-tabsarah-table',
    title: 'The Tabsarah Table',
    tagline: 'Thoughtful Discourse, Scaled.',
    category: 'Complementary Work',
    discipline: 'Audience Retention & Search Growth',
    badge: 'COMPLEMENTARY CRAFT',
    image: tttMain,
    alt: 'The Tabsarah Table audience growth and asset showcase',
    siteUrl: '',
    status: 'Channel Scaling',
    metric: '1,000+ Avg Views / Feature Asset',
    summary: 'Comprehensive digital audience growth strategy, visual packaging, and content pacing engineered for Adeem Raza. Focused on high-CTR visual direction, viewer retention curves, and algorithmic search discoverability.',
    highlights: [
      'Custom visual asset system yielding consistent click-through rates',
      'Strategic content pacing and editorial retention optimization',
      'SEO metadata architecture tailored for long-tail search discoverability'
    ],
    techStack: ['Visual Direction', 'Retention Analytics', 'Search SEO', 'Audience Growth']
  },
  {
    id: 'vf-educational',
    title: 'Vital Facts (VF)',
    tagline: 'Curiosity Engineered into Growth.',
    category: 'Complementary Work',
    discipline: 'Digital Storytelling & Audience Scaling',
    badge: 'COMPLEMENTARY CRAFT',
    image: vfMain,
    alt: 'VF educational channel performance snapshot',
    siteUrl: 'https://www.youtube.com/@Vital-Facts',
    status: 'Active Channel',
    metric: '3,200+ Active Subscribers',
    summary: 'End-to-end digital storytelling pipeline, brand packaging, and audience scaling operations that built the educational platform to over 3,200 active, highly engaged subscribers.',
    highlights: [
      'Scaled audience organically from zero to over 3,200 subscribers',
      'High-retention visual asset production and motion systems workflow',
      'Data-backed audience retention analytics driving topic selection'
    ],
    techStack: ['Motion Systems', 'Visual Direction', 'Audience Scaling', 'Growth Operations']
  }
];

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPreviewProject, setSelectedPreviewProject] = useState(null);
  const [isFullscreenPreviewOpen, setIsFullscreenPreviewOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);
  const [contactIntent, setContactIntent] = useState('project-inquiry');
  const [contactForm, setContactForm] = useState({ name: '', contact: '', service: 'Full-Stack Development', contactPreference: 'whatsapp', email: '', message: '' });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const categories = ['All', 'Software & Web', 'Complementary Work'];

  const filteredItems = selectedCategory === 'All'
    ? WORK_ITEMS
    : WORK_ITEMS.filter((item) => item.category === selectedCategory);

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmittingContact(true);
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error('Service offline');

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New Inquiry from Our Work Page: ${contactForm.service || 'Work Inquiry'}`,
          from_name: 'Essenziat Digital Portfolio',
          contactIntent,
          name: contactForm.name,
          contact: contactForm.contact,
          service: contactForm.service,
          contactPreference: contactForm.contactPreference,
          email: contactForm.email,
          message: contactForm.message || 'Discussion requested from portfolio page.'
        })
      });
      setIsContactOpen(false);
      setIsRequestSubmitted(true);
    } catch (err) {
      window.alert('Transmission error. Please email essenziatdigital@gmail.com directly.');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-white text-zinc-900 px-4 sm:px-8 pt-24 sm:pt-32 pb-20 sm:pb-24 selection:bg-brand-blue selection:text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-blue/[0.04] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[450px] h-[300px] bg-brand-gold/[0.03] rounded-full blur-[140px]" />

      <SiteHeader brandLogo={brandLogo} onContactClick={() => setIsContactOpen(true)} />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header Storyline */}
        <div className="mb-10 sm:mb-18 text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-black/[0.08] bg-zinc-50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-brand-gold mb-4 sm:mb-6 shadow-2xs">
            Selected Portfolio
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-4 sm:mb-6 text-balance">
            Real products. <br />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-800 to-brand-blue bg-clip-text text-transparent">
              Engineered for impact.
            </span>
          </h1>
          <p className="text-sm sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed text-balance">
            Explore live web architectures, telemetry systems, and digital platforms built by Essenziat Digital. Every project is crafted for sub-second performance, bulletproof reliability, and measurable outcomes.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-zinc-900 text-white shadow-sm'
                    : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900 border border-black/[0.05]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16 sm:mb-20">
          {filteredItems.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative rounded-3xl border border-black/[0.08] bg-white p-4.5 sm:p-7 md:p-8 flex flex-col justify-between transition-all duration-300 hover:border-black/20 hover:shadow-apple-lg overflow-hidden shadow-apple"
            >
              <div>
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold text-zinc-400">
                      {`0${index + 1}`}
                    </span>
                    <span className="text-zinc-300">/</span>
                    <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-[11px] font-medium bg-zinc-100 border border-black/[0.06] text-zinc-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    {item.status}
                  </span>
                </div>

                {/* Title & Tagline */}
                <div className="mb-3 sm:mb-4">
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h2>
                  <p className="text-xs sm:text-sm font-medium text-zinc-500 mt-0.5 sm:mt-1">
                    {item.tagline}
                  </p>
                </div>

                {/* Aspect 2:1 Visual Frame */}
                <div
                  onClick={() => {
                    setSelectedPreviewProject(item);
                    setIsFullscreenPreviewOpen(true);
                  }}
                  className="relative w-full aspect-[2/1] mb-5 sm:mb-6 rounded-2xl overflow-hidden border border-black/[0.08] bg-zinc-900 cursor-pointer shadow-sm group/frame"
                >
                  <img
                    src={item.image}
                    alt={item.alt || item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/frame:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 group-hover/frame:opacity-10 transition-opacity" />
                  
                  {/* Subtle hover expand pill */}
                  <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium opacity-0 group-hover/frame:opacity-100 transition-opacity flex items-center gap-1">
                    <span>Preview</span>
                    <span>↗</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-4 sm:mb-5">
                  {item.summary}
                </p>

                {/* Key Highlights */}
                <div className="mb-5 sm:mb-6 space-y-1.5 sm:space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <span className="text-brand-blue font-bold shrink-0 mt-0.5">✓</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mb-5 sm:mb-6">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-50 border border-black/[0.06] text-[10px] sm:text-[11px] font-mono text-zinc-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Outcome & Actions */}
              <div className="pt-3.5 sm:pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3">
                <div className="flex items-center gap-1.5 text-xs text-zinc-500">
                  <span className="font-semibold text-zinc-800">{item.metric}</span>
                </div>

                {item.siteUrl && (
                  <a
                    href={item.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-all shadow-sm shrink-0"
                  >
                    <span>Visit Live Platform</span>
                    <span>→</span>
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-3xl border border-black/[0.08] bg-zinc-50 p-6 sm:p-12 text-center max-w-4xl mx-auto shadow-2xs relative overflow-hidden">
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-brand-blue/[0.04] rounded-full blur-[120px]" />
          <div className="relative z-10">
            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.16em] sm:tracking-[0.25em] text-brand-gold block mb-2 sm:mb-3">
              Start Your Build
            </span>
            <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-3 sm:mb-4">
              Have a product or website you want built?
            </h2>
            <p className="text-xs sm:text-base text-zinc-600 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
              We engineer fast, beautiful, and secure software solutions with 100% code ownership and direct developer collaboration.
            </p>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition-all shadow-apple cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Start a Project</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Preview Modal */}
      <FullscreenPreviewModal
        isOpen={isFullscreenPreviewOpen}
        project={selectedPreviewProject}
        onClose={() => setIsFullscreenPreviewOpen(false)}
      />

      {/* Contact & Inquiries Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        contactIntent={contactIntent}
        setContactIntent={setContactIntent}
        contactForm={contactForm}
        setContactForm={setContactForm}
        isSubmittingContact={isSubmittingContact}
        handleContactSubmit={handleContactSubmit}
      />

      {/* Submission Success Confirmation Modal */}
      <RequestSubmittedModal
        isOpen={isRequestSubmitted}
        onClose={() => setIsRequestSubmitted(false)}
      />
    </main>
  );
}
