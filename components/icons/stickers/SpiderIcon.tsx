
import React from 'react';
const SpiderIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(5,5) scale(0.9)">
        <ellipse cx="50" cy="65" rx="20" ry="25" fill="#333"/>
        <circle cx="50" cy="40" r="15" fill="#333"/>
        <path stroke="#333" strokeWidth="4" strokeLinecap="round" d="M35 35 L15 15 M30 45 L5 40 M30 55 L5 60 M35 65 L15 85"/>
        <path stroke="#333" strokeWidth="4" strokeLinecap="round" d="M65 35 L85 15 M70 45 L95 40 M70 55 L95 60 M65 65 L85 85"/>
        <circle cx="45" cy="35" r="3" fill="white"/>
        <circle cx="55" cy="35" r="3" fill="white"/>
        <circle cx="46" cy="35" r="1" fill="black"/>
        <circle cx="56" cy="35" r="1" fill="black"/>
    </g>
  </svg>
);
export default SpiderIcon;
