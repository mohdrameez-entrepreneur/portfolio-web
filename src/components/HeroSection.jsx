import { useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({
  heroRef,
  fadeUp,
  stagger,
  trustStats,
  ratingSummary,
  userRating,
  hasRated,
  onRateService,
  isSubmittingRating,
  onContactClick
}) {
  const [hoveredStar, setHoveredStar] = useState(0);

  const displayStars = hoveredStar || userRating || Math.round(parseFloat(ratingSummary?.average || 4.8));

  return (
    <section ref={heroRef} className="relative min-h-[85vh] flex flex-col items-center justify-center pt-28 sm:pt-36 pb-16 px-5 sm:px-8 overflow-hidden bg-white">
      {/* Subtle light ambient radial lights */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[380px] bg-brand-blue/[0.04] rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 left-1/3 w-[450px] h-[280px] bg-brand-gold/[0.03] rounded-full blur-[120px]" />

      {/* Main Storytelling Container */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center"
      >
        {/* Simple & Clear Results Badge */}
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-black/[0.08] bg-zinc-50 mb-6 shadow-2xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue" />
          </span>
          <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-zinc-700">
            Performance-First Engineering · 2026
          </span>
        </motion.div>

        {/* Punchy 3-Pillar Headline with Cinematic Animation (Text Only) */}
        <motion.div
          variants={fadeUp}
          className="mb-8"
        >
          <motion.h1
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.16,
                  delayChildren: 0.08
                }
              }
            }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-zinc-900 leading-[1.08] text-balance flex flex-col items-center justify-center gap-1 sm:gap-2.5 select-none"
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              whileHover={{ scale: 1.02 }}
              className="inline-block transition-colors duration-200 hover:text-zinc-600 cursor-default"
            >
              We design it.
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              whileHover={{ scale: 1.02 }}
              className="inline-block transition-colors duration-200 hover:text-zinc-600 cursor-default"
            >
              We engineer it.
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 28, filter: 'blur(12px)' },
                show: {
                  opacity: 1,
                  y: 0,
                  filter: 'blur(0px)',
                  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] }
                }
              }}
              whileHover={{ scale: 1.02 }}
              className="inline-block bg-gradient-to-r from-zinc-900 via-zinc-800 to-brand-blue bg-clip-text text-transparent hover:to-blue-600 transition-all duration-200 cursor-default"
            >
              We deploy it.
            </motion.span>
          </motion.h1>
        </motion.div>

        {/* Simple Quest Pills */}
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-2 mb-8"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-bold shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue animate-pulse" />
            Main Quest: Full-Stack Web & Software
          </span>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-black/[0.06] text-zinc-700 text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            Side Quests: UI/UX & Mobile Design
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center gap-3.5 mb-8 w-full sm:w-auto"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onContactClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-sm hover:bg-black transition-all shadow-[0_4px_20px_rgba(0,0,0,0.12)] cursor-pointer"
          >
            Start a Project →
          </motion.button>
          <a
            href="#work"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full border border-black/10 bg-white text-zinc-800 font-medium text-sm hover:bg-zinc-50 hover:border-black/20 transition-all shadow-2xs text-center"
          >
            See Our Work ↓
          </a>
        </motion.div>

        {/* Interactive Craft Rating Widget */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col items-center gap-2"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-black/[0.08] bg-zinc-50/90 shadow-2xs hover:border-black/20 hover:bg-white transition-all text-xs">
            <span className="text-zinc-600 font-medium">
              {hasRated ? `Thanks for rating ${userRating}★!` : 'Rate our craft:'}
            </span>

            {/* Interactive Stars */}
            <div
              className="flex items-center gap-0.5"
              onMouseLeave={() => setHoveredStar(0)}
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  disabled={isSubmittingRating || hasRated}
                  onMouseEnter={() => !hasRated && setHoveredStar(star)}
                  onClick={() => onRateService(star)}
                  className={`text-base leading-none transition-all duration-150 p-0.5 ${
                    star <= displayStars ? 'text-brand-gold' : 'text-zinc-300'
                  } ${!hasRated ? 'cursor-pointer hover:scale-130 active:scale-95' : 'cursor-default'}`}
                  aria-label={`Rate ${star} out of 5 stars`}
                >
                  ★
                </button>
              ))}
            </div>

            {/* Rating Summary Indicator */}
            <div className="flex items-center gap-1.5 pl-2 border-l border-black/[0.08] text-zinc-500 text-[11px] font-medium">
              <span className="text-brand-gold font-semibold">★ {ratingSummary?.average || '4.8'}/5</span>
              <span className="hidden sm:inline">({ratingSummary?.count || 8})</span>
            </div>

            {isSubmittingRating && (
              <span className="text-[10px] font-mono text-brand-blue animate-pulse pl-1">Saving...</span>
            )}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
