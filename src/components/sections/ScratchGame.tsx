import { motion } from 'framer-motion';

export function ScratchGame() {
  return (
    <section id="scratch-game" className="py-20 relative">
      <div className="relative">
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
            Scratch Game
          </h2>
          <p className="text-fog text-sm">
            A game I made in Scratch. Give it a try.
          </p>
        </motion.div>

        {/* Game container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl"
        >
          <div className="bg-charcoal border border-slate overflow-hidden p-4">
            <iframe
              src="https://scratch.mit.edu/projects/1274079719/embed"
              allowTransparency={true}
              width="485"
              height="402"
              frameBorder="0"
              scrolling="no"
              allowFullScreen
              className="mx-auto block"
              title="Scratch Game"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber" />
          <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-amber" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-amber" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber" />
        </motion.div>
      </div>
    </section>
  );
}
