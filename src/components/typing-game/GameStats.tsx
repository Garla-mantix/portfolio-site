import { motion } from 'framer-motion';

interface GameStatsProps {
  wpm: number;
  accuracy: number;
  wordsCompleted: number;
  totalWords: number;
}

export function GameStats({ wpm, accuracy, wordsCompleted, totalWords }: GameStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-dark-900 border border-dark-800 rounded-lg p-4 text-center"
      >
        <p className="text-dark-500 text-sm mb-1">WPM</p>
        <p className="text-2xl font-bold text-accent font-mono">{wpm}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-dark-900 border border-dark-800 rounded-lg p-4 text-center"
      >
        <p className="text-dark-500 text-sm mb-1">Accuracy</p>
        <p className="text-2xl font-bold text-green-400 font-mono">{accuracy}%</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-dark-900 border border-dark-800 rounded-lg p-4 text-center"
      >
        <p className="text-dark-500 text-sm mb-1">Progress</p>
        <p className="text-2xl font-bold text-dark-100 font-mono">
          {wordsCompleted}/{totalWords}
        </p>
      </motion.div>
    </div>
  );
}
