import { motion } from 'framer-motion';

interface GameDisplayProps {
  words: string[];
  currentWordIndex: number;
  userInput: string;
}

export function GameDisplay({ words, currentWordIndex, userInput }: GameDisplayProps) {
  return (
    <div className="bg-dark-900 border border-dark-800 rounded-xl p-6 mb-6">
      <div className="flex flex-wrap gap-3 font-mono text-lg">
        {words.map((word, wordIndex) => (
          <motion.span
            key={wordIndex}
            initial={{ opacity: 0.5 }}
            animate={{
              opacity: wordIndex === currentWordIndex ? 1 : wordIndex < currentWordIndex ? 0.4 : 0.6,
              scale: wordIndex === currentWordIndex ? 1.05 : 1,
            }}
            className={`px-2 py-1 rounded ${
              wordIndex === currentWordIndex
                ? 'bg-dark-800'
                : wordIndex < currentWordIndex
                ? 'text-dark-500'
                : ''
            }`}
          >
            {wordIndex === currentWordIndex ? (
              word.split('').map((char, charIndex) => {
                let colorClass = 'text-dark-400';
                if (charIndex < userInput.length) {
                  colorClass = userInput[charIndex] === char
                    ? 'text-green-400'
                    : 'text-red-400';
                }
                return (
                  <span key={charIndex} className={colorClass}>
                    {char}
                  </span>
                );
              })
            ) : (
              word
            )}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
