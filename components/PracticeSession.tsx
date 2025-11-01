import React, { useState, useEffect, useCallback } from 'react';
import { generateQuestionsForTable } from '../utils/quizGenerator';
import type { Question, PracticeMode, SoundName } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';
import BackspaceIcon from './icons/BackspaceIcon';

interface PracticeSessionProps {
  tableNumber: number;
  onSessionEnd: (score: number, total: number) => void;
  mode: PracticeMode;
  playSound: (sound: SoundName) => void;
}

interface NumericKeypadProps {
    onKeyPress: (key: string) => void;
    onSubmit: () => void;
    inputDisabled: boolean;
    submitDisabled: boolean;
}

const NumericKeypad: React.FC<NumericKeypadProps> = ({ onKeyPress, onSubmit, inputDisabled, submitDisabled }) => {
    const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'backspace', '0', 'submit'];
    return (
        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mt-4">
            {keys.map(key => {
                const isSubmit = key === 'submit';
                const isBackspace = key === 'backspace';

                if (isSubmit) {
                    return <button key={key} onClick={onSubmit} disabled={submitDisabled} className="col-span-2 h-16 bg-purple-500 text-white font-bold rounded-xl shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105 disabled:bg-gray-300 disabled:scale-100">Controleer</button>
                }

                return (
                    <button 
                        key={key} 
                        onClick={() => onKeyPress(key)}
                        disabled={inputDisabled}
                        className={`h-16 text-3xl font-bold rounded-xl shadow-md transition transform hover:scale-105 ${isBackspace ? 'bg-pink-400 text-white' : 'bg-white/80 text-purple-600 hover:bg-pink-100'} disabled:opacity-50 disabled:scale-100`}
                    >
                        {isBackspace ? <BackspaceIcon className="h-8 w-8 mx-auto" /> : key}
                    </button>
                )
            })}
        </div>
    );
}

const PracticeSession: React.FC<PracticeSessionProps> = ({ tableNumber, onSessionEnd, mode, playSound }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isAnswered, setIsAnswered] = useState(false);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  
  // State for Multiple Choice
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  
  // State for Typing
  const [typedAnswer, setTypedAnswer] = useState('');

  useEffect(() => {
    setQuestions(generateQuestionsForTable(tableNumber, 10));
    setCurrentIndex(0);
    setScore(0);
    setIsAnswered(false);
    setSelectedAnswer(null);
    setFeedback(null);
    setTypedAnswer('');
  }, [tableNumber, mode]);

  const handleNextQuestion = useCallback(() => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setTypedAnswer('');
      setIsAnswered(false);
      setFeedback(null);
    } else {
      onSessionEnd(score, questions.length);
    }
  }, [currentIndex, questions.length, onSessionEnd, score]);
  
  const submitAnswer = useCallback((answer: number) => {
    if (isAnswered) return;

    setIsAnswered(true);

    if (answer === questions[currentIndex].correctAnswer) {
      setScore(prev => prev + 1);
      setFeedback('correct');
      playSound('correct');
    } else {
      setFeedback('incorrect');
      playSound('incorrect');
    }
    
    setTimeout(handleNextQuestion, 1500);
  }, [isAnswered, currentIndex, questions, handleNextQuestion, score, playSound]);

  const handleMultipleChoiceClick = (answer: number) => {
    setSelectedAnswer(answer);
    submitAnswer(answer);
  };

  const handleTypingSubmit = () => {
    if (typedAnswer !== '') {
      submitAnswer(parseInt(typedAnswer, 10));
    }
  };

  const handleNumericKeyPress = (key: string) => {
    if (isAnswered) return;
    if (key === 'backspace') {
        setTypedAnswer(val => val.slice(0, -1));
    } else if (typedAnswer.length < 3) {
        setTypedAnswer(val => val + key);
    }
  };

  if (questions.length === 0) {
    return <div>Loading questions...</div>;
  }

  const currentQuestion = questions[currentIndex];
  const progressPercentage = ((currentIndex) / questions.length) * 100;

  return (
    <div className="w-full max-w-lg mx-auto p-6 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-100">
      <div className="mb-4">
        <div className="flex justify-between items-center text-purple-600 font-bold mb-2">
            <span>Vraag {currentIndex + 1} / {questions.length}</span>
            <span className="text-yellow-500">Score: {score}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-gradient-to-r from-pink-400 to-purple-400 h-4 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
        </div>
      </div>
      
      <div className="text-center my-10">
        <p className="text-6xl md:text-8xl font-extrabold text-purple-700 drop-shadow-lg">{currentQuestion.text}</p>
      </div>

      {mode === 'multiple-choice' ? (
        <div className="grid grid-cols-2 gap-4">
          {currentQuestion.options.map(option => {
            const isCorrect = option === currentQuestion.correctAnswer;
            const isSelected = option === selectedAnswer;
            
            let buttonClass = 'bg-white hover:bg-pink-100 text-purple-600';
            if (isAnswered && isCorrect) {
                buttonClass = 'bg-green-400 text-white transform scale-105';
            } else if (isAnswered && isSelected && !isCorrect) {
                buttonClass = 'bg-red-400 text-white transform scale-105';
            } else if (isAnswered && !isSelected && isCorrect) {
                buttonClass = 'bg-green-400/50 text-white';
            }

            return (
              <button
                key={option}
                onClick={() => handleMultipleChoiceClick(option)}
                disabled={isAnswered}
                className={`relative w-full h-24 rounded-2xl text-4xl font-bold shadow-lg transition-all duration-300 flex items-center justify-center ${buttonClass}`}
              >
                {option}
                {isAnswered && isSelected && isCorrect && <CheckIcon className="absolute top-2 right-2 h-8 w-8 text-white"/>}
                {isAnswered && isSelected && !isCorrect && <XIcon className="absolute top-2 right-2 h-8 w-8 text-white"/>}
              </button>
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-4">
          <div className="relative w-full max-w-xs h-24 rounded-2xl text-center text-5xl font-bold text-purple-700 shadow-inner flex items-center justify-center bg-white border-4 transition-colors duration-300
              ${feedback === 'correct' ? 'border-green-400' : ''}
              ${feedback === 'incorrect' ? 'border-red-400' : ''}
              ${!feedback ? 'border-gray-200' : ''}">
            <span>{typedAnswer || '?'}</span>
            {feedback === 'correct' && <CheckIcon className="absolute top-1/2 -translate-y-1/2 right-4 h-10 w-10 text-green-500"/>}
            {feedback === 'incorrect' && <XIcon className="absolute top-1/2 -translate-y-1/2 right-4 h-10 w-10 text-red-500"/>}
          </div>
          {feedback === 'incorrect' && (
            <p className="text-red-500 font-bold -mt-2">Het juiste antwoord was: {currentQuestion.correctAnswer}</p>
          )}
          <NumericKeypad onKeyPress={handleNumericKeyPress} onSubmit={handleTypingSubmit} inputDisabled={isAnswered} submitDisabled={isAnswered || typedAnswer === ''} />
        </div>
      )}
    </div>
  );
};

export default PracticeSession;