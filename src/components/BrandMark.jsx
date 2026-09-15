import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function BrandMark({ brandLogo, large = false }) {
  return (
    <Link to="/" className="group inline-flex items-center gap-3">
      <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-black/10 bg-white transition-all duration-300 group-hover:border-brand-blue group-hover:shadow-[0_0_15px_rgba(0,113,227,0.2)]">
        <img
          src={brandLogo}
          alt="EssenziaT Digital"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-black/5" />
      </div>
      <div className="flex flex-col text-left">
        <span className={`font-bold tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-brand-blue ${large ? 'text-lg' : 'text-sm'}`}>
          ESSENZIAT
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-400 group-hover:text-zinc-600 transition-colors">
          Digital Studio
        </span>
      </div>
    </Link>
  );
}