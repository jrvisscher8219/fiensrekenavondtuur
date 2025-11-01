
import React from 'react';
const LadybugIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(5,5) scale(0.9)">
        <path fill="#333" d="M30 40C13 40 0 53 0 70v10h60V70C60 53 47 40 30 40z"/>
        <ellipse fill="#F44336" cx="45" cy="50" rx="40" ry="35"/>
        <path fill="#333" d="M45 15V85" stroke="#333" strokeWidth="4"/>
        <circle fill="#333" cx="25" cy="35" r="7"/>
        <circle fill="#333" cx="65" cy="35" r="7"/>
        <circle fill="#333" cx="20" cy="60" r="7"/>
        <circle fill="#333" cx="70" cy="60" r="7"/>
        <circle fill="#333" cx="35" cy="75" r="7"/>
        <circle fill="#333" cx="55" cy="75" r="7"/>
        <circle fill="#FFF" cx="15" cy="25" r="5"/>
        <circle fill="#FFF" cx="45" cy="25" r="5"/>
        <circle fill="#333" cx="15" cy="25" r="2"/>
        <circle fill="#333" cx="45" cy="25" r="2"/>
    </g>
  </svg>
);
export default LadybugIcon;
