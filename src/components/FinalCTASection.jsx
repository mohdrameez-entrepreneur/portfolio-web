import { motion } from 'framer-motion';

export default function FinalCTASection({ onContactClick }) {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-white overflow-hidden border-t border-black/[0.06]">
      {/* Ambient background light */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-blue/[0.05] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/4 right-1/3 w-[300px] h-[200px] bg-brand-gold/[0.04] rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-3">
          Start Your Project
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 leading-[1.08] mb-5">
          Ready to build something <span className="bg-gradient-to-r from-zinc-900 via-zinc-700 to-brand-blue bg-clip-text text-transparent">great?</span>
        </h2>
        <p className="mx-auto mb-8 max-w-lg text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
          We are ready to build your new website or app. Speak directly with Mohd Rameez, set clear goals, and launch smoothly without agency delays.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactClick}
            className="w-full sm:w-auto px-9 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-sm hover:bg-black transition-all shadow-[0_4px_20px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            Start a Conversation →
          </motion.button>
          <a
            href="mailto:essenziatdigital@gmail.com"
            className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-black/10 bg-white text-zinc-800 font-medium text-sm hover:bg-zinc-50 hover:border-black/20 transition-all shadow-2xs"
          >
            essenziatdigital@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
