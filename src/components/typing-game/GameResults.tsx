import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import type { HighScore } from '../../types';

interface GameResultsProps {
  wpm: number;
  accuracy: number;
  highScore: HighScore | null;
  isNewHighScore: boolean;
  onPlayAgain: () => void;
}

export function GameResults({ wpm, accuracy, highScore, isNewHighScore, onPlayAgain }: GameResultsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-dark-900 border border-dark-800 rounded-xl p-8 text-center"
    >
      {isNewHighScore && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', bounce: 0.5 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">
            New High Score!
          </span>
        </motion.div>
      )}

      <h3 className="text-2xl font-bold text-dark-100 mb-6">Game Over!</h3>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <div>
          <p className="text-dark-500 text-sm mb-1">Your WPM</p>
          <p className="text-4xl font-bold text-accent font-mono">{wpm}</p>
        </div>
        <div>
          <p className="text-dark-500 text-sm mb-1">Accuracy</p>
          <p className="text-4xl font-bold text-green-400 font-mono">{accuracy}%</p>
        </div>
      </div>

      {highScore && !isNewHighScore && (
        <p className="text-dark-500 text-sm mb-6">
          Best: {highScore.wpm} WPM ({highScore.accuracy}% accuracy)
        </p>
      )}

      <Button onClick={onPlayAgain} size="lg">
        Play Again
      </Button>
    </motion.div>
  );
}
