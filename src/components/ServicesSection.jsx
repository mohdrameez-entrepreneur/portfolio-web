import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MAIN_QUEST = {
  title: 'Full-Stack Web & Software Development',
  category: 'Main Quest · Primary Craft',
  tagline: 'Lightning-fast websites and software platforms built for instant speed.',
  description: 'Our primary specialty. We build modern, reliable web applications that load in under 500ms, rank high on Google, and make customers love using your product. Every line of code is written cleanly to be super fast and easy to maintain.',
  capabilities: [
    'Loads in under 1 second (Ultra-Fast)',
    'Flawless on iPhones, Androids & Laptops',
    'Modern React & Next.js Web Stack',
    'Secure Database & API Integrations',
    'High-Conversion User Workflows',
    '100% Code Ownership (No Hidden Fees)'
  ],
  benchmark: 'RuhVerse Platform (ruhverse.online)'
};

const SIDE_QUESTS = [
  {
    number: 'Quest 01',
    title: 'Easy & Beautiful UI/UX Design',
    category: 'Supporting Superpower',
    tagline: 'Clean, precision-engineered interface designs that make your product effortless to use.',
    deliverables: ['Simple & Clear User Journeys', 'Interactive Clickable Prototypes', 'Frictionless Buying Workflows', 'Consistent Design Systems'],
    benchmark: 'Cruvo Platform (cruvoride.vercel.app)'
  },
  {
    number: 'Quest 02',
    title: 'Visual Web Design & Motion',
    category: 'Supporting Superpower',
    tagline: 'Sleek, minimalist visual direction with smooth animations that command trust.',
    deliverables: ['Refined Modern Negative Space', 'Silky Micro-Animations', 'Sharp Modern Typography', 'Distinct Brand Visuals'],
    benchmark: 'Essenziat Identity'
  },
  {
    number: 'Quest 03',
    title: 'Smooth Mobile App Development',
    category: 'Supporting Superpower',
    tagline: 'Fast, responsive mobile applications that feel completely natural on iOS and Android.',
    deliverables: ['Cross-Platform Mobile Apps', 'Super-Smooth 60fps Motion', 'Offline Reliability', 'Instant Real-time Sync'],
    benchmark: 'Mobile Workflows'
  }
];

export default function ServicesSection({ fadeUp, stagger }) {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-zinc-50/50 border-t border-black/[0.06]">
      <div className="mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20 border-b border-black/[0.08] pb-10 sm:pb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-blue block mb-3">
              Act III · What We Do
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900">
              Development first.
            </h2>
          </div>
          <p className="text-zinc-600 max-w-md text-sm sm:text-base leading-relaxed">
            Software and web development is our main craft. UI/UX design, visual direction, and mobile apps are supporting superpowers to build complete, successful products.
          </p>
        </div>

        {/* The Main Quest - Flagship Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl border-2 border-black/10 bg-white p-6 sm:p-12 shadow-apple-lg mb-10 overflow-hidden"
        >
          {/* Subtle electric blue accent gradient */}
          <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-brand-blue/[0.06] rounded-full blur-[100px]" />

          <div className="relative z-10">
            {/* Main Quest Label Badge */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 text-white shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  The Main Quest · Core Specialty
                </span>
              </div>
              <span className="text-xs font-mono font-semibold text-brand-blue tracking-wide">
                Primary Craft
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
              {MAIN_QUEST.title}
            </h3>

            <p className="text-base sm:text-lg text-zinc-800 font-semibold leading-relaxed mb-3 max-w-3xl">
              {MAIN_QUEST.tagline}
            </p>

            <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-8 max-w-3xl">
              {MAIN_QUEST.description}
            </p>

            {/* Main Quest Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-8">
              {MAIN_QUEST.capabilities.map((cap) => (
                <div
                  key={cap}
                  className="flex items-center gap-2.5 p-3 rounded-xl bg-zinc-50 border border-black/[0.06]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span className="text-xs font-semibold text-zinc-800">{cap}</span>
                </div>
              ))}
            </div>

            {/* Benchmark Footer */}
            <div className="pt-5 border-t border-black/[0.06] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-zinc-500">
              <span>Live Example: <strong className="text-zinc-900 font-semibold">{MAIN_QUEST.benchmark}</strong></span>
              <span className="text-brand-blue font-medium">100% Custom Engineering</span>
            </div>
          </div>
        </motion.div>

        {/* Supporting Side Quests Label */}
        <div className="flex items-center gap-3 mb-6 mt-14">
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 font-semibold">
            Supporting Side Quests
          </span>
          <div className="h-px bg-black/[0.08] flex-1" />
        </div>

        {/* Side Quests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SIDE_QUESTS.map((quest, index) => (
            <motion.div
              key={quest.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative rounded-3xl border border-black/[0.08] bg-white p-6 sm:p-8 transition-all duration-300 hover:border-black/20 hover:shadow-apple flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[11px] font-mono font-semibold text-brand-gold uppercase tracking-wider">
                    {quest.number}
                  </span>
                  <span className="text-[10px] font-semibold text-zinc-500 uppercase tracking-widest bg-zinc-100 px-2 py-0.5 rounded-full">
                    {quest.category}
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold tracking-tight text-zinc-900 mb-2">
                  {quest.title}
                </h4>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal mb-6">
                  {quest.tagline}
                </p>

                {/* Deliverables */}
                <div className="space-y-1.5 mb-6">
                  {quest.deliverables.map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs text-zinc-700">
                      <span className="text-zinc-400">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06] text-[11px] text-zinc-500 flex items-center justify-between">
                <span>Example:</span>
                <span className="font-semibold text-zinc-800">{quest.benchmark}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Link to full capabilities */}
        <div className="mt-14 flex justify-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-zinc-700 hover:text-black py-3 px-6 rounded-full border border-black/10 hover:border-black/30 bg-white hover:bg-zinc-50 transition-all duration-200 shadow-sm"
          >
            <span>See All Plans & Deliverables</span>
            <span className="text-xs">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
