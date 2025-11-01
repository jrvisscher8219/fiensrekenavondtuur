
import React from 'react';
import UnicornIcon from './UnicornIcon';
import HeartsIcon from './HeartsIcon';
import CloverIcon from './CloverIcon';
import CarIcon from './CarIcon';
import StarfishIcon from './StarfishIcon';
import LadybugIcon from './LadybugIcon';
import RainbowIcon from './RainbowIcon';
import SpiderIcon from './SpiderIcon';
import PlanetsIcon from './PlanetsIcon';
import PawsIcon from './PawsIcon';

const stickerMap: Record<number, React.FC<React.SVGProps<SVGSVGElement>>> = {
    1: UnicornIcon,
    2: HeartsIcon,
    3: CloverIcon,
    4: CarIcon,
    5: StarfishIcon,
    6: LadybugIcon,
    7: RainbowIcon,
    8: SpiderIcon,
    9: PlanetsIcon,
    10: PawsIcon,
};

// A fallback component for any case where a sticker might not be found
const FallbackSticker: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354l-4.618 2.893c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);


export const getStickerForTable = (tableNumber: number): React.FC<React.SVGProps<SVGSVGElement>> => {
    return stickerMap[tableNumber] || FallbackSticker;
};
