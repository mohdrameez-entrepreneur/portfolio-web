import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import brandLogo from '../../ext-resources/logos/essenziat-digital-logo.jpeg';
import ruhverseMain from '../../ext-resources/images/Ruhverse-main.png';
import cruvoMain from '../../ext-resources/images/cruvo-main.png';
import tttMain from '../../ext-resources/images/TTT.png';
import vfMain from '../../ext-resources/images/VF.png';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import { ContactModal, FullscreenPreviewModal, RequestSubmittedModal } from '../components/Modals';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import SiteHeader from '../components/SiteHeader';
import { getRatings, submitRating } from "../API/rating";

const projects = [
  {
    title: 'RuhVerse',
    tag: 'Live Platform · Fast Quran Web',
    discipline: 'Web & Software Engineering',
    image: ruhverseMain,
    alt: 'RuhVerse Web Interface',
    siteUrl: 'https://ruhverse.online',
    description: 'An ultra-fast online Quran study website built for readers around the world. Designed to open instantly on every phone and laptop with zero lag.',
    metric: 'Global Readers · Instant Speed'
  },
  {
    title: 'Cruvo',
    tag: 'Live Platform · Rider Telemetry',
    discipline: 'Full-Stack Web & Mobile App',
    image: cruvoMain,
    alt: 'Cruvo - Real-Time Group Motorcycle Navigation & GPS Radar',
    siteUrl: 'https://cruvoride.vercel.app',
    description: 'A real-time motorcycle touring and group GPS radar platform engineered independently by Mohd Rameez. Features live squad radar, pitstop flagging, and turn-by-turn route sync.',
    metric: 'Real-Time Telemetry · Live Platform'
  },
  {
    title: 'The Tabsarah Table',
    tag: 'Media Growth · Video Strategy',
    discipline: 'Video & Search Growth',
    image: tttMain,
    alt: 'The Tabsarah Table YouTube analytics and content thumbnails',
    siteUrl: '',
    description: 'Managed YouTube search growth, eye-catching thumbnail designs, and video pacing for Adeem Raza, reaching 1,000+ views per feature video.',
    metric: '1K+ Views / Video'
  },
  {
    title: 'VF Educational Channel',
    tag: 'Media Production · Channel Scaling',
    discipline: 'Video & Growth Ops',
    image: vfMain,
    alt: 'VF educational channel performance snapshot',
    siteUrl: 'https://www.youtube.com/@Vital-Facts',
    description: 'Complete video creation pipeline, scripting, and growth strategy that helped scale the educational channel to over 3,200 active subscribers.',
    metric: '3.2K+ Active Subscribers'
  }
];

const faqs = [
  {
    question: 'How fast will my project be built?',
    answer: 'Most websites and apps are completed in 2 to 4 weeks from start to finish. You work directly with Mohd Rameez, so there are no slow agency middlemen or delays.'
  },
  {
    question: 'How does your performance-aligned pricing work?',
    answer: 'On select projects, we link our fee directly to agreed milestones and results (such as sub-second speed scores and on-time delivery). If we deliver the results, you pay. It keeps our incentives 100% aligned with your success.'
  },
  {
    question: 'How do we communicate during the project?',
    answer: 'Directly via WhatsApp, Slack, and quick video demos. You get private staging links to click and test your website as it gets built.'
  },
  {
    question: 'Do I completely own my website and design files?',
    answer: 'Yes, 100%. Once finished, you own all the code, Figma designs, and files completely with zero recurring license fees.'
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use the modern web standard: React, Next.js, Python/Django, Supabase, and Tailwind. This ensures your website is super secure, never breaks, and loads in the blink of an eye.'
  }
];

const trustStats = {
  clients: '10+ Successful Projects'
};

const CONTACT_SUBMIT_AT_KEY = 'essenziat_contact_submit_at';
const CONTACT_COOLDOWN_MS = 60 * 1000;

