import { useState } from 'react';
import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    quote: "RuhVerse needed to be super fast and easy to read. Essenziat Digital built an extraordinary website that opens in less than a second for readers worldwide with zero lag.",
    author: "Product Lead",
    venture: "RuhVerse Platform",
    metric: "Global Fast Web"
  },
  {
    quote: "Their video pacing and YouTube growth strategy worked immediately. Our long-form videos quickly crossed 1,000+ views and maintained great engagement from day one.",
    author: "Adeem Raza",
    venture: "The Tabsarah Table",
    metric: "1K+ Views / Video"
  },
  {
    quote: "They handled the complete video production, motion design, and growth strategy. That disciplined workflow made scaling our channel past 3,200 active subscribers easy and smooth.",
    author: "Managing Director",
    venture: "Vital Facts Education",
    metric: "3.2K+ Subscribers"
  }
];

export default function TestimonialsSection({
  ratingSummary,
  userRating,
  hasRated,
  onRateService,
  isSubmittingRating
}) {
  const [hoveredStar, setHoveredStar] = useState(0);
  const displayStars = hoveredStar || userRating || Math.round(parseFloat(ratingSummary?.average || 4.8));

  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-white border-t border-black/[0.06]">
      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-16 sm:mb-20 text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-gold block mb-3">
            Act IV · Real Feedback
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-4">
            Loved by founders & creators.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            What partners say about building fast products with Essenziat Digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.venture}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col justify-between rounded-3xl border border-black/[0.08] bg-zinc-50/60 p-6 sm:p-8 hover:border-black/20 hover:bg-white hover:shadow-apple transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-brand-gold text-sm mb-5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-zinc-700 text-xs sm:text-sm leading-relaxed font-normal mb-8">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-5 border-t border-black/[0.06] flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-zinc-900 tracking-tight">{item.author}</p>
                  <p className="text-xs text-brand-blue font-medium">{item.venture}</p>
                </div>
                <span className="text-[10px] font-mono text-zinc-500 bg-white px-2.5 py-1 rounded-full border border-black/[0.08] shadow-2xs">
                  {item.metric}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Rating Banner */}
        <div className="mx-auto max-w-xl p-6 rounded-3xl border border-black/[0.08] bg-zinc-50/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-2xs">
          <div>
            <span className="text-xs font-bold text-zinc-900 block">Experience Our Craft?</span>
            <span className="text-xs text-zinc-500">
              {hasRated
                ? `You rated us ${userRating}★ · Thank you!`
                : `Average ${ratingSummary?.average || '4.8'}/5 from ${ratingSummary?.count || 8} verified reviews`}
            </span>
          </div>

          <div
            className="flex items-center gap-1 bg-white px-3.5 py-1.5 rounded-full border border-black/[0.06] shadow-2xs"
            onMouseLeave={() => setHoveredStar(0)}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                disabled={isSubmittingRating || hasRated}
                onMouseEnter={() => !hasRated && setHoveredStar(star)}
                onClick={() => onRateService && onRateService(star)}
                className={`text-lg leading-none transition-all duration-150 p-0.5 ${
                  star <= displayStars ? 'text-brand-gold' : 'text-zinc-300'
                } ${!hasRated ? 'cursor-pointer hover:scale-125' : 'cursor-default'}`}
                aria-label={`Rate ${star} out of 5 stars`}
              >
                ★
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}