import { motion } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Terminal', href: '#typing-game', id: 'typing-game' },
  { label: 'Glob', href: '#scratch-game', id: 'scratch-game' },
  { label: 'Stack', href: '#skills', id: 'skills' },
  { label: 'Journey', href: '#experience', id: 'experience' },
];


export function Sidebar() {
  const activeSection = useActiveSection();

  return (
    <header className="lg:sticky lg:top-0 lg:h-screen lg:flex lg:flex-col lg:justify-between py-12 lg:py-20">
      <div>
        {/* Profile section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          {/* Profile photo */}
          <div className="relative w-24 h-24 mb-6 overflow-hidden rounded-full border-2 border-slate">
            <img
              src="/profile.jpg"
              alt="Luca Pirro"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name and title */}
          <h1 className="heading-display text-4xl lg:text-5xl text-bone mb-2">
            Luca Pirro
          </h1>
          <p className="text-xl text-fog mb-4">
            .NET & Web Developer
          </p>
          <p className="text-smoke text-sm lg:max-w-xs leading-relaxed">
            Currently studying .NET Software Development at Newton Yrkeshögskola.
            Looking for internship (LIA) 2026.
          </p>
        </motion.div>

        {/* Navigation - hidden on mobile */}
        <nav className="hidden lg:block mb-8">
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-1"
          >
            {navItems.map((item, i) => {
              const isActive = activeSection === item.id;
              return (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * i + 0.3, duration: 0.4 }}
                >
                  <a
                    href={item.href}
                    className="group flex items-center gap-4 py-2"
                  >
                    {/* Line indicator */}
                    <span
                      className={`h-px transition-all duration-300 ${
                        isActive
                          ? 'w-16 bg-amber'
                          : 'w-8 bg-slate group-hover:w-16 group-hover:bg-fog'
                      }`}
                    />
                    {/* Label */}
                    <span
                      className={`label-mono transition-colors duration-300 ${
                        isActive
                          ? 'text-amber'
                          : 'text-smoke group-hover:text-bone'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </motion.li>
              );
            })}
          </motion.ul>
        </nav>
      </div>

      {/* Social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex items-center gap-4"
      >
        <a
          href="https://github.com/garla-mantix"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-smoke hover:text-amber transition-colors duration-300 border border-slate hover:border-amber"
          aria-label="GitHub"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/luca-pirro-bb9709369/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center text-smoke hover:text-amber transition-colors duration-300 border border-slate hover:border-amber"
          aria-label="LinkedIn"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a
          href="mailto:luca.severino.pirro@gmail.com"
          className="w-10 h-10 flex items-center justify-center text-smoke hover:text-amber transition-colors duration-300 border border-slate hover:border-amber"
          aria-label="Email"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </a>
      </motion.div>
    </header>
  );
}
