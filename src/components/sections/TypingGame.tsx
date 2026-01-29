import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTypingGame } from '../../hooks/useTypingGame';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import type { HighScore } from '../../types';

export function TypingGame() {
  const {
    state,
    startGame,
    handleInputChange,
    submitWord,
    resetGame,
    wpm,
    accuracy,
  } = useTypingGame();

  const [highScore, setHighScore] = useLocalStorage<HighScore | null>('typing-high-score', null);
  const [finishedGameResult, setFinishedGameResult] = useState<{
    wpm: number;
    accuracy: number;
    isNewHighScore: boolean;
  } | null>(null);

  const handleWordSubmit = useCallback(() => {
    submitWord();

    const isLastWord = state.currentWordIndex === state.words.length - 1;
    if (isLastWord && state.status === 'playing') {
      setTimeout(() => {
        const finalWpm = wpm;
        const finalAccuracy = accuracy;
        const isNewHigh = !highScore || finalWpm > highScore.wpm;

        if (isNewHigh) {
          setHighScore({
            wpm: finalWpm,
            accuracy: finalAccuracy,
            date: new Date().toISOString(),
          });
        }

        setFinishedGameResult({
          wpm: finalWpm,
          accuracy: finalAccuracy,
          isNewHighScore: isNewHigh,
        });
      }, 50);
    }
  }, [submitWord, state.currentWordIndex, state.words.length, state.status, wpm, accuracy, highScore, setHighScore]);

  const handlePlayAgain = () => {
    setFinishedGameResult(null);
    resetGame();
  };

  const displayWpm = finishedGameResult?.wpm ?? wpm;
  const displayAccuracy = finishedGameResult?.accuracy ?? accuracy;
  const isNewHighScore = finishedGameResult?.isNewHighScore ?? false;

  return (
    <section id="typing-game" className="py-32 relative bg-void">
      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(224, 122, 45, 0.03) 2px, rgba(224, 122, 45, 0.03) 4px)',
          }}
        />
      </div>

      <div className="section-container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center gap-6 mb-6">
            <span className="label-mono text-amber">003</span>
            <span className="flex-1 h-px bg-slate" />
          </div>
          <h2 className="heading-display text-4xl sm:text-5xl text-bone mb-4">
            Terminal
          </h2>
          <p className="text-fog max-w-xl">
            Test your typing speed. Developer vocabulary. No mistakes allowed.
          </p>
        </motion.div>

        {/* Terminal container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Terminal window */}
            <div className="bg-charcoal border border-slate overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate bg-graphite">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-amber/60" />
                  <div className="w-3 h-3 rounded-full bg-slate" />
                  <div className="w-3 h-3 rounded-full bg-slate" />
                </div>
                <span className="label-mono text-smoke">typing_test.sh</span>
                <div className="w-16" />
              </div>

              {/* Terminal content */}
              <div className="p-6 min-h-[400px] font-mono">
                <AnimatePresence mode="wait">
                  {state.status === 'idle' && (
                    <motion.div
                      key="idle"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="space-y-4 mb-8">
                        <p className="text-smoke">
                          <span className="text-amber">$</span> ./typing_test --words 15
                        </p>
                        <div className="text-fog space-y-1 text-sm">
                          <p>→ Type each word and press SPACE to submit</p>
                          <p>→ Complete all words as fast as possible</p>
                          <p>→ Accuracy matters</p>
                        </div>
                        {highScore && (
                          <p className="text-smoke text-sm">
                            <span className="text-amber">HIGH_SCORE:</span> {highScore.wpm} WPM / {highScore.accuracy}% ACC
                          </p>
                        )}
                      </div>
                      <motion.button
                        onClick={startGame}
                        className="label-mono px-6 py-3 border border-amber text-amber hover:bg-amber hover:text-void transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Initialize
                      </motion.button>
                    </motion.div>
                  )}

                  {state.status === 'countdown' && (
                    <motion.div
                      key="countdown"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-center h-[300px]"
                    >
                      <motion.span
                        key={state.countdown}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 2, opacity: 0 }}
                        className="heading-display text-9xl text-amber"
                      >
                        {state.countdown}
                      </motion.span>
                    </motion.div>
                  )}

                  {state.status === 'playing' && (
                    <motion.div
                      key="playing"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      {/* Stats bar */}
                      <div className="flex items-center justify-between text-sm border-b border-slate pb-4">
                        <div className="flex items-center gap-6">
                          <span className="text-smoke">
                            <span className="text-amber">WPM:</span> {wpm}
                          </span>
                          <span className="text-smoke">
                            <span className="text-amber">ACC:</span> {accuracy}%
                          </span>
                        </div>
                        <span className="text-smoke">
                          {state.currentWordIndex}/{state.words.length}
                        </span>
                      </div>

                      {/* Words display */}
                      <div className="py-6">
                        <div className="flex flex-wrap gap-3 text-xl">
                          {state.words.map((word, wordIndex) => (
                            <span
                              key={wordIndex}
                              className={`px-2 py-1 transition-all duration-200 ${
                                wordIndex === state.currentWordIndex
                                  ? 'bg-slate text-bone'
                                  : wordIndex < state.currentWordIndex
                                  ? 'text-ash line-through'
                                  : 'text-smoke'
                              }`}
                            >
                              {wordIndex === state.currentWordIndex
                                ? word.split('').map((char, charIndex) => {
                                    let color = 'text-fog';
                                    if (charIndex < state.userInput.length) {
                                      color =
                                        state.userInput[charIndex] === char
                                          ? 'text-amber'
                                          : 'text-red-500';
                                    }
                                    return (
                                      <span key={charIndex} className={color}>
                                        {char}
                                      </span>
                                    );
                                  })
                                : word}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Input */}
                      <div className="flex items-center gap-2 text-lg">
                        <span className="text-amber">{'>'}</span>
                        <input
                          type="text"
                          value={state.userInput}
                          onChange={(e) => handleInputChange(e.target.value)}
                          onKeyDown={(e) => {
                            if ((e.key === ' ' || e.key === 'Enter') && state.userInput.trim()) {
                              e.preventDefault();
                              handleWordSubmit();
                            }
                          }}
                          className="flex-1 bg-transparent text-bone outline-none caret-amber"
                          autoFocus
                          autoComplete="off"
                          autoCapitalize="off"
                          spellCheck={false}
                        />
                        <span className="w-2 h-5 bg-amber animate-pulse" />
                      </div>
                    </motion.div>
                  )}

                  {state.status === 'finished' && (
                    <motion.div
                      key="finished"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-8"
                    >
                      <div className="space-y-2">
                        <p className="text-smoke">
                          <span className="text-amber">$</span> cat results.log
                        </p>
                        {isNewHighScore && (
                          <motion.p
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="text-amber"
                          >
                            ★ NEW HIGH SCORE ★
                          </motion.p>
                        )}
                      </div>

                      <div className="grid grid-cols-2 gap-8 py-8 border-y border-slate">
                        <div>
                          <p className="label-mono text-smoke mb-2">Words Per Minute</p>
                          <p className="heading-display text-5xl text-amber">{displayWpm}</p>
                        </div>
                        <div>
                          <p className="label-mono text-smoke mb-2">Accuracy</p>
                          <p className="heading-display text-5xl text-bone">{displayAccuracy}%</p>
                        </div>
                      </div>

                      <motion.button
                        onClick={handlePlayAgain}
                        className="label-mono px-6 py-3 border border-amber text-amber hover:bg-amber hover:text-void transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Run Again
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t border-l border-amber" />
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t border-r border-amber" />
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b border-l border-amber" />
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b border-r border-amber" />
          </motion.div>
        </div>
      </div>

      {/* Bottom rule */}
      <div className="absolute bottom-0 left-0 right-0 editorial-rule" />
    </section>
  );
}