export default function HomePage() {
  const heroRef = useRef(null);
  const [selectedPreviewProject, setSelectedPreviewProject] = useState(null);
  const [isFullscreenPreviewOpen, setIsFullscreenPreviewOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);
  const [isSubmittingRating, setIsSubmittingRating] = useState(false);
  const [contactIntent, setContactIntent] = useState('request-call');
  const [isRequestSubmitted, setIsRequestSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [contactForm, setContactForm] = useState({ name: '', contact: '', service: '', contactPreference: 'call', email: '', message: '' });
  const [ratingSummary, setRatingSummary] = useState({ average: '4.8', count: 8 });

  const [userRating, setUserRating] = useState(() => {
    try {
      const saved = localStorage.getItem('essenziat_user_rating');
      return saved ? Number(saved) : null;
    } catch {
      return null;
    }
  });
  const [hasRated, setHasRated] = useState(() => {
    try {
      return Boolean(localStorage.getItem('essenziat_user_rating'));
    } catch {
      return false;
    }
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } }
  };
  const stagger = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } }
  };

  // Subtle hero mount animation
  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(heroRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
    }
  }, []);

  // Load rating stats
  useEffect(() => {
    const loadRatings = async () => {
      try {
        const data = await getRatings();
        if (data?.ok && data?.summary) {
          setRatingSummary(data.summary);
        }
      } catch (error) {
        // Fallback already in place
      }
    };
    loadRatings();
  }, []);

  const handleRateService = async (value) => {
    if (isSubmittingRating || hasRated) return;
    setIsSubmittingRating(true);
    try {
      const data = await submitRating(value);
      if (data?.ok && data?.summary) {
        setRatingSummary(data.summary);
      } else {
        const currentCount = Number(ratingSummary.count || 8);
        const currentAvg = parseFloat(ratingSummary.average || 4.8);
        const newCount = currentCount + 1;
        const newAvg = ((currentAvg * currentCount + value) / newCount).toFixed(1);
        setRatingSummary({ average: String(newAvg), count: newCount });
      }
    } catch (error) {
      const currentCount = Number(ratingSummary.count || 8);
      const currentAvg = parseFloat(ratingSummary.average || 4.8);
      const newCount = currentCount + 1;
      const newAvg = ((currentAvg * currentCount + value) / newCount).toFixed(1);
      setRatingSummary({ average: String(newAvg), count: newCount });
    } finally {
      setUserRating(value);
      setHasRated(true);
      try {
        localStorage.setItem('essenziat_user_rating', String(value));
      } catch {}
      setIsSubmittingRating(false);
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const now = Date.now();
    const lastSubmitAt = Number(localStorage.getItem(CONTACT_SUBMIT_AT_KEY) || '0');
    if (lastSubmitAt && now - lastSubmitAt < CONTACT_COOLDOWN_MS) {
      const secondsLeft = Math.ceil((CONTACT_COOLDOWN_MS - (now - lastSubmitAt)) / 1000);
      window.alert(`Please wait ${secondsLeft}s before submitting again.`);
      return;
    }

    setIsSubmittingContact(true);
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        throw new Error('Form service is temporarily offline. Please reach out to essenziatdigital@gmail.com directly.');
      }

      const payload = {
        access_key: accessKey,
        subject: `New Lead: ${contactForm.service || 'General Portfolio Inquiry'}`,
        from_name: 'Essenziat Digital',
        contactIntent,
        name: contactForm.name,
        contact: contactForm.contact,
        service: contactForm.service,
        contactPreference: contactForm.contactPreference,
        email: contactForm.email,
        message: contactForm.message || 'Direct callback or text inquiry requested.',
        botcheck: ''
      };

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to submit contact request.');
      }

      localStorage.setItem(CONTACT_SUBMIT_AT_KEY, String(now));
      setIsContactOpen(false);
      setIsRequestSubmitted(true);
      setContactForm({ name: '', contact: '', service: '', contactPreference: 'call', email: '', message: '' });
    } catch (error) {
      window.alert(error?.message || 'Your inquiry could not be sent right now. Please email essenziatdigital@gmail.com directly.');
    } finally {
      setIsSubmittingContact(false);
    }
  };

  return (
    <main className="bg-white text-zinc-900 selection:bg-brand-blue selection:text-white">
      <SiteHeader brandLogo={brandLogo} onContactClick={() => setIsContactOpen(true)} />

      {/* Act I: Vision & Identity */}
      <HeroSection
        heroRef={heroRef}
        fadeUp={fadeUp}
        stagger={stagger}
        trustStats={trustStats}
        ratingSummary={ratingSummary}
        userRating={userRating}
        hasRated={hasRated}
        onRateService={handleRateService}
        isSubmittingRating={isSubmittingRating}
        onContactClick={() => setIsContactOpen(true)}
      />

      {/* Act II: Curated Works & Ventures */}
      <ProjectsSection
        projects={projects}
        setIsFullscreenPreviewOpen={(project) => {
          setSelectedPreviewProject(project);
          setIsFullscreenPreviewOpen(true);
        }}
      />

      {/* Act III: Core Disciplines */}
      <ServicesSection fadeUp={fadeUp} stagger={stagger} />

      {/* Act IV: Social Proof & Rating */}
      <TestimonialsSection
        ratingSummary={ratingSummary}
        userRating={userRating}
        hasRated={hasRated}
        onRateService={handleRateService}
        isSubmittingRating={isSubmittingRating}
      />

      {/* Questions & Clarity */}
      <FAQSection faqs={faqs} openFaqIndex={openFaqIndex} setOpenFaqIndex={setOpenFaqIndex} />

      {/* Act V: Direct Engagement */}
      <FinalCTASection onContactClick={() => setIsContactOpen(true)} />

      {/* Modals */}
      <FullscreenPreviewModal
        isOpen={isFullscreenPreviewOpen}
        project={selectedPreviewProject}
        onClose={() => setIsFullscreenPreviewOpen(false)}
      />

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





