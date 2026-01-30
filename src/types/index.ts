export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  name: string;
  category: 'language' | 'framework' | 'tool' | 'database' | 'other';
  color: string;
  icon: React.ReactNode;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface TypingGameState {
  status: 'idle' | 'countdown' | 'playing' | 'finished';
  words: string[];
  currentWordIndex: number;
  userInput: string;
  correctChars: number;
  incorrectChars: number;
  startTime: number | null;
  endTime: number | null;
  countdown: number;
}

export type TypingGameAction =
  | { type: 'START_COUNTDOWN' }
  | { type: 'COUNTDOWN_TICK' }
  | { type: 'START_GAME'; words: string[] }
  | { type: 'INPUT_CHANGE'; value: string }
  | { type: 'SUBMIT_WORD' }
  | { type: 'FINISH_GAME' }
  | { type: 'RESET' };

export interface HighScore {
  wpm: number;
  accuracy: number;
  date: string;
}
