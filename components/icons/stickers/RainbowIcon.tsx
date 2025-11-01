
import React from 'react';
const RainbowIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(5,5) scale(0.9)">
      <path d="M10 80 A 40 40, 0, 0, 1, 90 80" fill="none" stroke="#FF5252" strokeWidth="10"/>
      <path d="M20 80 A 30 30, 0, 0, 1, 80 80" fill="none" stroke="#FFCD42" strokeWidth="10"/>
      <path d="M30 80 A 20 20, 0, 0, 1, 70 80" fill="none" stroke="#4CAF50" strokeWidth="10"/>
      <path d="M40 80 A 10 10, 0, 0, 1, 60 80" fill="none" stroke="#2196F3" strokeWidth="10"/>
      <path d="M10 80 A 45 45, 0, 0, 1, 90 80" fill="none" stroke="#9C27B0" strokeWidth="10"/>
      <path d="M0 80 A 50 50, 0, 0, 1, 100 80" fill="none" stroke="#E91E63" strokeWidth="10"/>
      <path d="M-10 80 A 60 60, 0, 0, 1, 110 80" fill="none" stroke="#03A9F4" strokeWidth="10"/>
    </g>
  </svg>
);
export default RainbowIcon;
