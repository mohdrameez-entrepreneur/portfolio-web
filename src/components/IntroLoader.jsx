import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function IntroLoader({ brandLogo, onComplete }) {
  const [hasLanded, setHasLanded] = useState(false);
  const [isColorFilled, setIsColorFilled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 1. Logo lands and bounces at ~380ms
    const tLand = setTimeout(() => {
      setHasLanded(true);
    }, 380);

    // 2. Liquid vibrant color fill blooms at ~650ms
    const tColor = setTimeout(() => {
      setIsColorFilled(true);
    }, 650);

    // 3. As soon as it is filled and appreciated, smoothly reveal the web at ~1850ms
    const tOpen = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 1850);

    return () => {
      clearTimeout(tLand);
      clearTimeout(tColor);
      clearTimeout(tOpen);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="welcoming-curtain"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: 'blur(8px)',
            transition: { duration: 0.55, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-zinc-900 select-none overflow-hidden"
        >
          {/* Luminous ambient aura that intensifies on color fill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{
              opacity: isColorFilled ? 0.9 : 0.2,
              scale: isColorFilled ? 1.25 : 0.85
            }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-blue/[0.09] rounded-full blur-[140px]"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isColorFilled ? 0.75 : 0.1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="pointer-events-none absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-brand-gold/[0.08] rounded-full blur-[120px]"
          />

          {/* Welcoming Stage */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            
            {/* Logo Container: Drops from above & bounces in a pure circle */}
            <div className="relative mb-6 flex items-center justify-center">
              
              {/* Shockwave Ring on Bounce */}
              {hasLanded && (
                <motion.div
                  initial={{ scale: 0.6, opacity: 0.9 }}
                  animate={{ scale: 2.6, opacity: 0 }}
                  transition={{ duration: 0.85, ease: 'easeOut' }}
                  className="absolute w-28 h-28 rounded-full border-2 border-brand-blue/40 pointer-events-none"
                />
              )}

              {/* Radiant Glow Burst on Color Fill */}
              {isColorFilled && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1.35, opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="absolute -inset-4 rounded-full bg-gradient-to-tr from-brand-blue/30 via-brand-gold/25 to-brand-blue/20 blur-xl pointer-events-none"
                />
              )}

              {/* Bouncing Logo Card in Pure Circle */}
              <motion.div
                initial={{ y: -400, rotate: -15, scale: 0.7, opacity: 0 }}
                animate={{
                  y: 0,
                  rotate: 0,
                  scale: 1,
                  opacity: 1
                }}
                transition={{
                  type: 'spring',
                  stiffness: 160,
                  damping: 9.5,
                  mass: 0.95
                }}
                className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden border border-black/10 bg-white p-2.5 shadow-[0_15px_40px_rgba(0,0,0,0.12)] flex items-center justify-center"
              >
                {/* Logo Image in Pure Circle */}
                <motion.img
                  src={brandLogo}
                  alt="Essenziat Digital Logo"
                  initial={{ filter: 'grayscale(100%) opacity(0.35)' }}
                  animate={{
                    filter: isColorFilled
                      ? 'grayscale(0%) opacity(1)'
                      : 'grayscale(100%) opacity(0.45)'
                  }}
                  transition={{ duration: 0.55, ease: 'easeInOut' }}
                  className="w-full h-full object-cover rounded-full"
                />

                {/* Color Sweep Light Reflection */}
                {isColorFilled && (
                  <motion.div
                    initial={{ x: '-120%', opacity: 0 }}
                    animate={{ x: '160%', opacity: 0.85 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                    className="pointer-events-none absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/80 to-transparent skew-x-12"
                  />
                )}
              </motion.div>
            </div>

            {/* Welcoming Text: Minimal & Elegant */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.45, ease: 'easeOut' }}
              className="flex flex-col items-center"
            >
              <span className="text-xs uppercase tracking-[0.35em] font-semibold text-brand-gold mb-1.5 block">
                ✦ WELCOME TO ✦
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 mb-1.5">
                ESSENZIAT DIGITAL
              </h1>
              <p className="text-xs sm:text-sm font-medium text-zinc-500 tracking-wide">
                Mohd Rameez · Digital Space
              </p>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
