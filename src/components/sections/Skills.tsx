import { motion } from 'framer-motion';
import { skills, skillCategories } from '../../data/skills';
import type { Skill } from '../../types';

const categoryOrder: Array<Skill['category']> = ['language', 'framework', 'utility'];

export function Skills() {
  const groupedSkills = categoryOrder.reduce((acc, category) => {
    acc[category] = skills.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<Skill['category'], typeof skills>);

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

      {/* Skills by category */}
      <div className="space-y-8">
        {categoryOrder.map((category, categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
          >
            <h3 className="label-mono text-fog mb-3">
              {skillCategories[category]}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2.5">
              {groupedSkills[category].map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.35 }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(138, 173, 244, 0.3)',
                  }}
                  className="group flex items-center gap-3 px-3.5 py-3 rounded-xl bg-charcoal/80 border border-graphite/60 cursor-default transition-colors duration-200"
                >
                  {/* Icon container */}
                  <div
                    className="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 transition-transform duration-200 group-hover:scale-105"
                    style={{ backgroundColor: `${skill.color}18` }}
                  >
                    <span
                      className="flex items-center justify-center w-5 h-5"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </span>
                  </div>

                  {/* Skill name */}
                  <span className="text-bone text-sm font-medium tracking-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
