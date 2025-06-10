'use client';

import React from 'react';
import { CardHeaderProps } from '@/types';

/**
 * CardHeader component for the PromptCard
 * Contains edit and favorite action buttons
 */
export default function CardHeader({
  children,
  className = '',
}: CardHeaderProps) {
  return (
    <div 
      className={`
        flex 
        justify-between 
        items-center 
        mb-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}