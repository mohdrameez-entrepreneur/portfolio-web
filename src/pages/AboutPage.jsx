import { useState } from 'react';
import brandLogo from '../../ext-resources/logos/essenziat-digital-logo.jpeg';
import founderImage from '../../ext-resources/images/founder.jpg';
import SiteHeader from '../components/SiteHeader';
import { ContactModal, RequestSubmittedModal } from '../components/Modals';

const ETHOS_PILLARS = [
  {
    number: '01',
    title: 'Sub-Second Speed',
    description: 'We reject bloated frameworks and slow templates. Every application is engineered to open in under 1 second with instant responsiveness.'
  },
  {
    number: '02',
    title: 'Performance Alignment',
    description: 'For qualified projects, fee structures connect directly to verified performance, speed scores, and delivered milestones.'
  },
  {
    number: '03',
    title: 'Pure Aesthetics',
    description: 'Engineered with high-precision standards: generous whitespace, obsidian typography, and intuitive interfaces that customers love using.'
  }
];

export default function AboutPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);
  const [contactIntent, setContactIntent] = useState('request-call');
  const [contactForm, setContactForm] = useState({ name: '', contact: '', service: '', contactPreference: 'call', email: '', message: '' });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

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
          subject: `Inquiry from About Page: ${contactForm.service || 'Collaboration'}`,
          from_name: 'Essenziat Digital About Page',
          contactIntent,
          name: contactForm.name,
          contact: contactForm.contact,
          service: contactForm.service,
          contactPreference: contactForm.contactPreference,
          email: contactForm.email,
          message: contactForm.message || 'Direct reachout requested.'
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
    <main className="relative min-h-screen bg-white text-zinc-900 px-4 sm:px-8 pt-24 sm:pt-36 pb-20 sm:pb-24 selection:bg-brand-blue selection:text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/[0.04] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-brand-gold/[0.03] rounded-full blur-[140px]" />

      <SiteHeader brandLogo={brandLogo} onContactClick={() => setIsContactOpen(true)} />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header Storyline */}
        <div className="mb-10 sm:mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 rounded-full border border-black/[0.08] bg-zinc-50 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.14em] sm:tracking-[0.2em] text-brand-gold mb-4 sm:mb-5 shadow-2xs">
            The Story & Ethos
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 mb-3 sm:mb-4 text-balance">
            Crafted with intention.
          </h1>
          <p className="text-sm sm:text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed text-balance">
            A performance-first digital studio dedicated to building sub-second software with precision engineering, clean systems, and modern minimalism.
          </p>
        </div>

        {/* Engineering Team Section - Stacked Hierarchy */}
        <div className="flex flex-col gap-5 sm:gap-8 mb-14 sm:mb-16">
          {/* Mohd Rameez - Primary Flagship Card */}
          <div className="relative rounded-3xl border border-black/[0.08] bg-white p-5 sm:p-8 md:p-10 shadow-apple-lg overflow-hidden">
            <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-brand-blue/[0.05] rounded-full blur-[100px]" />

            <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-5 sm:gap-8 text-center md:text-left">
              <div className="relative w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 shrink-0 rounded-full overflow-hidden border-2 border-black/10 bg-zinc-100 shadow-apple ring-4 ring-black/[0.03]">
                <img
                  src={founderImage}
                  alt="Mohd Rameez"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
                />
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 mb-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2.5 py-0.5 rounded-full text-center">
                    Founder · Principal Architect & Engineer
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-zinc-400">
                    Lead Discipline
                  </span>
                </div>

                <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-900 mb-2 sm:mb-3">
                  Mohd Rameez
                </h2>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-3">
                  I lead Essenziat Digital as founder and principal architect. My discipline spans the full product lifecycle: from high-concurrency system design, cloud DevOps infrastructure, and custom software architectures to conversion-driven UI/UX design, visual brand direction, and digital growth media production.
                </p>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                  Every product we engineer is built with sub-second performance standards, obsidian typography, and zero-bloat architecture so founders own their software completely with zero dependencies.
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mb-5 sm:mb-6">
                  {[
                    'System Architecture',
                    'Cloud DevOps',
                    'Full-Stack Engineering',
                    'UI/UX Design Systems',
                    'Visual Direction',
                    'Digital Media Production'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-zinc-50 border border-black/[0.06] text-[10px] sm:text-[11px] font-mono text-zinc-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-3.5 sm:pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-xs text-zinc-500">
                  <span className="font-semibold text-zinc-900">Founder & Studio Direction</span>
                  <span className="text-brand-blue font-medium">End-to-End System Ownership</span>
                </div>
              </div>
            </div>
          </div>

          {/* Salik Amir - Secondary Engineering Card */}
          <div className="relative rounded-3xl border border-black/[0.08] bg-zinc-50/70 p-5 sm:p-7 md:p-8 shadow-apple hover:bg-white transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-7 text-center md:text-left">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 shrink-0 rounded-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-white flex items-center justify-center font-mono font-bold text-lg sm:text-xl md:text-2xl border-2 border-black/10 shadow-sm ring-4 ring-black/[0.03] select-none">
                SA
              </div>

              <div className="flex-1 w-full">
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-2 mb-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full text-center">
                    Secondary Engineer · Software & Backend
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono font-semibold text-zinc-400">
                    Core Systems
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-zinc-900 mb-2">
                  Salik Amir
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-4">
                  Specializes in core backend architecture, server-side software engineering, and database design. Collaborates directly with Mohd Rameez on full-stack workflows—translating complex system requirements into robust, high-performance logic across all client platforms.
                </p>

                {/* Skill Badges */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 mb-4 sm:mb-5">
                  {[
                    'Backend Architecture',
                    'Server-Side Logic',
                    'Database Engineering',
                    'API Systems',
                    'Full-Stack Development'
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white border border-black/[0.06] text-[10px] sm:text-[11px] font-mono text-zinc-700 font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="pt-3 sm:pt-3.5 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-xs text-zinc-500">
                  <span className="font-semibold text-zinc-800">Software & Backend Implementation</span>
                  <span className="text-zinc-500">Scalable Server Infrastructure</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Core Pillars */}
        <div className="mb-12 sm:mb-14">
          <div className="text-center mb-6 sm:mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Core Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              How we think & build.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4">
            {ETHOS_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-5 sm:p-6 rounded-3xl border border-black/[0.08] bg-zinc-50/70 flex flex-col justify-between hover:bg-white hover:shadow-apple transition-all duration-300"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-brand-gold block mb-2">
                    {pillar.number}
                  </span>
                  <h4 className="text-base font-bold text-zinc-900 mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-600 leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Flagship Ventures Reference Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-12 sm:mb-14">
          <div className="p-4 sm:p-6 rounded-3xl border border-black/[0.08] bg-white shadow-sm flex items-center justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-mono font-semibold text-brand-blue block">Live Platform</span>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900">RuhVerse</h4>
              <p className="text-[11px] sm:text-xs text-zinc-500">Global Quran Web Study</p>
            </div>
            <a
              href="https://ruhverse.online"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-colors shrink-0 shadow-2xs"
            >
              Visit →
            </a>
          </div>

          <div className="p-4 sm:p-6 rounded-3xl border border-black/[0.08] bg-white shadow-sm flex items-center justify-between gap-3 sm:gap-4">
            <div>
              <span className="text-[11px] sm:text-xs font-mono font-semibold text-brand-gold block">Live Platform</span>
              <h4 className="text-sm sm:text-base font-bold text-zinc-900">Cruvo</h4>
              <p className="text-[11px] sm:text-xs text-zinc-500">Real-Time Rider GPS Radar</p>
            </div>
            <a
              href="https://cruvoride.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-colors shrink-0 shadow-2xs"
            >
              Visit →
            </a>
          </div>
        </div>

        {/* Minimalist CTA Box */}
        <div className="p-6 sm:p-10 rounded-3xl border border-black/[0.08] bg-zinc-50 text-center">
          <h3 className="text-xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 mb-2">
            Let's build something exceptional.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mb-5 sm:mb-6">
            Speak directly with Mohd Rameez about your project and goals.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="w-full sm:w-auto px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors shadow-apple cursor-pointer"
          >
            Start a Conversation →
          </button>
        </div>
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        contactIntent={contactIntent}
        setContactIntent={setContactIntent}
        contactForm={contactForm}
        setContactForm={setContactForm}
        onSubmit={handleContactSubmit}
        isSubmitting={isSubmittingContact}
      />

      <RequestSubmittedModal
        isOpen={isRequestSubmitted}
        onClose={() => setIsRequestSubmitted(false)}
      />
    </main>
  );
}
