import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface TimelineItemProps {
  children: ReactNode;
  isLast?: boolean;
  index: number;
}

export function TimelineItem({ children, isLast = false, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-8"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-dark-700" />
      )}

      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
        className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-dark-900 border-2 border-accent flex items-center justify-center"
      >
        <div className="w-2 h-2 rounded-full bg-accent" />
      </motion.div>

      {children}
    </motion.div>
  );
}

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return <div className="relative">{children}</div>;
}
