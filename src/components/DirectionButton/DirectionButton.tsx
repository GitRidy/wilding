'use client';

import React from 'react';
import { DirectionButtonProps } from '@/types';
import styles from './DirectionButton.module.css';

/**
 * DirectionButton component for evolve chip functionality
 * Provides themed buttons for different prompt evolution directions
 * 
 * Supports six variants: wild, pure, earthy, classy, emotive, complex
 * Each variant uses corresponding color tokens from design-tokens.json
 */
export default function DirectionButton({
  variant,
  label,
  icon,
  onClick,
  disabled = false,
  loading = false,
  className = '',
}: DirectionButtonProps) {
  const handleClick = () => {
    if (!disabled && !loading && onClick) {
      onClick();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if ((event.key === 'Enter' || event.key === ' ') && !disabled && !loading) {
      event.preventDefault();
      handleClick();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled || loading}
      className={`
        ${styles.directionButton}
        ${styles[variant]}
        ${disabled ? styles.disabled : ''}
        ${loading ? styles.loading : ''}
        ${className}
      `}
      aria-label={`Evolve prompt in ${variant} direction`}
      aria-disabled={disabled || loading}
    >
      {loading ? (
        <div className={styles.spinner} aria-hidden="true" />
      ) : (
        <>
          {icon && (
            <span className={styles.icon} aria-hidden="true">
              {icon}
            </span>
          )}
          <span className={styles.label}>
            {label}
          </span>
        </>
      )}
    </button>
  );
}