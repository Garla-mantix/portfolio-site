import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-32 relative">
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
            <span className="label-mono text-amber">004</span>
            <span className="flex-1 h-px bg-slate" />
          </div>
          <h2 className="heading-display text-4xl sm:text-5xl text-bone mb-4">
            Stack
          </h2>
          <p className="text-fog max-w-xl">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2.5 p-2.5 rounded-lg bg-dark-900/50 cursor-default"
            >
              {/* Icon container */}
              <div
                className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <span style={{ color: skill.color }}>{skill.icon}</span>
              </div>

              {/* Skill name */}
              <span className="text-bone text-sm font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 editorial-rule" />
    </section>
  );
}
