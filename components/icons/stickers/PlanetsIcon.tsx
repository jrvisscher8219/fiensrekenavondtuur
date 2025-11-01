
import React from 'react';
const PlanetsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(5,5) scale(0.9)">
        <circle cx="15" cy="15" r="10" fill="#F44336"/>
        <circle cx="50" cy="20" r="15" fill="#FFC107"/>
        <ellipse cx="50" cy="20" rx="25" ry="8" fill="none" stroke="#FFEB3B" strokeWidth="2"/>
        <circle cx="80" cy="25" r="8" fill="#4CAF50"/>
        <circle cx="20" cy="50" r="12" fill="#2196F3"/>
        <circle cx="60" cy="55" r="18" fill="#9C27B0"/>
        <circle cx="85" cy="70" r="5" fill="#00BCD4"/>
        <circle cx="10" cy="80" r="6" fill="#E91E63"/>
        <circle cx="40" cy="85" r="9" fill="#FF9800"/>
        <circle cx="70" cy="90" r="4" fill="#795548"/>
    </g>
  </svg>
);
export default PlanetsIcon;
