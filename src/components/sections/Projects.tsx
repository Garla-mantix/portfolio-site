import { motion } from 'framer-motion';
import { projects } from '../../data/projects';

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center gap-6 mb-6">
            <span className="label-mono text-amber">002</span>
            <span className="flex-1 h-px bg-slate" />
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl text-bone mb-4">
            Selected Work
          </h2>
          <p className="text-fog text-sm">
            A curated collection of projects that showcase my approach to
            problem-solving and attention to craft.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Project visual */}
              <div className="w-full">
                <motion.div
                  className="relative aspect-[16/10] bg-charcoal overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Placeholder visual - geometric pattern */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 border border-slate/30 rotate-45" />
                    <div className="absolute w-14 h-14 border border-amber/30 rotate-12" />
                  </div>

                  {/* Overlay with project number */}
                  <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-3 left-3 label-mono text-mist opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-amber/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Project info */}
              <div className="space-y-4 mt-4">
                <div>
                  <span className="label-mono text-amber mb-1 block text-xs">
                    Project {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="heading-display text-xl sm:text-2xl text-bone mb-2">
                    {project.title}
                  </h3>
                  <p className="text-fog text-sm leading-relaxed">{project.description}</p>
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="label-mono text-xs px-2 py-1 border border-slate text-smoke hover:border-amber hover:text-amber transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="label-mono text-xs text-smoke hover:text-amber transition-colors inline-flex items-center gap-1.5 group"
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
                      className="label-mono text-xs text-smoke hover:text-amber transition-colors inline-flex items-center gap-1.5 group"
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
    </section>
  );
}
