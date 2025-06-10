'use client';

import React from 'react';
import { PromptCardProps } from '@/types';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';

/**
 * PromptCard component displays the generated prompt in a visually appealing card format
 * with header and footer sections for actions.
 * 
 * Design specifications:
 * - Background: #ccc19e (surface.card from design tokens)
 * - Border radius: 24px (radius.lg from design tokens)
 * - Box shadow: 0 4px 10px rgba(0,0,0,0.15) (elevation.2 from design tokens)
 * - Padding: 24px (spacing.6 from design tokens)
 * - Prompt text: Font family 'EB Garamond', serif (typography.font-family.body)
 * - Prompt text: Font size 24px (typography.font-size.xl)
 * - Prompt text: Color #1b2f1d (text.primary from design tokens)
 */
export default function PromptCard({
  prompt,
  isEditing = false,
  isFavorited = false,
  onEdit,
  onFavorite,
  onClear,
  className = '',
}: PromptCardProps) {
  return (
    <div 
      className={`
        bg-[#ccc19e] 
        rounded-[24px] 
        shadow-[0_4px_10px_rgba(0,0,0,0.15)] 
        p-6 
        w-full
        relative
        ${isEditing ? 'ring-2 ring-[#62827c] ring-opacity-50' : ''}
        ${className}
      `}
    >
      {/* Card Header with action buttons */}
      <CardHeader>
        <div className="flex gap-3">
          {/* Edit Button */}
          {onEdit && (
            <button
              onClick={onEdit}
              className={`
                flex 
                items-center 
                justify-center 
                w-8 
                h-8 
                rounded-full 
                bg-[#62827c] 
                text-white 
                hover:bg-[#4d6560] 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#62827c] 
                focus:ring-opacity-50
                transition-colors 
                duration-150
                ${isEditing ? 'bg-[#4d6560]' : ''}
              `}
              aria-label="Edit prompt"
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="m18.5 2.5 a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
            </button>
          )}
          
          {/* Favorite Button */}
          {onFavorite && (
            <button
              onClick={onFavorite}
              className={`
                flex 
                items-center 
                justify-center 
                w-8 
                h-8 
                rounded-full 
                ${isFavorited ? 'bg-[#b5543a] text-white' : 'bg-transparent text-[#c8bf9b] hover:bg-[#b5543a] hover:text-white'} 
                focus:outline-none 
                focus:ring-2 
                focus:ring-[#b5543a] 
                focus:ring-opacity-50
                transition-colors 
                duration-150
              `}
              aria-label={isFavorited ? "Remove from favorites" : "Add to favorites"}
            >
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill={isFavorited ? "currentColor" : "none"} 
                stroke="currentColor" 
                strokeWidth="2"
              >
                <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
              </svg>
            </button>
          )}
        </div>
      </CardHeader>
      
      {/* Prompt Text Display Area */}
      <div className="py-2">
        <p 
          className={`
            font-['EB_Garamond',serif] 
            text-[24px] 
            text-[#1b2f1d] 
            leading-[1.6] 
            font-normal
            whitespace-pre-wrap
            break-words
          `}
        >
          {prompt}
        </p>
      </div>
      
      {/* Card Footer with clear/reset button */}
      <CardFooter alignment="center">
        {onClear && (
          <button
            onClick={onClear}
            className={`
              px-4 
              py-2 
              bg-transparent 
              text-[#5c4e25] 
              border 
              border-[#5c4e25] 
              rounded-[999px] 
              font-['EB_Garamond',serif] 
              font-semibold 
              text-sm 
              hover:bg-[#5c4e25] 
              hover:text-white 
              focus:outline-none 
              focus:ring-2 
              focus:ring-[#5c4e25] 
              focus:ring-opacity-50
              transition-colors 
              duration-150
            `}
            aria-label="Clear prompt"
          >
            Clear
          </button>
        )}
      </CardFooter>
    </div>
  );
}