'use client';

import React from 'react';
import { CardFooterProps } from '@/types';

/**
 * CardFooter component for the PromptCard
 * Contains clear/reset button and other footer actions
 */
export default function CardFooter({
  children,
  alignment = 'center',
  className = '',
}: CardFooterProps) {
  const alignmentClasses = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div 
      className={`
        flex 
        ${alignmentClasses[alignment]}
        items-center 
        mt-4
        ${className}
      `}
    >
      {children}
    </div>
  );
}