
import React from 'react';
const HeartsIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g transform="translate(10,10) scale(0.8)">
      <path d="M65,21.1c-6.2-6.2-16.4-6.2-22.6,0L39,24.5l-3.4-3.4c-6.2-6.2-16.4-6.2-22.6,0c-6.2,6.2-6.2,16.4,0,22.6 L35.6,65.8c0.9,0.9,2,1.3,3.3,1.3s2.5-0.4,3.4-1.4l22.6-22.6C71.2,37.5,71.2,27.3,65,21.1z" fill="#F4B4D4" stroke="#E665A8" strokeWidth="2" strokeMiterlimit="10"/>
      <path d="M91.9,48c-6.2-6.2-16.4-6.2-22.6,0L65.8,51.5l-3.4-3.4c-6.2-6.2-16.4-6.2-22.6,0c-6.2,6.2-6.2,16.4,0,22.6 l22.6,22.6c0.9,0.9,2,1.3,3.3,1.3s2.5-0.4,3.4-1.4l22.6-22.6C98.1,64.4,98.1,54.2,91.9,48z" fill="#FDECFE" stroke="#B482D8" strokeWidth="2" strokeMiterlimit="10"/>
    </g>
  </svg>
);
export default HeartsIcon;
