'use client';

import React from 'react';
import { ClearButtonProps } from '@/types';

/**
 * ClearButton component for resetting/clearing the current prompt.
 * 
 * Design specifications:
 * - Background: transparent
 * - Color: #62827c (color.accent.calm)
 * - Border radius: 999px (pill)
 * - Icon: eraser
 */
export default function ClearButton({
  onClear,
  className = '',
}: ClearButtonProps) {
  return (
    <button
      type="button"
      onClick={onClear}
      aria-label="Clear prompt"
      className={`
        inline-flex
        items-center
        justify-center
        p-2
        bg-transparent
        hover:bg-[#62827c]/10
        text-[#62827c]
        rounded-[999px]
        transition-colors
        focus:outline-none
        focus:ring-2
        focus:ring-[#62827c]
        ${className}
      `}
    >
      {/* Eraser SVG Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className="w-5 h-5"
      >
        <path d="M20 20H9L4 15C2.9 13.9 2.9 12.1 4 11L13 2C14.1 0.9 15.9 0.9 17 2L22 7C23.1 8.1 23.1 9.9 22 11L13 20" />
        <path d="M4 15L9 20" />
        <path d="M9 15L20 4" />
      </svg>
      <span className="ml-2">Clear</span>
    </button>
  );
}