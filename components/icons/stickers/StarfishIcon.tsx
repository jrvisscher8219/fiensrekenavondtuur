
import React from 'react';
const StarfishIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(5,5) scale(0.9)">
        <path fill="#FF8A80" d="M50 0L61 35l34 12-27 24 10 39-38-22-38 22 10-39L5 47l34-12z"/>
        <path fill="#FFCDD2" d="M50 10L58 37l27 10-21 19 8 30-32-17-32 17 8-30-21-19 27-10z"/>
        <circle fill="#FF8A80" cx="50" cy="50" r="12"/>
        <circle fill="#FFF" cx="46" cy="46" r="3"/>
        <circle fill="#FFF" cx="54" cy="46" r="3"/>
        <path fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" d="M47 54c2-2 6-2 8 0"/>
    </g>
  </svg>
);
export default StarfishIcon;
