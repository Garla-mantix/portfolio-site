import { motion } from 'framer-motion';

const links = [
  { label: 'GitHub', url: 'https://github.com' },
  { label: 'LinkedIn', url: 'https://linkedin.com' },
  { label: 'Twitter', url: 'https://twitter.com' },
  { label: 'Email', url: 'mailto:hello@example.com' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-slate">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-12 items-end">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="heading-display text-3xl text-bone">YN</span>
            <p className="text-smoke mt-4 text-sm leading-relaxed">
              Software engineer crafting digital experiences with meticulous
              attention to detail.
            </p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap gap-x-8 gap-y-2 md:justify-center"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="label-mono text-smoke hover:text-amber transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:text-right"
          >
            <p className="label-mono text-ash">
              &copy; {currentYear} Your Name
            </p>
            <p className="label-mono text-ash mt-1">
              Built with precision
            </p>
          </motion.div>
        </div>

        {/* Decorative bottom element */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 h-px bg-gradient-to-r from-transparent via-amber to-transparent origin-center"
        />
      </div>
    </footer>
  );
}
