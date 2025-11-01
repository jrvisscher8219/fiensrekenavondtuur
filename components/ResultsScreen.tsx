import React, { useEffect, useState } from 'react';
import StarIcon from './icons/StarIcon';
import { getStickerForTable } from './icons/stickers/stickerMap';
import type { SoundName } from '../types';

interface ResultsScreenProps {
  score: number;
  total: number;
  tableNumber: number;
  onRetry: () => void;
  onGoHome: () => void;
  newStickerId: number | null;
  playSound: (sound: SoundName) => void;
}

const messages = {
  perfect: "Wauw, perfect!",
  great: "Super goed gedaan!",
  good: "Goed bezig!",
  okay: "Blijf oefenen!",
};

const ConfettiPiece: React.FC<{ style: React.CSSProperties }> = ({ style }) => {
    return <div className="confetti" style={style}></div>;
};

const NewStickerNotification: React.FC<{ tableNumber: number }> = ({ tableNumber }) => {
  const StickerComponent = getStickerForTable(tableNumber);
  // Using a key on the outer div helps React re-trigger the animation on retry
  return (
    <div key={tableNumber} className="animate-bounce" style={{ animationDuration: '1.5s' }}>
      <div className="bg-white p-4 rounded-2xl shadow-lg border-2 border-yellow-300 mt-6">
          <p className="text-lg font-bold text-yellow-600">Nieuwe sticker verdiend!</p>
          <div className="flex justify-center items-center h-24 w-24 mx-auto my-2">
              <StickerComponent className="h-full w-full"/>
          </div>
      </div>
    </div>
  );
};


const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, total, tableNumber, onRetry, onGoHome, newStickerId, playSound }) => {
  const [confetti, setConfetti] = useState<{ id: number, style: React.CSSProperties }[]>([]);

  const percentage = (score / total) * 100;
  let message = messages.okay;
  if (percentage === 100) message = messages.perfect;
  else if (percentage >= 80) message = messages.great;
  else if (percentage >= 50) message = messages.good;
  
  const showConfetti = percentage >= 80;

  useEffect(() => {
    if (newStickerId !== null) {
      playSound('sticker');
    } else if (showConfetti) {
      playSound('win');
    }
  }, [newStickerId, showConfetti, playSound]);

  useEffect(() => {
    if (showConfetti) {
      const newConfetti = Array.from({ length: 50 }).map((_, i) => {
        const colors = ['#ff69b4', '#9370db', '#00ced1', '#ffd700'];
        return {
          id: i + Date.now(),
          style: {
            left: `${Math.random() * 100}%`,
            backgroundColor: colors[Math.floor(Math.random() * colors.length)],
            animationDelay: `${Math.random() * 2}s`,
            transform: `scale(${Math.random() * 0.5 + 0.5})`,
          },
        };
      });
      setConfetti(newConfetti);
    }
  }, [showConfetti]);


  return (
    <div className="relative overflow-hidden w-full max-w-lg mx-auto text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-100">
      {showConfetti && confetti.map(c => <ConfettiPiece key={c.id} style={c.style} />)}
      
      <h2 className="text-4xl font-extrabold text-pink-500 mb-2 drop-shadow-sm">{message}</h2>
      <p className="text-purple-500 text-lg mb-6">Je hebt de tafel van {tableNumber} geoefend!</p>
      
      <div className="my-8">
        <p className="text-7xl font-black text-purple-700">{score}<span className="text-4xl text-purple-400"> / {total}</span></p>
        <p className="text-lg text-purple-500 mt-2">goed!</p>
      </div>

      <div className="flex justify-center mb-8 space-x-2">
        {Array.from({length: 3}).map((_, i) => (
            <StarIcon key={i} className={`h-16 w-16 transition-all duration-500 ease-out ${i < Math.floor(score/3.34) ? 'text-yellow-400 scale-110' : 'text-gray-300'}`} style={{transitionDelay: `${i * 150}ms`}}/>
        ))}
      </div>

      {newStickerId && <NewStickerNotification tableNumber={newStickerId} />}

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
        <button
          onClick={onRetry}
          className="w-full sm:w-auto px-8 py-4 bg-purple-500 text-white font-bold rounded-full shadow-lg hover:bg-purple-600 transition-transform transform hover:scale-105"
        >
          Nog een keer!
        </button>
        <button
          onClick={onGoHome}
          className="w-full sm:w-auto px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
        >
          Terug naar start
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;