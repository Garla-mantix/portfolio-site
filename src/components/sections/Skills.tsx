import { motion } from 'framer-motion';
import { skills } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-6">
            <span className="label-mono text-amber">004</span>
            <span className="flex-1 h-px bg-slate" />
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl text-bone mb-4">
            Stack
          </h2>
          <p className="text-fog text-sm">
            Technologies and tools I use.
          </p>
        </motion.div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-2 p-2 rounded-lg bg-dark-900/50 cursor-default"
            >
              {/* Icon container */}
              <div
                className="flex items-center justify-center w-8 h-8 rounded-lg shrink-0"
                style={{ backgroundColor: `${skill.color}20` }}
              >
                <span className="text-sm" style={{ color: skill.color }}>{skill.icon}</span>
              </div>

              {/* Skill name */}
              <span className="text-bone text-xs font-medium">{skill.name}</span>
            </motion.div>
          ))}
        </div>
    </section>
  );
}
