import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function FooterSection({ BrandMarkComponent, brandLogo }) {
  return (
    <footer className="w-full border-t border-black/[0.08] bg-white py-16 text-xs text-zinc-500">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-black/[0.06]">
          {/* Brand & Mission */}
          <div className="flex flex-col gap-3 max-w-xs">
            <BrandMarkComponent brandLogo={brandLogo} />
            <p className="text-zinc-600 text-xs leading-relaxed font-normal">
              We build super fast websites, clean mobile apps, and beautiful UI/UX designs that help your business grow.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-7 text-xs font-semibold text-zinc-600">
            <Link to="/" className="hover:text-zinc-900 transition-colors">Home</Link>
            <a href="/#work" className="hover:text-zinc-900 transition-colors">Ventures</a>
            <Link to="/services" className="hover:text-zinc-900 transition-colors">Capabilities</Link>
            <Link to="/about" className="hover:text-zinc-900 transition-colors">Story</Link>
          </div>

          {/* Distinct Studio & Founder Social Channels */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6">
            {/* Firm / Studio Channel */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Firm / Studio
              </span>
              <motion.a
                href="https://www.instagram.com/essenziat.digital/"
                target="_blank"
                rel="noopener noreferrer"
                title="Essenziat Digital Official Instagram"
                aria-label="Essenziat Digital Instagram"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/[0.08] bg-zinc-50 hover:bg-white hover:border-black/20 text-zinc-700 hover:text-zinc-950 text-xs font-medium transition-all shadow-2xs group"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current text-zinc-500 group-hover:text-brand-blue transition-colors" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.62a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                </svg>
                <span>@essenziat.digital</span>
                <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded bg-brand-blue/10 text-brand-blue tracking-wider">
                  Firm
                </span>
              </motion.a>
            </div>

            {/* Founder / Personal Channels */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Founder
              </span>
              <div className="flex items-center gap-1.5">
                <motion.a
                  href="https://www.instagram.com/mohd.ram33z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mohd Rameez Personal Instagram"
                  aria-label="Mohd Rameez Personal Instagram"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/[0.08] bg-zinc-50 hover:bg-white hover:border-black/20 text-zinc-700 hover:text-zinc-950 text-xs font-medium transition-all shadow-2xs group"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current text-zinc-500 group-hover:text-brand-gold transition-colors" aria-hidden="true">
                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.62a1.13 1.13 0 1 1 0 2.26 1.13 1.13 0 0 1 0-2.26ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
                  </svg>
                  <span>@mohd.ram33z</span>
                  <span className="text-[9px] font-semibold uppercase px-1.5 py-0.5 rounded bg-brand-gold/15 text-brand-gold tracking-wider">
                    Personal
                  </span>
                </motion.a>

                <motion.a
                  href="https://www.linkedin.com/in/mohdram33z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mohd Rameez on LinkedIn"
                  aria-label="Mohd Rameez on LinkedIn"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-8 h-8 rounded-full border border-black/[0.08] bg-zinc-50 hover:bg-white hover:border-black/20 flex items-center justify-center text-zinc-600 hover:text-[#0A66C2] transition-colors shadow-2xs"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                    <path d="M6.5 8.5A1.75 1.75 0 1 1 6.5 5a1.75 1.75 0 0 1 0 3.5ZM5 10h3v9H5v-9Zm5 0h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7V19h-3v-4c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19h-3v-9Z" />
                  </svg>
                </motion.a>

                <motion.a
                  href="https://x.com/MohdRam33z"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Mohd Rameez on X"
                  aria-label="Mohd Rameez on X"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  className="w-8 h-8 rounded-full border border-black/[0.08] bg-zinc-50 hover:bg-white hover:border-black/20 flex items-center justify-center text-zinc-600 hover:text-zinc-950 transition-colors shadow-2xs"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
                    <path d="m4 4 6.2 8.3L4.4 20h2.2l4.6-6 4.5 6h4.3l-6.5-8.6L19 4h-2.2l-4.2 5.5L8.4 4H4Z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 text-[11px]">
          <p>&copy; {new Date().getFullYear()} ESSENZIAT DIGITAL · ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-zinc-600">Global Remote · New Delhi</span>
            </span>
            <span>·</span>
            <span className="text-zinc-700 font-medium">Founder: Mohd Rameez</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
