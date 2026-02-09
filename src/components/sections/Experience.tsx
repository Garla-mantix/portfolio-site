import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-6">
            <span className="label-mono text-amber">006</span>
            <span className="flex-1 h-px bg-slate" />
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl text-bone mb-4">
            Journey
          </h2>
          <p className="text-fog text-sm">
            A timeline of my coding journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-slate" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8"
              >
                {/* Timeline node */}
                <div className="absolute left-0 top-0 -translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="w-3 h-3 bg-ink border-2 border-amber"
                  />
                </div>

                {/* Content */}
                <div>
                  {/* Period */}
                  <span className="label-mono text-amber text-xs">{exp.period}</span>

                  {/* Role & Company */}
                  <h3 className="heading-display text-lg text-bone mt-1 mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-fog text-sm font-medium mb-3">{exp.company}</p>

                  {/* Description */}
                  <p className="text-smoke text-sm mb-4 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                        className="text-xs text-fog flex items-start gap-2"
                      >
                        <span className="text-amber mt-0.5 text-xs">◆</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Glowing bottom line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 h-px bg-linear-to-r from-transparent via-amber to-transparent origin-center"
        />
    </section>
  );
}
