import { AnimatePresence, motion } from 'framer-motion';

export function FullscreenPreviewModal({ isOpen, project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/60 p-4 sm:p-8 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl rounded-3xl border border-black/10 bg-white p-4 sm:p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/[0.08] mb-4">
              <div>
                <h4 className="text-lg font-bold text-zinc-900 tracking-tight">{project.title}</h4>
                <p className="text-xs text-zinc-500">{project.tag}</p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close preview"
                className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="relative max-h-[75vh] overflow-hidden rounded-2xl border border-black/[0.08] bg-zinc-100">
              <img
                src={project.image}
                alt={project.alt || project.title}
                className="mx-auto max-h-[72vh] w-full object-contain"
              />
            </div>

            {project.siteUrl && (
              <div className="mt-4 flex justify-end">
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-zinc-900 text-white font-semibold text-xs hover:bg-black transition-colors"
                >
                  Visit Live Site →
                </a>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function ContactModal({
  isOpen,
  onClose,
  contactIntent,
  setContactIntent,
  contactForm,
  setContactForm,
  onSubmit,
  isSubmitting
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4 sm:p-6 backdrop-blur-md"
        >
          <motion.div
            initial={{ y: 16, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 12, opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-black/10 bg-white p-6 sm:p-9 shadow-2xl overflow-hidden"
          >
            {/* Ambient subtle backlight */}
            <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-brand-blue/[0.08] rounded-full blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 w-60 h-60 bg-brand-gold/[0.06] rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold block mb-1">
                    Direct Contact
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900">
                    Let's Talk
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-zinc-500">
                    Tell us what you want to build. Direct response from Mohd Rameez.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="w-8 h-8 rounded-full border border-black/10 flex items-center justify-center text-zinc-500 hover:text-zinc-900 hover:bg-zinc-100 transition-colors"
                  aria-label="Close dialog"
                >
                  ✕
                </button>
              </div>

              {/* Mode toggles */}
              <div className="flex gap-2 p-1 rounded-full bg-zinc-100 border border-black/[0.06] mb-6">
                <button
                  type="button"
                  onClick={() => setContactIntent('request-call')}
                  className={`flex-1 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    contactIntent === 'request-call'
                      ? 'bg-white text-zinc-900 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Quick Call / Text
                </button>
                <button
                  type="button"
                  onClick={() => setContactIntent('book-appointment')}
                  className={`flex-1 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                    contactIntent === 'book-appointment'
                      ? 'bg-white text-zinc-900 shadow-sm'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  Detailed Message
                </button>
              </div>

              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-600 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Connor"
                    value={contactForm.name}
                    onChange={(e) => setContactForm((prev) => ({ ...prev, name: e.target.value }))}
                    className="w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-blue focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {contactIntent === 'request-call' ? (
                  <>
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-600 uppercase tracking-wider mb-1.5">
                        Phone or Email
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your phone number or email"
                        value={contactForm.contact}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, contact: e.target.value }))}
                        className="w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-blue focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-zinc-600 uppercase tracking-wider mb-1.5">
                        What would you like to build?
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Website / Mobile App / UI/UX Design"
                        value={contactForm.service}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, service: e.target.value }))}
                        className="w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-blue focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex items-center gap-6 pt-1">
                      <span className="text-xs text-zinc-500">How should we reply?</span>
                      <label className="flex items-center gap-2 text-xs text-zinc-700 cursor-pointer">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="call"
                          checked={contactForm.contactPreference === 'call'}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, contactPreference: e.target.value }))}
                          className="text-brand-blue"
                        />
                        Direct Phone Call
                      </label>
                      <label className="flex items-center gap-2 text-xs text-zinc-700 cursor-pointer">
                        <input
                          type="radio"
                          name="contactPreference"
                          value="text"
                          checked={contactForm.contactPreference === 'text'}
                          onChange={(e) => setContactForm((prev) => ({ ...prev, contactPreference: e.target.value }))}
                          className="text-brand-blue"
                        />
                        WhatsApp / Text
                      </label>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-[11px] font-medium text-zinc-600 uppercase tracking-wider mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@company.com"
                        value={contactForm.email}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, email: e.target.value }))}
                        className="w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-blue focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-zinc-600 uppercase tracking-wider mb-1.5">
                        Tell us about your project
                      </label>
                      <textarea
                        required
                        placeholder="Describe what you want to build, what you like, and your goal..."
                        rows={4}
                        value={contactForm.message}
                        onChange={(e) => setContactForm((prev) => ({ ...prev, message: e.target.value }))}
                        className="w-full rounded-xl border border-black/10 bg-zinc-50 px-4 py-3 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-brand-blue focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>
                  </>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-4 py-3.5 rounded-full bg-zinc-900 text-white font-semibold text-sm hover:bg-black transition-all shadow-[0_4px_20px_rgba(0,0,0,0.12)] disabled:opacity-50 cursor-pointer"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message →'}
                </button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function RequestSubmittedModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[95] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
        >
          <motion.div
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-3xl border border-black/10 bg-white p-8 text-center shadow-2xl"
          >
            <div className="w-12 h-12 rounded-full border border-brand-gold/40 bg-brand-gold/10 text-brand-gold flex items-center justify-center mx-auto mb-4 text-xl font-bold">
              ✓
            </div>
            <h4 className="text-2xl font-bold text-zinc-900 tracking-tight">Message Received!</h4>
            <p className="mt-2 text-xs sm:text-sm text-zinc-600 leading-relaxed">
              Thank you for reaching out. Your message has been sent directly to Mohd Rameez. You will receive a reply within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-8 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-black transition-colors shadow-apple cursor-pointer"
            >
              Done
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
