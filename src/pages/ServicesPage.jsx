import { useState } from 'react';
import brandLogo from '../../ext-resources/logos/essenziat-digital-logo.jpeg';
import SiteHeader from '../components/SiteHeader';
import { ContactModal, RequestSubmittedModal } from '../components/Modals';

const PRIMARY_ENGINEERING = {
  num: '01',
  badge: 'MAIN QUEST · PRIMARY CRAFT',
  title: 'Full-Stack Web & Software Development',
  category: 'Core Specialty',
  tagline: 'Super fast websites and web apps that open in less than a second.',
  description: 'Our main specialty. We build clean, modern websites and apps using React, Next.js, and Python. Every line of code is written to be fast, secure, easy to use, and completely reliable so your business grows smoothly.',
  technologies: [
    'Super Fast Loading (< 1 Second)',
    'Modern React & Next.js Websites',
    'Safe & Secure Databases',
    'Perfect on Mobile Phones & Laptops',
    'Easy-to-Use Customer Journeys',
    '100% Full Code Ownership'
  ],
  ventureBenchmark: 'RuhVerse Platform (ruhverse.online)'
};

const SUPPORTING_SIDE_QUESTS = [
  {
    num: '02',
    badge: 'SIDE QUEST',
    title: 'Easy & Beautiful UI/UX Design',
    category: 'Supporting Superpower',
    tagline: 'Clean designs that make your website simple and enjoyable for anyone to use.',
    description: 'We design clear and friendly layouts built with precision standards. Every button, page, and menu is crafted so customers can find what they want immediately and buy without getting confused.',
    technologies: ['Simple Page Layouts', 'Clickable Prototype Previews', 'Effortless Customer Journeys', 'Clear Buttons & Menus', 'Precision Minimalist Flow', 'Easy Buying Flow'],
    ventureBenchmark: 'Cruvo Platform (cruvoride.vercel.app)'
  },
  {
    num: '03',
    badge: 'SIDE QUEST',
    title: 'Visual Web Direction',
    category: 'Supporting Superpower',
    tagline: 'Eye-catching visual style with clean fonts, smooth motion, and generous white space.',
    description: 'No boring templates. We create distinct, modern visual styles with sleek typography, smooth micro-animations, and bright sapphire and gold accents that make your brand stand out from competitors.',
    technologies: ['Generous Clean Whitespace', 'Modern Fonts & Typography', 'Smooth Hover Animations', 'Distinct Blue & Gold Accents', 'Looks Great on Any Screen', 'Crisp High-Res Media'],
    ventureBenchmark: 'Essenziat Digital Flagship Standard'
  },
  {
    num: '04',
    badge: 'SIDE QUEST',
    title: 'Smooth Mobile Apps',
    category: 'Supporting Superpower',
    tagline: 'Silky-smooth mobile apps for iPhone and Android with zero lag.',
    description: 'We build fast mobile apps that respond instantly to your finger taps. They work smoothly even with slow internet and provide a delightful experience for your users on the go.',
    technologies: ['iPhone & Android Apps', 'Instant Finger-Tap Response', 'Works With Slow Internet', 'Instant Realtime Updates', 'App Store Ready', 'Simple & Friendly Controls'],
    ventureBenchmark: 'Next-Gen Mobile Workflows'
  }
];

const ENGAGEMENT_MODELS = [
  {
    title: 'Quick Sprint',
    timeline: '2 to 4 Weeks',
    desc: 'Rapid design and development to build a new website or make your current one super fast and modern.'
  },
  {
    title: 'Results & Milestones Partnership',
    timeline: 'Milestone-Based',
    desc: 'For qualified projects, our fee connects to agreed speed and delivery milestones. We only win when you win.'
  },
  {
    title: 'Full Product Launch',
    timeline: '4 to 8 Weeks',
    desc: 'Complete package: custom frontend, secure database, mobile app, and deployment with 100% full ownership.'
  }
];

