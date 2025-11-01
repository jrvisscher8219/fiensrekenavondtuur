export interface Question {
  text: string;
  correctAnswer: number;
  options: number[];
}

export type Progress = Record<number, number>; // key: table number, value: best score
export type Stickers = Record<number, boolean>; // key: table number, value: unlocked

export enum GameState {
  SELECTING = 'SELECTING',
  PRACTICING = 'PRACTICING',
  RESULTS = 'RESULTS',
  STICKER_ALBUM = 'STICKER_ALBUM',
}

export type PracticeMode = 'multiple-choice' | 'typing';

export type SoundName = 'click' | 'correct' | 'incorrect' | 'win' | 'sticker';