import React, { useState, useEffect, useCallback } from 'react';
import TableSelection from './components/TableSelection';
import PracticeSession from './components/PracticeSession';
import ResultsScreen from './components/ResultsScreen';
import StickerAlbum from './components/StickerAlbum';
import type { Progress, Stickers, PracticeMode, SoundName } from './types';
import { GameState } from './types';
import { playSound as playAudio } from './utils/audio';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.SELECTING);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const [practiceMode, setPracticeMode] = useState<PracticeMode>('multiple-choice');
  const [lastScore, setLastScore] = useState<{ score: number; total: number } | null>(null);
  const [progress, setProgress] = useState<Progress>({});
  const [stickers, setStickers] = useState<Stickers>({});
  const [newStickerUnlocked, setNewStickerUnlocked] = useState<number | null>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('fien-tafeltjes-progress');
      if (savedProgress) setProgress(JSON.parse(savedProgress));

      const savedStickers = localStorage.getItem('fien-tafeltjes-stickers');
      if (savedStickers) setStickers(JSON.parse(savedStickers));

      const savedMutePref = localStorage.getItem('fien-tafeltjes-muted');
      if (savedMutePref) setIsMuted(JSON.parse(savedMutePref));

    } catch (error) {
      console.error("Failed to load data from localStorage", error);
    }
  }, []);

  const playSound = useCallback((sound: SoundName) => {
    if (!isMuted) {
      playAudio(sound);
    }
  }, [isMuted]);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    try {
      localStorage.setItem('fien-tafeltjes-muted', JSON.stringify(newMutedState));
    } catch (error) {
       console.error("Failed to save mute preference to localStorage", error);
    }
  };

  const handleTableSelect = (table: number) => {
    playSound('click');
    setSelectedTable(table);
    setNewStickerUnlocked(null);
    setGameState(GameState.PRACTICING);
  };

  const handleSessionEnd = (score: number, total: number) => {
    if (selectedTable === null) return;
    
    const oldBest = progress[selectedTable] || 0;
    const newBest = Math.max(oldBest, score);
    const updatedProgress = { ...progress, [selectedTable]: newBest };
    setProgress(updatedProgress);
    
    let newStickerId: number | null = null;
    const newStickers = { ...stickers };
    if (score >= 9 && !stickers[selectedTable]) {
      newStickers[selectedTable] = true;
      setStickers(newStickers);
      setNewStickerUnlocked(selectedTable);
      newStickerId = selectedTable;
    }
    
    try {
      localStorage.setItem('fien-tafeltjes-progress', JSON.stringify(updatedProgress));
      if (newStickerId) {
        localStorage.setItem('fien-tafeltjes-stickers', JSON.stringify(newStickers));
      }
    } catch (error) {
      console.error("Failed to save data to localStorage", error);
    }

    setLastScore({ score, total });
    setGameState(GameState.RESULTS);
  };

  const handleGoHome = () => {
    playSound('click');
    setSelectedTable(null);
    setLastScore(null);
    setNewStickerUnlocked(null);
    setGameState(GameState.SELECTING);
  };

  const handleRetry = () => {
    playSound('click');
    if (selectedTable === null) {
      handleGoHome();
      return;
    }
    setLastScore(null);
    setNewStickerUnlocked(null);
    setGameState(GameState.PRACTICING);
  };

  const handleShowStickerAlbum = () => {
    playSound('click');
    setGameState(GameState.STICKER_ALBUM);
  };

  const renderContent = () => {
    switch (gameState) {
      case GameState.PRACTICING:
        if (selectedTable !== null) {
          return <PracticeSession tableNumber={selectedTable} onSessionEnd={handleSessionEnd} mode={practiceMode} playSound={playSound} />;
        }
        return null;
      case GameState.RESULTS:
        if (lastScore !== null && selectedTable !== null) {
          return <ResultsScreen 
            score={lastScore.score} 
            total={lastScore.total} 
            tableNumber={selectedTable} 
            onRetry={handleRetry} 
            onGoHome={handleGoHome}
            newStickerId={newStickerUnlocked}
            playSound={playSound}
          />;
        }
        return null;
      case GameState.STICKER_ALBUM:
        return <StickerAlbum stickers={stickers} onGoHome={handleGoHome} playSound={playSound} />;
      case GameState.SELECTING:
      default:
        return <TableSelection 
          onSelectTable={handleTableSelect} 
          progress={progress} 
          onShowStickerAlbum={handleShowStickerAlbum}
          practiceMode={practiceMode}
          onSetPracticeMode={(mode) => {
            playSound('click');
            setPracticeMode(mode);
          }}
          isMuted={isMuted}
          onToggleMute={toggleMute}
        />;
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gradient-to-br from-pink-100 to-purple-100">
      <main className="w-full max-w-2xl mx-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;