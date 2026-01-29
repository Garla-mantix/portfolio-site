import { motion } from 'framer-motion';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const baseStyles = 'inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-md transition-colors';

  const variants = {
    default: 'bg-dark-800 text-dark-200 hover:bg-dark-700',
    outline: 'border border-dark-700 text-dark-300 hover:border-dark-500',
  };

  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </motion.span>
  );
}
