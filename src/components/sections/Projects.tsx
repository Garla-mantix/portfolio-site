import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
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
            <span className="label-mono text-amber">002</span>
            <span className="flex-1 h-px bg-slate" />
          </div>
          <h2 className="heading-display text-4xl sm:text-5xl text-bone mb-4">
            Selected Work
          </h2>
          <p className="text-fog max-w-xl">
            A curated collection of projects that showcase my approach to
            problem-solving and attention to craft.
          </p>
        </motion.div>

        {/* Projects grid - asymmetric layout */}
        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`grid lg:grid-cols-12 gap-8 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Project visual */}
              <div
                className={`lg:col-span-7 ${
                  index % 2 === 1 ? 'lg:col-start-6' : ''
                }`}
              >
                <motion.div
                  className="relative aspect-[16/10] bg-charcoal overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Placeholder visual - geometric pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border border-slate/30 rotate-45" />
                    <div className="absolute w-24 h-24 border border-amber/30 rotate-12" />
                  </div>

                  {/* Overlay with project number */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 label-mono text-mist opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-amber/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Project info */}
              <div
                className={`lg:col-span-5 space-y-6 ${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1 lg:text-right' : ''
                }`}
              >
                <div>
                  <span className="label-mono text-amber mb-2 block">
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="heading-display text-2xl sm:text-3xl text-bone mb-4">
                    {project.title}
                  </h3>
                  <p className="text-fog leading-relaxed">{project.description}</p>
                </div>

                {/* Tech stack */}
                <div
                  className={`flex flex-wrap gap-2 ${
                    index % 2 === 1 ? 'lg:justify-end' : ''
                  }`}
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="label-mono px-3 py-1.5 border border-slate text-smoke hover:border-amber hover:text-amber transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div
                  className={`flex items-center gap-6 ${
                    index % 2 === 1 ? 'lg:justify-end' : ''
                  }`}
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono text-smoke hover:text-amber transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>Source</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono text-smoke hover:text-amber transition-colors inline-flex items-center gap-2 group"
                    >
                      <span>Live</span>
                      <span className="group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 editorial-rule" />
    </section>
  );
}