export default function ServicesPage() {
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
          subject: `Inquiry from Capabilities Page: ${contactForm.service || 'Service Inquiry'}`,
          from_name: 'Essenziat Digital Capabilities Page',
          contactIntent,
          name: contactForm.name,
          contact: contactForm.contact,
          service: contactForm.service,
          contactPreference: contactForm.contactPreference,
          email: contactForm.email,
          message: contactForm.message || 'Service discussion requested.'
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
    <main className="relative min-h-screen bg-white text-zinc-900 px-5 sm:px-8 pt-32 pb-24 selection:bg-brand-blue selection:text-white">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-brand-blue/[0.04] rounded-full blur-[160px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 w-[400px] h-[300px] bg-brand-gold/[0.03] rounded-full blur-[140px]" />

      <SiteHeader brandLogo={brandLogo} onContactClick={() => setIsContactOpen(true)} />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Header Storyline */}
        <div className="mb-16 sm:mb-20 text-center">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-black/[0.08] bg-zinc-50 text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue mb-6 shadow-2xs">
            What We Do
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 text-balance">
            Development first. <br />
            <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-brand-blue bg-clip-text text-transparent">
              Clean, fast, and simple.
            </span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed text-balance">
            Web & software development is our main craft. UI/UX design, visual direction, and mobile apps are supporting superpowers to build complete, successful products.
          </p>
        </div>

        {/* Flagship: The Main Quest Card */}
        <div className="rounded-3xl border-2 border-brand-blue/30 bg-white p-6 sm:p-12 shadow-apple-lg mb-12 relative overflow-hidden">
          <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-brand-blue/[0.06] rounded-full blur-[100px]" />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-black/[0.06] mb-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-mono font-bold text-brand-blue">{PRIMARY_ENGINEERING.num}</span>
                  <span className="text-zinc-300">/</span>
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-brand-blue/10 px-2.5 py-0.5 rounded-full">
                    {PRIMARY_ENGINEERING.badge}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">{PRIMARY_ENGINEERING.title}</h2>
              </div>
              <button
                onClick={() => {
                  setContactForm((prev) => ({ ...prev, service: PRIMARY_ENGINEERING.title }));
                  setIsContactOpen(true);
                }}
                className="px-6 py-2.5 rounded-full bg-zinc-900 text-xs font-semibold text-white hover:bg-black transition-all shrink-0 self-start shadow-apple cursor-pointer"
              >
                Ask About Web Development →
              </button>
            </div>

            <p className="text-lg text-zinc-800 font-semibold leading-relaxed mb-3">{PRIMARY_ENGINEERING.tagline}</p>
            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-8 max-w-3xl">{PRIMARY_ENGINEERING.description}</p>

            {/* Tech Stack Pills */}
            <div className="mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400 block mb-3">Key Highlights:</span>
              <div className="flex flex-wrap gap-2">
                {PRIMARY_ENGINEERING.technologies.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-100 border border-black/[0.06] text-zinc-800">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-zinc-500">
              <span>Live Example:</span>
              <span className="font-semibold text-brand-blue">{PRIMARY_ENGINEERING.ventureBenchmark}</span>
            </div>
          </div>
        </div>

        {/* Section divider for side quests */}
        <div className="flex items-center gap-3 mb-8">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold">
            Supporting Side Quests
          </span>
          <div className="h-px bg-black/[0.08] flex-1" />
        </div>

        {/* The 3 Supporting Capabilities Breakdown */}
        <div className="space-y-6 mb-24">
          {SUPPORTING_SIDE_QUESTS.map((cap) => (
            <div
              key={cap.title}
              className="rounded-3xl border border-black/[0.08] bg-zinc-50/70 p-6 sm:p-10 hover:border-black/20 hover:bg-white hover:shadow-apple transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-5 border-b border-black/[0.06] mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-medium text-brand-gold">{cap.num}</span>
                    <span className="text-zinc-300">/</span>
                    <span className="text-[10px] uppercase tracking-widest font-semibold text-zinc-500">{cap.category}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900">{cap.title}</h3>
                </div>
                <button
                  onClick={() => {
                    setContactForm((prev) => ({ ...prev, service: cap.title }));
                    setIsContactOpen(true);
                  }}
                  className="px-5 py-2 rounded-full border border-black/10 bg-white text-xs font-semibold text-zinc-800 hover:bg-zinc-100 transition-all shrink-0 self-start shadow-2xs cursor-pointer"
                >
                  Ask About {cap.title} →
                </button>
              </div>

              <p className="text-base text-zinc-800 font-medium leading-relaxed mb-2">{cap.tagline}</p>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-6 max-w-3xl">{cap.description}</p>

              <div className="mb-5">
                <div className="flex flex-wrap gap-2">
                  {cap.technologies.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-black/[0.06] text-zinc-700 shadow-2xs">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3.5 border-t border-black/[0.06] flex items-center justify-between text-xs text-zinc-500">
                <span>Live Example:</span>
                <span className="font-semibold text-zinc-800">{cap.ventureBenchmark}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engagement Models */}
        <div className="mb-24">
          <div className="text-center mb-10">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">How We Work</span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">How we work together.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ENGAGEMENT_MODELS.map((model) => (
              <div key={model.title} className="p-6 sm:p-8 rounded-3xl border border-black/[0.08] bg-white shadow-apple flex flex-col justify-between">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-mono text-zinc-700 bg-zinc-100 border border-black/[0.06] mb-4">
                    {model.timeline}
                  </span>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{model.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">{model.desc}</p>
                </div>
                <button
                  onClick={() => setIsContactOpen(true)}
                  className="mt-6 text-xs font-semibold text-brand-blue hover:text-brand-blueDark transition-colors text-left cursor-pointer"
                >
                  Choose this plan →
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Box */}
        <div className="p-8 sm:p-12 rounded-3xl border border-black/[0.08] bg-zinc-50 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 mb-3">
            Ready to start your project?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-600 max-w-lg mx-auto mb-8">
            Tell us about what you want to build and your timeline. Mohd Rameez will reply directly within 24 hours.
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
