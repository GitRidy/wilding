'use client';

import React from 'react';
import { PromptCardProps } from '@/types';

/**
 * PromptCard component displays the generated prompt in a visually appealing card format.
 * 
 * Design specifications:
 * - Background: #ccc19e
 * - Border radius: 24px
 * - Box shadow: 0 4px 10px rgba(0,0,0,0.15)
 * - Padding: 24px
 * - Max width: 380px
 * - Prompt text: Font family 'EB Garamond', serif
 * - Prompt text: Font size 24px
 * - Prompt text: Color #1b2f1d
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
        mt-6 
        mb-4 
        w-full 
        max-w-[380px] 
        relative
        ${isEditing ? 'editing' : ''}
        ${className}
      `}
    >
      {/* Card Header will be implemented in future tasks */}
      
      {/* Prompt Text */}
      <p 
        className={`
          font-['EB_Garamond',serif] 
          text-[24px] 
          text-[#1b2f1d] 
          leading-relaxed 
          mt-3 
          mb-6 
          mx-0
        `}
      >
        {prompt}
      </p>
      
      {/* Card Footer will be implemented in future tasks */}
    </div>
  );
}