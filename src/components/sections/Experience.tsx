import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-32 relative">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-6 mb-6">
            <span className="label-mono text-amber">005</span>
            <span className="flex-1 h-px bg-slate" />
          </div>
          <h2 className="heading-display text-4xl sm:text-5xl text-bone mb-4">
            Journey
          </h2>
          <p className="text-fog max-w-xl">
            A timeline of my coding journey so far.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-slate md:-translate-x-px" />

          <div className="space-y-16">
            {experience.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? '' : 'md:direction-rtl'
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-0 md:left-1/2 top-0 md:-translate-x-1/2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="w-4 h-4 bg-ink border-2 border-amber"
                  />
                </div>

                {/* Content */}
                <div
                  className={`pl-10 md:pl-0 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:col-start-2 md:pl-16'
                  }`}
                >
                  {/* Period */}
                  <span className="label-mono text-amber">{exp.period}</span>

                  {/* Role & Company */}
                  <h3 className="heading-display text-2xl text-bone mt-2 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-fog font-medium mb-4">{exp.company}</p>

                  {/* Description */}
                  <p className="text-smoke mb-6 leading-relaxed">{exp.description}</p>

                  {/* Highlights */}
                  <ul
                    className={`space-y-2 ${
                      index % 2 === 0 ? 'md:ml-auto md:text-right' : ''
                    }`}
                  >
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 + 0.3 }}
                        className={`text-sm text-fog flex items-start gap-3 ${
                          index % 2 === 0 ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        <span className="text-amber mt-0.5">◆</span>
                        <span>{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Empty column for layout */}
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
