import React from 'react';
import type { Progress, PracticeMode } from '../types';
import StarIcon from './icons/StarIcon';
import BookOpenIcon from './icons/BookOpenIcon';
import ListIcon from './icons/ListIcon';
import PencilIcon from './icons/PencilIcon';
import SpeakerOnIcon from './icons/SpeakerOnIcon';
import SpeakerOffIcon from './icons/SpeakerOffIcon';


interface TableSelectionProps {
  onSelectTable: (table: number) => void;
  progress: Progress;
  onShowStickerAlbum: () => void;
  practiceMode: PracticeMode;
  onSetPracticeMode: (mode: PracticeMode) => void;
  isMuted: boolean;
  onToggleMute: () => void;
}

const TableCard: React.FC<{ table: number, onSelect: () => void, score: number }> = ({ table, onSelect, score }) => {
    const stars = Math.floor((score || 0) / 3.34); // 3 stars for score >= 9
    const colors = [
        'bg-pink-400 hover:bg-pink-500',
        'bg-purple-400 hover:bg-purple-500',
        'bg-teal-400 hover:bg-teal-500',
        'bg-yellow-400 hover:bg-yellow-500',
        'bg-rose-400 hover:bg-rose-500',
    ];
    const colorClass = colors[table % 5];

    return (
        <button
            onClick={onSelect}
            className={`relative w-full h-32 rounded-2xl text-white font-black text-5xl shadow-lg transform transition-transform hover:scale-105 ${colorClass} flex flex-col items-center justify-center p-2`}
        >
            <span>{table}</span>
            <div className="absolute bottom-2 flex space-x-1">
                {Array.from({ length: 3 }).map((_, i) => (
                    <StarIcon key={i} className={`h-6 w-6 ${i < stars ? 'text-yellow-300' : 'text-white/30'}`} />
                ))}
            </div>
        </button>
    );
};

const ModeSelector: React.FC<{ currentMode: PracticeMode, setMode: (mode: PracticeMode) => void }> = ({ currentMode, setMode }) => {
  const getButtonClass = (mode: PracticeMode) => {
    const baseClass = "flex items-center justify-center gap-2 px-4 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-md";
    if (mode === currentMode) {
      return `${baseClass} bg-purple-500 text-white`;
    }
    return `${baseClass} bg-white/80 text-purple-500 hover:bg-purple-100`;
  };

  return (
    <div className="flex justify-center gap-4 mb-8">
      <button onClick={() => setMode('multiple-choice')} className={getButtonClass('multiple-choice')}>
        <ListIcon className="h-6 w-6" />
        <span>Meerkeuze</span>
      </button>
      <button onClick={() => setMode('typing')} className={getButtonClass('typing')}>
        <PencilIcon className="h-6 w-6" />
        <span>Zelf typen</span>
      </button>
    </div>
  );
};


const TableSelection: React.FC<TableSelectionProps> = ({ onSelectTable, progress, onShowStickerAlbum, practiceMode, onSetPracticeMode, isMuted, onToggleMute }) => {
  return (
    <div className="relative text-center p-4">
        <div className="absolute top-0 right-0 flex gap-2">
            <button onClick={onShowStickerAlbum} className="p-3 bg-white/80 rounded-full shadow-md hover:bg-yellow-100 transition transform hover:scale-110">
                <BookOpenIcon className="h-8 w-8 text-yellow-500"/>
            </button>
            <button onClick={onToggleMute} className="p-3 bg-white/80 rounded-full shadow-md hover:bg-purple-100 transition transform hover:scale-110">
                {isMuted ? <SpeakerOffIcon className="h-8 w-8 text-purple-500"/> : <SpeakerOnIcon className="h-8 w-8 text-purple-500" />}
            </button>
        </div>
        <img src="https://picsum.photos/seed/fien-avatar/100" alt="Fien's Avatar" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white shadow-lg" />
      <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-2 drop-shadow">Fien's Tafeltjes Avontuur</h1>
      <p className="text-purple-500 text-lg mb-6">Kies een tafel om te oefenen!</p>
      
      <ModeSelector currentMode={practiceMode} setMode={onSetPracticeMode} />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {Array.from({ length: 10 }, (_, i) => i + 1).map(table => (
          <TableCard 
            key={table} 
            table={table} 
            onSelect={() => onSelectTable(table)}
            score={progress[table] || 0}
          />
        ))}
      </div>
    </div>
  );
};

export default TableSelection;