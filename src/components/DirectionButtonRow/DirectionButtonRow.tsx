'use client';

import React from 'react';
import { DirectionButtonRowProps } from '@/types';
import styles from './DirectionButtonRow.module.css';

/**
 * DirectionButtonRow component for arranging DirectionButton components
 * Provides responsive layout that switches from row (desktop) to grid (mobile)
 * 
 * Layout modes:
 * - row: Horizontal arrangement for desktop
 * - grid: Grid arrangement for mobile/tablet
 */
export default function DirectionButtonRow({
  children,
  layout = 'row',
  className = '',
}: DirectionButtonRowProps) {
  return (
    <div 
      className={`
        ${styles.directionButtonRow}
        ${layout === 'grid' ? styles.gridLayout : styles.rowLayout}
        ${className}
      `}
      role="group"
      aria-label="Prompt evolution direction buttons"
    >
      {children}
    </div>
  );
}