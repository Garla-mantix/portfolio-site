import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Terminal', href: '#typing-game' },
  { label: 'Stack', href: '#skills' },
  { label: 'Journey', href: '#experience' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/90 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-20">
          {/* Logo mark */}
          <motion.a
            href="#"
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="heading-display text-2xl text-bone tracking-tight">
              LP
            </span>
            <motion.span
              className="absolute -bottom-1 left-0 h-0.5 bg-amber"
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navItems.map((item, i) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
              >
                <a
                  href={item.href}
                  className="label-mono text-smoke hover:text-bone transition-colors duration-300 relative group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-amber group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Contact CTA */}
          <motion.a
            href="mailto:luca.severino.pirro@gmail.com"
            className="label-mono px-5 py-2.5 border border-slate text-mist hover:border-amber hover:text-amber transition-all duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact
          </motion.a>
        </div>
      </nav>

      {/* Bottom border that fades in on scroll */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px bg-slate transition-opacity duration-500 ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </motion.header>
  );
}
