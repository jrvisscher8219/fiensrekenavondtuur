
import React from 'react';
const PawsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(5,5) scale(0.9)">
        <ellipse cx="20" cy="20" rx="8" ry="6" fill="#F48FB1"/>
        <ellipse cx="35" cy="18" rx="8" ry="6" fill="#F48FB1"/>
        <ellipse cx="15" cy="35" rx="6" ry="8" fill="#F48FB1"/>
        <ellipse cx="40" cy="35" rx="6" ry="8" fill="#F48FB1"/>
        <path d="M27.5 40 A 15 15 0 0 1 27.5 25 A 20 12 0 0 0 27.5 40" fill="#E91E63"/>

        <g transform="translate(50, 50)">
            <ellipse cx="20" cy="20" rx="8" ry="6" fill="#CE93D8"/>
            <ellipse cx="35" cy="18" rx="8" ry="6" fill="#CE93D8"/>
            <ellipse cx="15" cy="35" rx="6" ry="8" fill="#CE93D8"/>
            <ellipse cx="40" cy="35" rx="6" ry="8" fill="#CE93D8"/>
            <path d="M27.5 40 A 15 15 0 0 1 27.5 25 A 20 12 0 0 0 27.5 40" fill="#9C27B0"/>
        </g>
    </g>
  </svg>
);
export default PawsIcon;
