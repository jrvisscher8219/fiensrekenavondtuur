
import type { Question } from '../types';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const generateQuestionsForTable = (tableNumber: number, count: number = 10): Question[] => {
  const questions: Question[] = [];
  const multipliers = shuffleArray(Array.from({ length: 10 }, (_, i) => i + 1));

  for (let i = 0; i < count; i++) {
    const multiplier = multipliers[i];
    const correctAnswer = tableNumber * multiplier;

    const options = new Set<number>();
    options.add(correctAnswer);

    // Generate distractors
    while (options.size < 4) {
      const randomChoice = Math.floor(Math.random() * 3);
      let distractor: number;

      if (randomChoice === 0) {
        // Close-by answer (e.g., tableNumber * (multiplier +/- 1))
        distractor = tableNumber * (multiplier + (Math.random() > 0.5 ? 1 : -1));
      } else if (randomChoice === 1) {
        // Answer from a nearby table
        distractor = (tableNumber + (Math.random() > 0.5 ? 1 : -1)) * multiplier;
      } else {
        // Random plausible number
        const offset = Math.floor(Math.random() * 5) + 1;
        distractor = correctAnswer + (Math.random() > 0.5 ? offset : -offset);
      }

      if (distractor > 0 && distractor !== correctAnswer) {
        options.add(distractor);
      }
    }
    
    questions.push({
      text: `${multiplier} x ${tableNumber}`,
      correctAnswer,
      options: shuffleArray(Array.from(options)),
    });
  }

  return shuffleArray(questions);
};
