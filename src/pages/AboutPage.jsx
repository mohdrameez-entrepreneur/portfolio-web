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
    <main className="relative min-h-screen bg-white text-zinc-900 px-5 sm:px-8 pt-28 sm:pt-36 pb-24 selection:bg-brand-blue selection:text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/[0.04] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-brand-gold/[0.03] rounded-full blur-[140px]" />

      <SiteHeader brandLogo={brandLogo} onContactClick={() => setIsContactOpen(true)} />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header Storyline */}
        <div className="mb-12 sm:mb-16 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-black/[0.08] bg-zinc-50 text-xs font-semibold uppercase tracking-[0.2em] text-brand-gold mb-5 shadow-2xs">
            The Story & Ethos
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 mb-4 text-balance">
            Crafted with intention.
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-xl mx-auto leading-relaxed text-balance">
            A performance-first digital studio dedicated to building sub-second software with precision engineering, clean systems, and modern minimalism.
          </p>
        </div>

        {/* Engineering Team Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16">
          {/* Mohd Rameez */}
          <div className="relative rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-8 shadow-apple hover:shadow-apple-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 rounded-full overflow-hidden border-2 border-black/10 bg-zinc-100 shadow-sm ring-4 ring-black/[0.03]">
                  <img
                    src={founderImage}
                    alt="Mohd Rameez"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-brand-blue/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Founder · Lead Engineer
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                    Mohd Rameez
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                Directs core web and software architecture at Essenziat Digital. Focused on sub-second loading performance, precision UI systems, and full-stack product execution.
              </p>
            </div>

            <div className="pt-3.5 border-t border-black/[0.06] flex items-center justify-between text-xs text-zinc-500 font-medium">
              <span className="text-zinc-400">Core Focus</span>
              <span className="text-zinc-900 font-semibold">Systems Architecture & Direction</span>
            </div>
          </div>

          {/* Salik Amir */}
          <div className="relative rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-8 shadow-apple hover:shadow-apple-lg transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div>
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 shrink-0 rounded-full bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950 text-white flex items-center justify-center font-mono font-bold text-base sm:text-lg border-2 border-black/10 shadow-sm ring-4 ring-black/[0.03] select-none">
                  SA
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
                    Secondary Engineer
                  </span>
                  <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                    Salik Amir
                  </h2>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-5">
                Engineers full-stack features, reliable frontend workflows, and robust application logic to support scalable and responsive digital platforms.
              </p>
            </div>

            <div className="pt-3.5 border-t border-black/[0.06] flex items-center justify-between text-xs text-zinc-500 font-medium">
              <span className="text-zinc-400">Core Focus</span>
              <span className="text-zinc-900 font-semibold">Software & Web Implementation</span>
            </div>
          </div>
        </div>

        {/* Three Core Pillars */}
        <div className="mb-14">
          <div className="text-center mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-1">
              Core Principles
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
              How we think & build.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {ETHOS_PILLARS.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-3xl border border-black/[0.08] bg-zinc-50/70 flex flex-col justify-between hover:bg-white hover:shadow-apple transition-all duration-300"
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
          <div className="p-5 sm:p-6 rounded-3xl border border-black/[0.08] bg-white shadow-sm flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-brand-blue block">Live Platform</span>
              <h4 className="text-base font-bold text-zinc-900">RuhVerse</h4>
              <p className="text-xs text-zinc-500">Global Quran Web Study</p>
            </div>
            <a
              href="https://ruhverse.online"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-colors shrink-0 shadow-2xs"
            >
              Visit →
            </a>
          </div>

          <div className="p-5 sm:p-6 rounded-3xl border border-black/[0.08] bg-white shadow-sm flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-semibold text-brand-gold block">Live Platform</span>
              <h4 className="text-base font-bold text-zinc-900">Cruvo</h4>
              <p className="text-xs text-zinc-500">Real-Time Rider GPS Radar</p>
            </div>
            <a
              href="https://cruvoride.vercel.app"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-colors shrink-0 shadow-2xs"
            >
              Visit →
            </a>
          </div>
        </div>

        {/* Minimalist CTA Box */}
        <div className="p-8 sm:p-10 rounded-3xl border border-black/[0.08] bg-zinc-50 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 mb-2">
            Let's build something exceptional.
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-md mx-auto mb-6">
            Speak directly with Mohd Rameez about your project and goals.
          </p>
          <button
            onClick={() => setIsContactOpen(true)}
            className="px-8 py-3.5 rounded-full bg-zinc-900 text-white text-xs sm:text-sm font-semibold hover:bg-black transition-colors shadow-apple cursor-pointer"
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
