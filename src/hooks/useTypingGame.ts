import { useReducer, useCallback, useEffect } from 'react';
import type { TypingGameState, TypingGameAction } from '../types';
import { getRandomWords } from '../data/typing-words';

const WORD_COUNT = 15;
const COUNTDOWN_SECONDS = 3;

const initialState: TypingGameState = {
  status: 'idle',
  words: [],
  currentWordIndex: 0,
  userInput: '',
  correctChars: 0,
  incorrectChars: 0,
  startTime: null,
  endTime: null,
  countdown: COUNTDOWN_SECONDS,
};

function typingGameReducer(state: TypingGameState, action: TypingGameAction): TypingGameState {
  switch (action.type) {
    case 'START_COUNTDOWN':
      return {
        ...initialState,
        status: 'countdown',
        countdown: COUNTDOWN_SECONDS,
      };

    case 'COUNTDOWN_TICK':
      if (state.countdown <= 1) {
        return {
          ...state,
          status: 'playing',
          words: getRandomWords(WORD_COUNT),
          startTime: Date.now(),
          countdown: 0,
        };
      }
      return {
        ...state,
        countdown: state.countdown - 1,
      };

    case 'START_GAME':
      return {
        ...state,
        status: 'playing',
        words: action.words,
        startTime: Date.now(),
      };

    case 'INPUT_CHANGE':
      return {
        ...state,
        userInput: action.value,
      };

    case 'SUBMIT_WORD': {
      const currentWord = state.words[state.currentWordIndex];
      const typedWord = state.userInput.trim();

      let correctChars = state.correctChars;
      let incorrectChars = state.incorrectChars;

      for (let i = 0; i < Math.max(currentWord.length, typedWord.length); i++) {
        if (i < typedWord.length && i < currentWord.length && typedWord[i] === currentWord[i]) {
          correctChars++;
        } else if (i < typedWord.length) {
          incorrectChars++;
        }
      }

      const nextIndex = state.currentWordIndex + 1;
      const isFinished = nextIndex >= state.words.length;

      return {
        ...state,
        currentWordIndex: nextIndex,
        userInput: '',
        correctChars,
        incorrectChars,
        status: isFinished ? 'finished' : state.status,
        endTime: isFinished ? Date.now() : state.endTime,
      };
    }

    case 'FINISH_GAME':
      return {
        ...state,
        status: 'finished',
        endTime: Date.now(),
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export function useTypingGame() {
  const [state, dispatch] = useReducer(typingGameReducer, initialState);

  const startGame = useCallback(() => {
    dispatch({ type: 'START_COUNTDOWN' });
  }, []);

  const handleInputChange = useCallback((value: string) => {
    dispatch({ type: 'INPUT_CHANGE', value });
  }, []);

  const submitWord = useCallback(() => {
    dispatch({ type: 'SUBMIT_WORD' });
  }, []);

  const resetGame = useCallback(() => {
    dispatch({ type: 'RESET' });
  }, []);

  useEffect(() => {
    if (state.status === 'countdown' && state.countdown > 0) {
      const timer = setTimeout(() => {
        dispatch({ type: 'COUNTDOWN_TICK' });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [state.status, state.countdown]);

  const calculateWPM = useCallback(() => {
    if (!state.startTime) return 0;
    const endTime = state.endTime || Date.now();
    const minutes = (endTime - state.startTime) / 60000;
    if (minutes === 0) return 0;
    return Math.round((state.correctChars / 5) / minutes);
  }, [state.startTime, state.endTime, state.correctChars]);

  const calculateAccuracy = useCallback(() => {
    const total = state.correctChars + state.incorrectChars;
    if (total === 0) return 100;
    return Math.round((state.correctChars / total) * 100);
  }, [state.correctChars, state.incorrectChars]);

  return {
    state,
    startGame,
    handleInputChange,
    submitWord,
    resetGame,
    wpm: calculateWPM(),
    accuracy: calculateAccuracy(),
  };
}
