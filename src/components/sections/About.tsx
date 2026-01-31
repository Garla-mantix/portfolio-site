import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 lg:pt-20 relative">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12"
      >
        <div className="flex items-center gap-6 mb-6">
          <span className="label-mono text-amber">001</span>
          <span className="flex-1 h-px bg-slate" />
        </div>
        <h2 className="heading-display text-3xl sm:text-4xl text-bone mb-6">
          About
        </h2>
      </motion.div>

      {/* About content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="space-y-5"
      >
        <p className="text-fog text-base leading-relaxed">
          I'm a developer currently studying .NET Software Development at Newton
          Yrkeshögskola in Sweden. My focus is building robust backend systems
          with C# and .NET, while also creating intuitive web interfaces with
          modern JavaScript frameworks.
        </p>
        <p className="text-fog text-base leading-relaxed">
          I'm actively looking for an internship (LIA) in 2026 where I can apply
          my skills and continue growing as a developer. I'm particularly interested
          in full-stack development, clean architecture, and projects that make
          a real impact.
        </p>
        <p className="text-fog text-base leading-relaxed">
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open source, or tinkering with side projects.
        </p>
      </motion.div>
    </section>
  );
}
