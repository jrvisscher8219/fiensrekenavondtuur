
import React from 'react';
const CarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(5, 5) scale(0.9)">
        <path fill="#FFC107" d="M85 50h-5l-3-6h-12c0-8-6-14-14-14h-22c-8 0-14 6-14 14H3l-3 6H0v12h5c0 8 6 14 14 14h52c8 0 14-6 14-14h5V50z"/>
        <path fill="#2196F3" d="M74 34H26c-3 0-6 2-6 5v20h60V39c0-3-3-5-6-5z"/>
        <path fill="#FFF" d="M38 39H24v15h14V39zm34 0H58v15h14V39z"/>
        <circle fill="#333" cx="24" cy="74" r="10"/>
        <circle fill="#FFF" cx="24" cy="74" r="4"/>
        <circle fill="#333" cx="66" cy="74" r="10"/>
        <circle fill="#FFF" cx="66" cy="74" r="4"/>
        <path fill="#FF9800" d="M12 50H4v6h8zm72 0h-8v6h8z"/>
        <path fill="#F44336" d="M6 62h5v6H6zm78 0h-5v6h5z"/>
    </g>
  </svg>
);
export default CarIcon;
