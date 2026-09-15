import { AnimatePresence, motion } from 'framer-motion';

export default function FAQSection({ faqs, openFaqIndex, setOpenFaqIndex }) {
  return (
    <section className="relative py-24 sm:py-32 px-5 sm:px-8 bg-zinc-50/40 border-t border-black/[0.06]">
      <div className="mx-auto max-w-3xl relative z-10">
        <div className="mb-14 sm:mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-400 block mb-3">
            Clarity & Transparency
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-900 mb-4">
            Frequently answered questions.
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base">
            Everything you need to know about engineering sprints and partnership with Essenziat Digital.
          </p>
        </div>

        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div key={faq.question} className="py-5 sm:py-6 transition-colors">
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex((prev) => (prev === index ? -1 : index))}
                  className="flex w-full items-center justify-between text-left group gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                    isOpen ? 'text-brand-blue' : 'text-zinc-900 group-hover:text-brand-blue'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen
                      ? 'border-zinc-900 bg-zinc-900 text-white rotate-45'
                      : 'border-black/10 bg-white text-zinc-600 group-hover:border-black/30 group-hover:text-zinc-900 shadow-2xs'
                  }`}>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-xs sm:text-sm leading-relaxed text-zinc-600 font-normal">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}