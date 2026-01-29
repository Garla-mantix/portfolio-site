import { motion } from 'framer-motion';
import { skills, skillCategories } from '../../data/skills';

export function Skills() {
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categoryOrder = ['language', 'framework', 'tool', 'database'];

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
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
          {categoryOrder.map((category, categoryIndex) => {
            const categorySkills = groupedSkills[category];
            if (!categorySkills) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="label-mono text-amber">
                    {String(categoryIndex + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-lg font-medium text-bone">
                    {skillCategories[category as keyof typeof skillCategories]}
                  </h3>
                  <span className="flex-1 h-px bg-slate" />
                </div>

                {/* Skills list */}
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.03,
                        duration: 0.4,
                      }}
                      whileHover={{
                        scale: 1.05,
                        borderColor: 'var(--color-amber)',
                        color: 'var(--color-amber)',
                      }}
                      className="px-4 py-2 border border-slate text-fog text-sm transition-colors duration-300 cursor-default"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 editorial-rule" />
    </section>
  );
}
