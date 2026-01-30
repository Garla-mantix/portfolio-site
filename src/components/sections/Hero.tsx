import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/garla-mantix', icon: 'gh' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/luca-pirro-bb9709369/', icon: 'li' },
];

export function Hero() {
  return (
    <section id="about" className="min-h-screen relative overflow-hidden">
      {/* Ambient background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink to-charcoal" />
      <div className="absolute top-1/4 -right-1/4 w-1/2 h-1/2 bg-amber/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 -left-1/4 w-1/3 h-1/3 bg-amber/3 rounded-full blur-[100px]" />

      <div className="section-container relative pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Text content - takes 7 columns */}
          <motion.div
            className="lg:col-span-7 space-y-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="flex items-center gap-4"
            >
              <span className="w-12 h-px bg-amber" />
              <span className="label-mono text-amber">Software Developer</span>
            </motion.div>

            {/* Main heading */}
            <div className="space-y-2">
              <motion.h1
                className="heading-display text-5xl sm:text-6xl lg:text-7xl text-bone"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                Luca Pirro
              </motion.h1>
              <motion.p
                className="heading-display text-3xl sm:text-4xl lg:text-5xl text-smoke"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                .NET & Web Developer
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              className="text-fog text-lg max-w-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Currently studying .NET Software Development at Newton Yrkeshögskola
              and looking for internship (LIA) 2026.
            </motion.p>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center text-smoke hover:text-amber transition-colors duration-300 relative group"
                  whileHover={{ y: -2 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                >
                  <span className="label-mono text-xs">{link.icon}</span>
                  <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-amber scale-0 group-hover:scale-100 transition-transform" />
                </motion.a>
              ))}
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              className="pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href="#projects" className="inline-flex items-center gap-3 group">
                <span className="label-mono text-smoke group-hover:text-amber transition-colors">
                  Scroll to explore
                </span>
                <motion.span
                  className="text-amber"
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  ↓
                </motion.span>
              </a>
            </motion.div>
          </motion.div>

          {/* Image - takes 5 columns */}
          <motion.div
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-slate/50" />
              <div className="absolute -inset-8 border border-slate/20" />

              {/* Corner accents */}
              <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-amber" />
              <div className="absolute -top-4 -right-4 w-8 h-8 border-t-2 border-r-2 border-amber" />
              <div className="absolute -bottom-4 -left-4 w-8 h-8 border-b-2 border-l-2 border-amber" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-amber" />

              {/* Image container */}
              <motion.div
                className="relative w-full h-full overflow-hidden bg-charcoal"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
                {/* Subtle amber overlay on hover */}
                <div className="absolute inset-0 bg-amber/0 hover:bg-amber/10 transition-colors duration-500" />
              </motion.div>

              {/* Film frame number */}
              <div className="absolute -bottom-10 right-0 label-mono text-slate">
                001 / 2025
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 editorial-rule" />
    </section>
  );
}
