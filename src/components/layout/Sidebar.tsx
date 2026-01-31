import { motion } from 'framer-motion';
import { useActiveSection } from '../../hooks/useActiveSection';

const navItems = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Work', href: '#projects', id: 'projects' },
  { label: 'Terminal', href: '#typing-game', id: 'typing-game' },
  { label: 'Stack', href: '#skills', id: 'skills' },
  { label: 'Journey', href: '#experience', id: 'experience' },
];

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/garla-mantix', icon: 'gh' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/luca-pirro-bb9709369/', icon: 'li' },
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
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center text-smoke hover:text-amber transition-colors duration-300 border border-slate hover:border-amber"
            aria-label={link.name}
          >
            <span className="label-mono text-xs">{link.icon}</span>
          </a>
        ))}
        <a
          href="mailto:luca.severino.pirro@gmail.com"
          className="label-mono px-4 py-2 border border-slate text-smoke hover:border-amber hover:text-amber transition-all duration-300"
        >
          Contact
        </a>
      </motion.div>
    </header>
  );
}
