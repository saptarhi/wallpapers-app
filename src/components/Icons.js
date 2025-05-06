import React from 'react';

export const HeartIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" width={size} height={size}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75c-1.74 0-3.41.81-4.5 2.09C10.91 4.56 9.24 3.75 7.5 3.75 4.42 3.75 2 6.17 2 9.25c0 3.78 3.4 6.86 8.55 11.54L12 22.25l1.45-1.46C18.6 16.11 22 13.03 22 9.25c0-3.08-2.42-5.5-5.5-5.5z" />
  </svg>
);

export const BrokenHeartIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" width={size} height={size}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.1 21.25L12 21.35l-0.1-.1C6.85 16.61 3.5 13.56 3.5 9.75 3.5 7.5 5.25 5.75 7.5 5.75c1.52 0 2.88.89 3.54 2.2l.96-1.45 1.5 2.5-2 3 2 2-1.4 3.5 1.6 1.8c5.15-4.68 8.55-7.76 8.55-11.54 0-3.08-2.42-5.5-5.5-5.5-1.74 0-3.41.81-4.5 2.09" />
  </svg>
);

export const DownloadIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" width={size} height={size}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12m0 0l-4-4m4 4l4-4m-9 9h10" />
  </svg>
);

export const CloseIcon = ({ size = 24, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke={color} strokeWidth="1.5" viewBox="0 0 24 24" width={size} height={size}>
    <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round"/>
    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round"/>
  </svg>
);
