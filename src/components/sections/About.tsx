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
          About me
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
          Computers have always been a hobby of mine, but when it came to choosing a
          career I looked elsewhere - until last year. 
        </p>
        <p className="text-fog text-base leading-relaxed">
          I started off by familiarizing myself with computer science fundamentals
          through Harvard University's course CS50, and quickly got hooked on the art of 
          problem solving and systematic thinking.
        </p>
        <p className="text-fog text-base leading-relaxed">
          Since then, I've completed a 5-month, full-time frontend development course, which
          solidified my decision to dive head-first into the world of software development.
          But it also sparked my curiosity for backend systems and the workings behind the scenes.
        </p>
        <p className="text-fog text-base leading-relaxed">
          As of now I am pursuing a 2-year .NET Software Development program, where I try to
          wrap my head around clean architecture, full-stack development, and all things C#.
        </p>
      </motion.div>
    </section>
  );
}
