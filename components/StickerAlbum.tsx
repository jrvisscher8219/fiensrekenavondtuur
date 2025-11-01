import React from 'react';
import type { Stickers, SoundName } from '../types';
import { getStickerForTable } from './icons/stickers/stickerMap';

interface StickerAlbumProps {
    stickers: Stickers;
    onGoHome: () => void;
    playSound: (sound: SoundName) => void;
}

const StickerSlot: React.FC<{ tableNumber: number; isUnlocked: boolean }> = ({ tableNumber, isUnlocked }) => {
    const StickerComponent = getStickerForTable(tableNumber);

    return (
        <div className={`aspect-square w-full rounded-2xl flex flex-col items-center justify-center p-2 transition-all duration-500 ${isUnlocked ? 'bg-white/90 shadow-lg' : 'bg-black/10'}`}>
            {isUnlocked ? (
                <>
                    <div className="flex-grow w-full h-full p-1">
                        <StickerComponent className="w-full h-full" />
                    </div>
                    <span className="font-bold text-purple-600">Tafel van {tableNumber}</span>
                </>
            ) : (
                <span className="text-5xl font-black text-white/50">?</span>
            )}
        </div>
    );
};

const StickerAlbum: React.FC<StickerAlbumProps> = ({ stickers, onGoHome, playSound }) => {
    return (
        <div className="w-full max-w-2xl mx-auto p-6 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl border border-pink-100">
            <div className="text-center mb-8">
                <h1 className="text-4xl md:text-5xl font-extrabold text-pink-500 mb-2 drop-shadow">Fien's Stickerboek</h1>
                <p className="text-purple-500 text-lg">Verzamel alle stickers door de tafels te oefenen!</p>
            </div>

            <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
                {Array.from({ length: 10 }, (_, i) => i + 1).map(table => (
                    <StickerSlot key={table} tableNumber={table} isUnlocked={!!stickers[table]} />
                ))}
            </div>

            <div className="text-center mt-8">
                <button
                    onClick={() => {
                        playSound('click');
                        onGoHome();
                    }}
                    className="px-8 py-4 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition-transform transform hover:scale-105"
                >
                    Terug naar start
                </button>
            </div>
        </div>
    );
};

export default StickerAlbum;